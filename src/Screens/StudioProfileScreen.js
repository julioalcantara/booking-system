import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Linking } from 'react-native';
import { goToBookings, goToProfile, goToStudioProfile } from '../actions';
import { Image } from 'react-native-elements';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavLink, CardSection } from '../components/common';

class StudioProfileScreen  extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={ require('../images/voodooLogo1.png')}
                    style={styles.imageStyle}
                />
                <TouchableOpacity >
                    <CardSection>
                        <Text style={styles.textStyle}>About</Text>
                    </CardSection>
                </TouchableOpacity>
                
                <TouchableOpacity 
                     onPress={() => 
                        Linking.openURL('https://www.google.com/maps/place/275+Glasnevin+Ave,+Glasnevin,+Dublin+11,+D11+Y18W/@53.3901957,-6.2886426,17z/data=!3m1!4b1!4m5!3m4!1s0x48670dfb82a43571:0x1a151e7412818fd6!8m2!3d53.3901925!4d-6.2864539')}>
                    <CardSection>
                        <Text style={styles.textStyle}>Location</Text>
                    </CardSection>   
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <CardSection>
                        <Text style={styles.textStyle}>Terms and Conditios</Text>
                    </CardSection>
                </TouchableOpacity>

                <TouchableOpacity>
                    <CardSection>
                        <Text style={styles.textStyle}>Amenties</Text>
                    </CardSection>
                </TouchableOpacity>


                {/* social media */}
                <View style={styles.socialContainer}>
                    <AntDesign 
                        style={styles.socialIcon} 
                        name = "instagram"
                        onPress={() => 
                            Linking.openURL('https://www.instagram.com/voodooinktattoodublin/')}
                    />
                         
                    <AntDesign 
                        style={styles.socialIcon} 
                        name = "facebook-square"
                        onPress={() => 
                            Linking.openURL('https://www.facebook.com/GET.INKED.UP.NOW.GLASNEVIN/')}
                        
                    /> 
                    <MaterialCommunityIcons 
                        style={styles.socialIcon} 
                        name = "web"
                        onPress={() => 
                            Linking.openURL('https://www.voodooinkstudio.com/')}
                    /> 
                </View>
                

                {/* footer navigation */}
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
        height: 30
      },
      socialContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      },
      socialIcon: {
        marginTop: 30,
        fontSize: 40
      },
    textStyle: {
        fontSize: 20,
        padding: 10
    }
});

export default StudioProfileScreen;