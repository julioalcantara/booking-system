import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../components/common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
    this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
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
    const { email, password, loginUser, error, loading } = auth;
  
    return { email, password, loginUser, error, loading };
  };
  
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
  })(LoginForm);