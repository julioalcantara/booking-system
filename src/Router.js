import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Forms/LoginForm';
import CreateAccount from './Forms/CreateAccount';

import ProfileList from './Screens/ProfileList';
import ProfileCreate from './Screens/ProfileCreate';
import ProfileEdit from './Screens/ProfileEdit';

import EmployeeList from './Screens/EmployeeList';
import EmployeeCreate from './Screens/EmployeeCreate';
import EmployeeEdit from './Screens/EmployeeEdit';


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
                        onRight={()=> Actions.employeeCreate()}
                        rightTitle="Add"
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;