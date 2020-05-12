import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet,TouchableOpacity, Text } from 'react-native';
import { goToBookings, goToProfile, goToStudioProfile, logOut } from '../actions';
import { Image } from 'react-native-elements';
import { NavLink, CardSection } from '../components/common';

class StudioProfileScreen  extends Component {

    onRowPress() {
        const txt = <Text>Jajjjjajajaja</Text>;
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={ require('../images/voodooLogo1.png')}
                    style={styles.imageStyle}
                />
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <CardSection>
                        <Text style={styles.textStyle}>About</Text>
                    </CardSection>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <CardSection>
                        <Text style={styles.textStyle}>Location</Text>
                    </CardSection>   
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <CardSection>
                        <Text style={styles.textStyle}>Terms and Conditios</Text>
                    </CardSection>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={logOut}>
                    <CardSection>
                        <Text style={styles.textStyle}>Log Out</Text>
                    </CardSection>
                </TouchableOpacity>
                
                
                <View style={styles.iconStyle} >
                    <TouchableOpacity onPress={goToProfile}>
                        <NavLink text="profile"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToBookings}>
                        <NavLink text="bookings"/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={goToStudioProfile}>
                        <NavLink text="studio"/>
                    </TouchableOpacity>   
                </View>
            </View>
        );
    }
}
    
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'flex-start',
    },
    imageStyle: {
        width: 370,
        height: 107,
        marginLeft: 20,
        marginBottom: 15,
    },
    iconStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
      },
    textStyle: {
        fontSize: 20,
        padding: 10
    }
});

export default StudioProfileScreen;