//navigator import 관리
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";


const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;