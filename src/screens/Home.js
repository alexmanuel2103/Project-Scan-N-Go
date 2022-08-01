import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import 'react-native-gesture-handler';
import Barcode from 'react-native-barcode-svg';

function Home(props){
    return(
        <View style={ID_Student.contenedormain}>
            <View style={ID_Student.studentID}>
                <Text style={ID_Student.textID}>Alex Manuel Barraza Paniagua</Text>
                <Image style={ID_Student.profilepic} source={require("../img/alexmanuel.png")}/>
                <Text style={ID_Student.textCareer}>Information Technologies</Text>
                <Text style={ID_Student.textGroup}>TIDBIS51M</Text>
                <Text style={ID_Student.IDNumber}>6520150003</Text>
                <View style={ID_Student.barcodestyle}>
                    <Barcode value="652015003" format="CODE128" lineColor="#ffffff" backgroundColor="#110000" maxWidth={200} height={100}/>
                </View>
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
    },
    textCareer:{
        color: '#ffffff',
        textAlign: 'center'
      },
      textGroup:{
        color: '#ffffff',
        textAlign: 'center'
      },
      IDNumber:{
        color: '#ffffff',
        textAlign: 'center'
      },
      barcodestyle:{
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 26
      }
});

export default Home;