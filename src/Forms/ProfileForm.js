import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';
import { CardSection, Input } from '../components/common';

class ProfileForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="First Name: "
            value={this.props.firstName}
            onChangeText={value => this.props.profileUpdate({ prop: 'firstName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name: "
            value={this.props.lastName}
            onChangeText={value => this.props.profileUpdate({ prop: 'lastName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone: "
            placeholder="(000) 00 000 0000"
            value={this.props.phone}
            onChangeText={value => this.props.profileUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Whats is your tattoo style?</Text>
          <Picker
            //style={{ flex: 1 }}
            selectedValue={this.props.tattooStyle}
            onValueChange={value => this.props.profileUpdate({ prop: 'tattooStyle', value })}
          >
            <Picker.Item label="Realism" value="Realism" />
            <Picker.Item label="Colour" value="Colour" />
            <Picker.Item label="Old School" value="OldSchool" />
            <Picker.Item label="Neo Traditional" value="NeoTraditional" />
            <Picker.Item label="Colour Realism" value="ColourRealism" />
            <Picker.Item label="Geometric" value="Geometric" />
            <Picker.Item label="Ornamental" value="Ornamental" />
          </Picker>
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
  const { firstName, lastName, phone, tattooStyle } = state.profileForm;

  return { firstName, lastName, phone, tattooStyle };
};

export default connect(mapStateToProps, { profileUpdate })(ProfileForm);