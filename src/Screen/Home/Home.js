import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
// { navigation }
const Home = ( { navigation }, props) => {
    const { onPress, title = 'create account' } = props;
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#0000cd',
            }}>
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    Spendr  <Text style={styles.innerText}> .</Text>
                </Text>
                <Image
                    source={require('../../Image/Frame.png')}
                    style={{
                        width: 230,
                        height: 230,
                        marginTop: 12,
                        marginLeft: 60,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}

                />
                <Image
                    source={require('../../Image/spendinghabit.png')}
                    style={{
                        marginTop: 12,
                        marginLeft: 60,
                    }}
                />
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
                    <Text style={styles.text}>{title}</Text>
                </TouchableOpacity>

                <Text style={styles.basText}>
                    I have one .
                    <Text style={styles.inerText}>Log me in</Text>
                </Text>
            </View>

        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 99,
        flex: 1,
        paddingHorizontal: 10,
    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 27,
        textAlign: 'center',
        color: '#fff',

    },
    basText: {
        fontWeight: 'bold',
        // fontSize: 27,
        textAlign: 'center',
        color: '#fff',
        marginTop:8
    },
    innerText: {
        color: 'yellow',
        paddingRight: 20,
    },
    inerText: {
        color: 'yellow',
        paddingRight: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 9,
        height: 80,
        width: 150,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 120,
        marginLeft: 90

    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'blue',
    },
});
