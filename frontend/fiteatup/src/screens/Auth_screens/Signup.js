//회원가입 화면
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Input } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Signup = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


    //회원가입 버튼 클릭 시 동작
    const handleSignupButtonPress = () => {};

    return(
        <KeyboardAwareScrollView 
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}>
            <View style={styles.container}>
                {/* <Text style={styles.title}>signup screen</Text> */}
                <Input
                    label="Id"
                    value={id}
                    onChangeText={text => setId(text)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="아이디를 입력하세요"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="비밀번호를 입력하세요"
                    returnKeyType="next"
                    isPassword
                />
                <Input
                    ref={passwordConfirmRef}
                    label="passwordconfirm"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                    onSubmitEditing={() => nameRef.current.focus()}
                    placeholder="비밀번호 확인"
                    returnKeyType="next"
                    isPassword
                />
                <Input
                    ref={nameRef}
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => handleSignupButtonPress}
                    placeholder="닉네임을 입력하세요"
                    returnKeyType="done"
                />
                <Button title="회원가입완료" onPress={ handleSignupButtonPress }/>
            </View>
        </KeyboardAwareScrollView>
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

export default Signup;