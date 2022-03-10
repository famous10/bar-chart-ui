import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions, Pressable, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { BarChart } from "react-native-chart-kit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import LineGraph from '@chartiful/react-native-line-graph';
import Ionicons from "react-native-vector-icons/Ionicons"


const config = {
  startAtZero: false,
  hasXAxisBackgroundLines: false,
  xAxisLabelStyle: {
    prefix: '$',
    offset: 0
  }
};

const Details = (props) => {
  const refScrollview = React.useRef(ScrollView)
  let y = 0;
  let animated = true;
  const [isCar, setIsCar] = React.useState(true);
  const [isBus, setIsBus] = React.useState(false);
  const [isTrain, setIsTrain] = React.useState(false);


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
      }}>
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.te}>Spending </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
            paddingHorizontal: 30,
            marginVertical: 30,
            marginBottom: 20,
            paddingTop: 0
          }}>

          <View>
            <Text style={{ fontSize: 29, color: '#25265E', fontWeight: 'bold' }}>$12,496.00</Text>

          </View>
          <View style={{ marginRight: 39 }}>
            <AntDesign
              name="caretdown"
              size={20}
              style={[
                {

                  color: '#20b2aa',
                },
              ]}
            />


            <Text style={{ color: '#25265E', fontSize: 10 }}>vs past month</Text>
          </View>


        </View>

        <View style={styles.CardDetail}>

          <TouchableOpacity style={[styles.CardDetail1, { backgroundColor: isCar ? '#750056' : '#009387' }]} onPress={() => {
            refScrollview.current.scrollTo({ x: 0, y, animated });
            setIsCar(true);
            setIsBus(false);
            setIsTrain(false);
          }}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Day</Text>
            </View>
          </TouchableOpacity>


          <View style={styles.detailContent}>
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>Week</Text>
          </View>



          <View style={styles.detailContent}>
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>Month</Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>Custom</Text>
          </View>

        </View>




        <View>
          <LineGraph
            data={[10, 15, 7, 20, 14, 12, 10, 20]}
            width={375}
            height={300}
            isBezier
            hasShadow
            baseConfig={config}
            style={styles.chart}
          />
        </View>
        <View >
          <Text style={styles.tex}>Scheduled payments</Text>
        </View>



        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            // marginVertical: 8,
            paddingHorizontal: 30,
            marginVertical: 30,
            marginLeft: -3
          }}>
        <Fontisto
            name="youtube-play"
            size={29}
            style={[
              {
                // alignSelf: "flex-start",
                color: "red",
                margin: 5
              },

            ]}
          />
          <View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#25265E' }}>Youtube Red</Text>
            <Text style={{ color: 'grey', fontSize: 10 }}>Next Payment 202</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17, paddingLeft: 50, fontWeight: 'bold', color: '#25265E' }}>$3.99/mth</Text>

          </View>
        </View>


        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            // marginVertical: 8,
            paddingHorizontal: 20,
            marginVertical: 10,
            marginLeft: 0
          }}>
          <Ionicons
            name="ios-logo-angular"
            size={39}
            style={[
              {
                // alignSelf: "flex-start",
                color: "black",
                margin: 5
              },

            ]}
          />
          <View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#25265E' }}>GitHub </Text>
            <Text style={{ color: 'grey', fontSize: 10 }}>Next Payment 202</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17, paddingLeft: 70, fontWeight: 'bold', color: '#25265E' }}>$2.99/mth</Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  head: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 375,

  },


  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#f0f8ff",

  },
  tex: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    marginTop: -34,
    paddingLeft: 39,
  },
  te: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#25265E',
    marginTop: 20,
    paddingTop: 0,
    paddingLeft: 14
  },

  TextSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 5,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },




  CardDetail: {
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    // position: 'absolute',
    // backgroundColor: "#009387",
  },
  CardDetail1: {

    borderRadius: 20,
    marginHorizontal: 5,
    width: '25%',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',

  },
  title: {
    fontSize: 14,
    color: "#fff"
  },

});

