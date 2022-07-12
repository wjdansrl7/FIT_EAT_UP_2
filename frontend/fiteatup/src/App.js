import React from 'react';
import {View, StyleSheet } from 'react-native';
import Navigation from './navigators';


const App = () => {
    return(
        <Navigation />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;