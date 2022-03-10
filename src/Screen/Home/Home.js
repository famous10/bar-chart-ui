import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  Dimensions,
  ScrollView
} from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import { StatusBar } from 'expo-status-bar';
// { navigation }

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}
const Colors = {
  theme: "#4A00E0",
  white: "#fff",
  greyish: "#4A00E0"
}
const Home = ({ navigation }, props) => {
  // const [number, onChangeNumber] = React.useState(null);
  // const [text, onChangeText] = React.useState("Useless Text");
  // const buttonClickedHandler = () => {
  //   console.log('You have been clicked a button!');

  // }
  return (


    <ScrollView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />

      <View style={{
        backgroundColor: Colors.theme,
        paddingBottom: Layout.height * 0.2,
        borderBottomLeftRadius: Layout.width * 0.1,
        borderBottomRightRadius: Layout.width * 0.1,
      }}>
        <View style={{
          alignItems: "flex-end",
          paddingHorizontal: 32,
          marginVertical: 20
        }}>

        </View>
        <View style={{
          flexDirection: "row",

        }}>
          <Image
            source={require('../../Image/menu.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginLeft:20,
             

            }}
          />
        </View>
      </View>

      <View style={{
        backgroundColor: Colors.white,
        marginHorizontal: 32,
        paddin: 20,
        borderRadius: 10,
        elevation: 8,
        marginBottom: 16,
        marginTop: -Layout.height * 0.15
      }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            // marginVertical: 8,
            paddingHorizontal: 30,
            marginVertical: 30,
          }}>
          <Image
            source={require('../../Image/circle.png')}

          />
          <View>
            <Text style={{ fontSize: 20, color: '#25265E' }}>Josuke Jotaro</Text>
            <Text style={{ color: '#25265E', fontSize: 10 }}>@jojotoro</Text>
          </View>
        </View>


        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 4,
            paddingHorizontal: 30,
            marginVertical: 30,
            marginTop: -9
          }}>

          <View>
            <Text style={{ color: '#25265E', fontSize: 10 }}>Available Balance</Text>
            <Text style={{ fontSize: 25, color: '#25265E', fontWeight: 'bold' }}>$12,496.00</Text>

          </View>
          <Image
            source={require('../../Image/Visa.png')}

          />

        </View>


        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 4,
            paddingHorizontal: 30,
            marginVertical: 30,
            marginTop: -9
          }}>

          <View>

            <Text style={{ fontSize: 20, color: '#25265E', fontWeight: 'bold' }}>*** *** *** *** 2077</Text>

          </View>
        </View>
      </View>

      {/* <View style={styles.screen}>
           <TouchableOpacity
    
             style={styles.roundButton1}>
             <Text style={styles.bigBlu}>f</Text>
           </TouchableOpacity>

           <TouchableOpacity
            
             style={styles.roundButton}>
             <Text style={styles.bigBlu}>G</Text>
           </TouchableOpacity>
         </View> */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 4,
          paddingHorizontal: 30,
          marginVertical: 30,
          marginTop: 10,
          marginLeft: 20
        }}>

        <View >
          <Image
            source={require('../../Image/Bagmoney.png')}

          />
          <Text style={{ color: '#25265E', fontSize: 10 }}>Check Balance</Text>
          <Text style={{ fontSize: 25, color: '#25265E', fontWeight: 'bold' }}>$12,49</Text>

        </View>
        <View>
          <Image
            source={require('../../Image/Safe.png')}

          />
          <Text style={{ color: '#25265E', fontSize: 10 }}>Safe Deposite</Text>
          <Text style={{ fontSize: 25, color: '#25265E', fontWeight: 'bold' }}>$12,800.64</Text>

        </View>

      
      </View>

      <View style={{marginLeft:50, flexDirection:'row'}}>
          <Text style={{ fontSize: 17, color: '#25265E', fontWeight: 'bold' }}>Today</Text>
          <AntDesign
                            name="down"
                            size={13}
                            style={[
                                {
                                 marginTop:7,   
                                    color: "#000000",
                                },
                            ]}
                        />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 4,
            paddingHorizontal: 30,
            marginVertical: 30,
           marginLeft: 20,
          }}>

        

            <Text style={{ fontSize: 18, color: '#25265E',  }}>steam store</Text>
            <Text style={{ fontSize: 18, color: '#ff0000',  }}>-$19.99</Text>
    
        </View>
    </ScrollView>



  );
};

export default Home;

const resizeMode = 'center';
const styles = StyleSheet.create({

  input: {
    height: 49,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ffa500",
    borderRadius: 22,
    width: "85%",

  },
  screen: {
    flexDirection: "row",
    margin: 17
  },

  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#1e90ff',
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#dc143c',
    marginLeft: 11
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    // backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    // borderBottomColor: '#ff8c00',
    flex: 1,

  },

  con: {
    marginBottom: 120,
    paddingRight: 90
  },
  red: {
    color: '#696969',
  },
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },

  bigBlu: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },


  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: "#ffa500",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'black',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: "white",
    fontWeight: 'bold'
  }
});
