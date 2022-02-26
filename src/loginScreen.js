import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'

export default function loginScreen({ navigation }) {
    const handlePress = ()=>{
        navigation.navigate("dashboard")
    }
    const handleReset = ()=>{
        navigation.navigate("reset password")
    }
    return (
        <SafeAreaView>
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>Log in to Dashboard</Text>
            </View>

            <View>
                <TextInput
                    style={{margin: 10}}
                    placeholder='Administrative ID'
                />
            </View>

            <View>
                <TextInput
                    style={{margin: 10}}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
            </View>

            <Button
                style={styles.button}
                title='Login'
                onPress={handlePress}
            />

            <TouchableOpacity onPress={handleReset}>
                <Text style={styles.touchableText}>Request password reset</Text>
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
      subText: {
          color: 'grey'
      },
      button: {
          color: '#191970 ',
          margin: 30,
          marginTop: 10
      }
})
