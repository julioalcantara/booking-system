import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createAccount } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../components/common';


class CreateAccount extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
    this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.createAccount({ email, password });
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
                Create Account 
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
    const { email, password, createAccount, error, loading } = auth;
  
    return { email, password, createAccount, error, loading };
  };
  
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged, createAccount
  })(CreateAccount);