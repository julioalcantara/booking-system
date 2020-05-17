import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text} from 'react-native';
import { Image } from 'react-native-elements';


class HomeScreen extends Component {

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.imageStyle}>
                <Image
                    source={ require('../images/logo2.png')}
                    style={{ width: 250, height: 250}}
                />
              </View>   
                
              <Text style={styles.textStyles}>Welcome</Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  imageStyle: {
    marginTop: 120,
    marginBottom: 30,
    alignItems: 'center'
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 30
  }
});

export default connect(null)(HomeScreen);