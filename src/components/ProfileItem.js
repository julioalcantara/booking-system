import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MaterialIcons } from '@expo/vector-icons';

class ProfileItem extends Component {
  onRowPress() {
    Actions.profileEdit({ profile: this.props.profile });
  }

  render() {
    const { firstName } = this.props.profile;
    const { lastName } = this.props.profile;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
            <Text style={styles.titleStyle}>
              Hi, {firstName} {lastName}
              <MaterialIcons style={styles.editIcon} name = "mode-edit"/>
            </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 35
  }
});

export default ProfileItem;