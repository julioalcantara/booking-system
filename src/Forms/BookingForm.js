import React, { Component } from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import { bookingUpdate } from '../actions';
import { CardSection, Input } from '../components/common';

class BookingForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Booking Title: "
            placeholder="Title"
            value={this.props.bookingTitle}
            onChangeText={value => this.props.bookingUpdate({ prop: 'bookingTitle', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Check-in: "
            placeholder="xx/xx/xxxx"
            value={this.props.checkin}
            onChangeText={value => this.props.bookingUpdate({ prop: 'checkin', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Check-out: "
            placeholder="xx/xx/xxxx"
            value={this.props.checkout}
            onChangeText={value => this.props.bookingUpdate({ prop: 'checkout', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { bookingTitle, checkin, checkout } = state.bookingForm;

  return {bookingTitle, checkin, checkout };
};

export default connect(mapStateToProps, { bookingUpdate })(BookingForm);