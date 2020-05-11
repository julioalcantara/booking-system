import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import BookingForm from '../Forms/BookingForm';
import { bookingUpdate, bookingSave, bookingDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components/common';

class BookingEdit extends Component {
  state = { showModal: false };

  UNSAFE_componentWillMount() {
    _.each(this.props.booking, (value, prop) => {
      this.props.bookingUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {bookingTitle, checkin, checkout } = this.props;

    this.props.bookingSave({bookingTitle, checkin, checkout, uid: this.props.booking.uid });
  }

  onAccept() {
    const { uid } = this.props.booking;

    this.props.bookingDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <BookingForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delite Booking
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { bookingTitle, checkin, checkout } = state.bookingForm;

  return { bookingTitle, checkin, checkout };
};

export default connect(mapStateToProps, {
  bookingUpdate, bookingSave, bookingDelete
})(BookingEdit);