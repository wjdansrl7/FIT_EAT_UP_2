//로그인 화면
import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Input } from "../../components";

const Login = ({ navigation }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();

    //로그인 버튼 클릭 시 동작
    const handleLoginButtonPress = () => {};

    return(
        <View style={styles.container}>
            <Text style={styles.title}>login screen</Text>
            <Input
                    label="Id"
                    value={id}
                    onChangeText={text => setId(text)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Id"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => {}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword  //비밀번호 입력시 입력되는 값이 보이지 않도록 설정
                />
            <Button title="로그인" onPress={ handleLoginButtonPress }/>
            <Button title="회원가입" onPress={()=> navigation.navigate("Signup")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 30,
    },
});

export default Login;