import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EvilIcons } from '@expo/vector-icons';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.bookingEdit({ booking: this.props.booking });
  }

  render() {
    const { bookingTitle } = this.props.booking;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              <EvilIcons style={styles.calendarIcon} name = "calendar" /> {bookingTitle}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  calendarIcon: {
    fontSize: 35,
  }
});

export default ListItem;