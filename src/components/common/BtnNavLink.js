import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const BtnNavLink = ({ text }) => {
    return (
        <Spacer>
            <Text style={styles.link}>{text}</Text>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 20
    }
});

export {BtnNavLink};