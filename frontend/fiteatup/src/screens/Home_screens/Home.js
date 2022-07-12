//홈 화면
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>home screen</Text>
        </View>
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

export default Home;