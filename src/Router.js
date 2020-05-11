import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Forms/LoginForm';
import CreateAccount from './Forms/CreateAccount';

import ProfileList from './Screens/ProfileList';
import ProfileCreate from './Screens/ProfileCreate';
import ProfileEdit from './Screens/ProfileEdit';

import BookingList from './Screens/BookingList';
import BookingCreate from './Screens/BookingCreate';
import BookingEdit from './Screens/BookingEdit';

import StudioProfileScreen from './Screens/StudioProfileScreen';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                    <Scene key="createAccont" component={CreateAccount} title="Create Account" />
                </Scene>
                <Scene key="main">
                    <Scene 
                        onRight={()=> Actions.profileCreate()}
                        rightTitle="Add"
                        key="profileList" 
                        component={ProfileList} 
                        title="Profile" 
                        initial
                    />
                    <Scene key="profileCreate" component={ProfileCreate} title="Create Profile" />
                    <Scene key="profileEdit" component={ProfileEdit} title="Edit Profile" />
                </Scene>

                <Scene key="booking">
                    <Scene 
                        onRight={()=> Actions.bookingCreate()}
                        rightTitle="Add"
                        key="bookingList" 
                        component={BookingList} 
                        title="Bookings" 
                        initial
                    />
                    <Scene key="bookingCreate" component={BookingCreate} title="Create Booking" />
                    <Scene key="bookingEdit" component={BookingEdit} title="Edit Booking" />
                </Scene>

                <Scene key="studio">
                    <Scene key="studioPage" component={StudioProfileScreen} title="Studio Profile"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;