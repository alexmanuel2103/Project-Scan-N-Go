import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import 'react-native-gesture-handler';

function Profile(props){
    return(
        <View style={StudentProfile.contenedor_principal}>
            <Image style={StudentProfile.studentprofilepic} source={require('../img/alexmanuel.png')}/>
            <Text>Student Profile</Text>
            <Text>Name: Alex Manuel Barraza Paniagua</Text>
            <Text>Group: TIDBIS51M</Text>
            <Text>Career: Information Technologies</Text>
            <Text>Student ID: 6520150003</Text>
            <Text>E-mail: 6520150003@utch.edu.mx</Text>
        </View>
    );
}


const StudentProfile = StyleSheet.create({
    contenedor_principal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    studentprofilepic:{
        height: 200,
        width: 200,
        borderRadius: 100
    }
});

export default Profile;