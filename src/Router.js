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
import UserBookingsScreen from './Screens/UsersBookingsScreen';

import StudioProfileScreen from './Screens/StudioProfileScreen';

import CreateAdmin from './Forms/CreateAdmin';
import AdminForm from './Forms/AdminForm'

import AdminList from './Screens/AdminList';
import AdminCreateProfile from './Screens/AdminCreateProfile';
import AdminEdit from './Screens/AdminEdit';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                    <Scene key="createAccont" component={CreateAccount} title="Create Account" />
                    <Scene key="loginAdmin" component={AdminForm} title="Admin Login" /> 
                    <Scene key="createAdmin" component={CreateAdmin} title="Create Admin Accont" />
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

                <Scene key="admin_main">
                    <Scene 
                        onRight={()=> Actions.adminCreateProfile()}
                        rightTitle="Add"
                        key="adminList" 
                        component={AdminList} 
                        title="Admin" 
                        initial
                    />
                    <Scene key="adminCreateProfile" component={AdminCreateProfile} title="Create Admin" />
                    <Scene key="adminEdit" component={AdminEdit} title="Edit Admin" />
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

                <Scene key="allBookings">
                    <Scene key="userBookings" component={UserBookingsScreen} title="User Bookings" />
                </Scene>

                <Scene key="studio">
                    <Scene key="studioPage" component={StudioProfileScreen} title="Studio Profile"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;