import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { adminUpdate } from '../actions';
import { CardSection, Input } from '../components/common';

class AdminProfileForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="First Name: "
            placeholder="your first name"
            value={this.props.firstName}
            onChangeText={value => this.props.adminUpdate({ prop: 'firstName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name: "
            placeholder="your last name"
            value={this.props.lastName}
            onChangeText={value => this.props.adminUpdate({ prop: 'lastName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone: "
            placeholder="(000) 00 000 0000"
            value={this.props.phone}
            onChangeText={value => this.props.adminUpdate({ prop: 'phone', value })}
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
  const { firstName, lastName, phone } = state.adminProfileForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, { adminUpdate })(AdminProfileForm);