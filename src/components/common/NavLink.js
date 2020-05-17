import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const NavLink = ({ text }) => {
    return (
        <Spacer>
            <Text style={styles.link}>{text}</Text>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'black',
        fontSize: 15
    }
});

export {NavLink};