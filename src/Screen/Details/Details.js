import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions, } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { BarChart } from "react-native-chart-kit";


const Details = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      }}>
      <View style={styles.header}>
        {/* <Text style={{fontSize: 25,  fontWeight: 'bold',  color:'blue'}}>
                Spendr  <Text style={styles.innerText}> .</Text>
                </Text> */}
        <Image
          source={require('../../Image/Spend.png')}
          style={{
            marginTop: 12,

          }}
        />
        <Icon name="flow-parallel" size={28} onPress={() => navigation.goBack()} />

      </View>

      <View style={{
        flexDirection: "row",
      }}>
        <TouchableOpacity style={{
          flexDirection: "row",
          alingSelf: "center",
          marginTop: 20,
          backgroundColor: "blue",
          height: 182,
          elvator: 1,
          width: 130,
          borderRadius: 15
        }}>

          <Image
            source={require('../../Image/Group.png')}
            style={{
              marginTop: 12,
              marginLeft: 10,
            }}
          />
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: -28,
            color: "white",
            paddingLeft: -40,
            marginTop: 105,
          }}> $23,560</Text>



          {/* <Text style={{ fontSize: 14, color: '#fff', marginTop: 122, textAlign:'left',paddingRight:0}}>
            $23,560
          </Text> */}

        </TouchableOpacity>


        <TouchableOpacity style={{
          flexDirection: "row",
          alingSelf: "center",
          marginTop: 20,
          backgroundColor: "#f0f8ff",
          height: 182,
          elvator: 1,
          width: 130,
          borderRadius: 15,
          marginLeft: 9,
        }}>

          <Image
            source={require('../../Image/Visa.png')}
            style={{
              marginTop: 12,
              marginLeft: 10,
            }}
          />
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: -28,
            color: "black",
            paddingLeft: -40,
            alignItems: 'center',
            marginTop: 105,
          }}>$23,560</Text>
          {/* <Text style={styles.text}>balance</Text> */}
          {/* 
<View style={{textAlign: "center",paddingRight: -15}}>
          <Text style={{ fontSize: 14, color: 'black', marginTop: 122, textAlign: 'center' }}>
            $23,560
          </Text>
          </View> */}
        </TouchableOpacity>


        <TouchableOpacity style={{
          flexDirection: "row",
          alingSelf: "center",
          marginTop: 20,
          backgroundColor: "#f0f8ff",
          height: 102,
          elvator: 1,
          width: 40,
          borderRadius: 15,
          marginLeft: 9,
        }}>
          <Text style={{ fontSize: 24, color: 'black', marginTop: 20, paddingLeft: 14 }}>+</Text>


        </TouchableOpacity>


      </View>

      <View style={{ marginTop: 13 }}>
        <Text style={styles.tex}>Spending Habit</Text>
      </View>

      <View style={styles.MainContainer}>
        <Text style={{
          fontSize: 14,
          textAlign: 'center',
          color: "blue",
          backgroundColor: "#f0f8ff",
          width: 350,
          borderRadius: 20,
        
        }}>friday, 20th</Text>
        <Text style={{
          fontSize: 28, textAlign: 'center', color: 'blue', fontWeight: "bold", backgroundColor: "#f0f8ff",
          width: 350,
        }}> $350.36 </Text>
        <BarChart
          data={{
            labels: ['Mon', 'Tues', 'Wen', 'Thr', 'fri'],
            datasets: [{ data: [10, 20, 50, 40, 20] }],
          }}
          width={Dimensions.get('window').width - 10}
          height={230}
          yAxisLabel={'$  '}
          chartConfig={{
            backgroundColor: "#f0f8ff",
            backgroundGradientFrom: "#f0f8ff",
            backgroundGradientTo: "#f0f8ff",
            // decimalPlaces: 1,
            color: (opacity = 55) => 'blue',
            style: {
              borderRadius: 12, padding: 10
            },
          }}
        />



      </View>

    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerText: {
    color: 'yellow',
    paddingRight: 20,
  },
  text: {
    fontSize: 14,
    paddingLeft: -28,
    color: "grey",
    marginTop: 105,
  },
  //   baseText: {
  //     fontSize: 14,
  //     color: '#fff',
  //     fontSize: 14,
  //     marginTop: 122,
  // paddingLeft:-76,
  // },

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#f0f8ff",

  },
  tex: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'uber-b',
    color: "black",
    marginTop: 24,
    paddingLeft: 19,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center', padding: 8,
  //   paddingTop: 30, backgroundColor: '#ecf0f1',
  //   },
});

