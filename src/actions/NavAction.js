import { Actions } from 'react-native-router-flux';

//navigate to booking screen
export const goToBookings = () => {
    return Actions.booking();
}
  
//navigate to profile screen
export const goToProfile = () => {
    return Actions.profile();
}
  
//navigate to studio profile screen
export const goToStudioProfile = () => {
    return Actions.studio();
}
  
//navigate to users bookins screen
export const goToUsersBookings = () => {
    return Actions.allBookings();
}

//navigate to Create Screen
export const goToCreateAcc = () => {
    return Actions.createAccont();
}
  
//navigate to Login screen
export const goToLogin = () => {
    return Actions.login();
}
  
//navigate to Create Admin Screen
export const goToCreateAdmin = () => {
    return Actions.createAdmin();
}
  
//navigate to Login Admin screen
export const goToAdminLogin = () => {
    return Actions.loginAdmin();
}
