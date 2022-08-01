import react from "react";
import { StyleSheet, Text, View,Image} from "react-native";
import 'react-native-gesture-handler';

const PositiveDatesURL = "https://integrative-api.herokuapp.com/dates";
const DateURL = "https://integrative-api.herokuapp.com/date";


const dates = async() => {
    try{
        const request = await fetch(`${DateURL}/${ID.get("id")}`);
        const response = await request.json();
        return response.results;
    }catch(err){
        throw Error(err);
    }
}



function Attendance(props){
    return(
        <View style={attendancestyles.c_prinipal}>
            <Image style={attendancestyles.profileimage} source={require('../img/alexmanuel.png')}/>
            <Text>Attendance List for student</Text>
            <Text>Alex Manuel Barraza Paniagua</Text>
        </View>
    );
}


const attendancestyles = StyleSheet.create({
    c_prinipal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    attendanceImage:{
      width: 200,
      height: 200,
      borderRadius: 100
    },
    profileimage:{
        height: 150,
        width: 150,
        borderRadius: 100
    }
});

export default Attendance;