import react from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from "react-native";

function Login(props){
    return(
        <View>
            <Text>Login</Text>
            <TextInput placeholder="StudentID"></TextInput>
            <TextInput placeholder="Password"></TextInput>
            <Button title = "Signin" onPress={()=> props.navigation.replace('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Login;

