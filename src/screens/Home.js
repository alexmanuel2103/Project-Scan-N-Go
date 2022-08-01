import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import 'react-native-gesture-handler';

function Home(props){
    return(
        <View style={ID_Student.contenedormain}>
            <View style={ID_Student.studentID}>
                <Text style={ID_Student.textID}>Welcome back, Manuel Barraza!</Text>
                <Image style={ID_Student.profilepic}/>
            </View>
        </View>
    );
}


const ID_Student = StyleSheet.create({
    contenedormain:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    studentID:{
        backgroundColor: '#110000',
        borderRadius: 15,
        justifyContent: "center",
        width: '300px',
        height: '500px'
    },
    textID:{
        color: '#ffffff',
        marginBottom: 20,
        textAlign: "center"
    },
    profilepic:{
        width: '150px',
        height: '150px',
        borderRadius: 20,
        marginBottom: 50,
        marginLeft: 70,
        marginRight: 70,
        justifyContent: "center",
        alignItems: "center"
    }

});

export default Home;