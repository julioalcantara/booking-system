import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginAdmin, goToCreateAdmin, goToLogin } from '../actions';
import { Card, CardSection, Input, Button, Spinner, NavLink } from '../components/common';

class AdminForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
    this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginAdmin({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}> 
                        {this.props.error}
                    </Text>
                </View>
            )
        }

    }
      
    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress ={this.onButtonPress.bind(this)} >
                Login
                </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input 
                        secureTextEntry
                        label = "Password"
                        placeholder = "password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <TouchableOpacity onPress={goToLogin}>
                    <NavLink 
                        text = "Login as user, HERE!"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={goToCreateAdmin}>
                    <NavLink 
                        text = "Go to create account"
                    />
                </TouchableOpacity>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, loginAdmin, error, loading } = auth;
  
    return { email, password, loginAdmin, error, loading };
  };
  
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginAdmin, goToCreateAdmin, goToLogin
  })(AdminForm);