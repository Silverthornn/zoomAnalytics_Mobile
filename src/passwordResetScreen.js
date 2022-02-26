import React from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, View } from 'react-native'
// import { View } from 'react-native-web'

export default function passwordResetScreen({navigation}) {
    const handlePress = ()=>{
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView>
        <View style={styles.container}>

            <View>
                <Text style={styles.text} >Password Reset</Text>
            </View>

            <View>
                <Text style={styles.subText}>We'll send you a link for resetting your pasword</Text>
            </View>

            <TextInput 
                style={{margin: 10}}
                placeholder='Email address'
            />

            <Button 
                onPress={handlePress}
                style={styles.button}
                title='Login'
            />

            <TouchableOpacity>
                <Text style={styles.touchableText}>Request pasword reset</Text>
            </TouchableOpacity>


        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      touchableText: {
        color: 'blue',
        margin: 20,
        textDecorationLine: 'underline'
    },
    text: {
        fontWeight: 'bold',
        margin: 30,
        fontSize: 20
    },
    button: {
        color: '#000066 ',
        margin: 30,
        marginTop: 10 
    },
    subText: {
        color: 'grey'
    }
})
