import react from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { CheckBox } from "react-native-web";

var logo ="<Scan N Go>";

function Login(props){
    return(

        <View style={styles.contenedorprincipal}>
            <LinearGradient
            colors={['#D8A31A','#53273C','#110000']}
            style={styles.background}
            />

            <View>
            <View style={styles.caja}>
                <Text style={styles.welcome}>{logo}</Text>
                <TextInput placeholder="StudentID" style={styles.inputtext}></TextInput>
                <TextInput placeholder="Password" style={styles.inputtext} secureTextEntry={true}></TextInput>
                {/* <Button title = "Signin" onPress={()=> props.navigation.replace('Home')}/> */}
                <TouchableOpacity title="Signin" style={styles.button} onPress={()=> props.navigation.replace('Home')}>
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorprincipal:{
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000
    },
    caja:{
        justifyContent: "center",
        alignItems: "center",
        width: 340,
        height: 500,
        backgroundColor: '#110000',
        borderRadius: 7
    },
    welcome:{
        color: '#ffffff',
        fontSize: 34
    },
    inputtext:{
        height: 40,
        width: 300,
        margin: 12,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        color: '#ffffff',
        padding: 10
    },
    button:{
        backgroundColor: '#D8A31A',
        padding: 10,
        marginTop: 15,
        width: 200,
        borderRadius: 25
    },
    buttontext:{
        fontSize: 20,
        textAlign: "center"
    }
});

export default Login;

