import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookingUpdate, bookingCreate } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import BookingForm from '../Forms/BookingForm';

class BookingCreate extends Component {
  onButtonPress() {
    const {bookingTitle, checkin, checkout } = this.props;

    this.props.bookingCreate({ bookingTitle, checkin, checkout });
  }

  render() {
    return (
      <Card>
        <BookingForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {bookingTitle, checkin, checkout } = state.bookingForm;

  return { bookingTitle, checkin, checkout };
};

export default connect(mapStateToProps, {
  bookingUpdate, bookingCreate
})(BookingCreate);