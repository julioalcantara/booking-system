import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { goToBookings, goToProfile, goToStudioProfile, logOut } from '../actions';
import { Image } from 'react-native-elements';
import { NavLink } from '../components/common/NavLink';
import { BtnNavLink } from '../components/common/BtnNavLink';

class StudioProfileScreen  extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={ require('../images/voodooLogo1.png')}
                    style={styles.imageStyle}
                />
                <View>
                    <BtnNavLink text = "About" />
                    <BtnNavLink text = "Location" />
                    <BtnNavLink text = "Terms and Conditions" />
                    <BtnNavLink text = "Date Availability" />

                    <TouchableOpacity onPress={logOut}>
                        <BtnNavLink text = "Log Out" />
                    </TouchableOpacity>
                </View>
                
                
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
      }
});

export default StudioProfileScreen;