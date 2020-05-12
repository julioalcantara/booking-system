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
            placeholder=""
            value={this.props.afirstName}
            onChangeText={value => this.props.adminUpdate({ prop: 'afirstName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name: "
            placeholder=""
            value={this.props.alastName}
            onChangeText={value => this.props.adminUpdate({ prop: 'alastName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone: "
            placeholder="(000) 00 000 0000"
            value={this.props.aphone}
            onChangeText={value => this.props.adminUpdate({ prop: 'aphone', value })}
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
  const { afirstName, alastName, aphone } = state.adminForm;

  return { afirstName, alastName, aphone };
};

export default connect(mapStateToProps, { adminUpdate })(AdminProfileForm);