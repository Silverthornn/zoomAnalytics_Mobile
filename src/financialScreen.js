import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { Card } from 'react-native-elements'

export default function financialScreen({ navigation }) {
    return (
        <SafeAreaView  >
        <View style={{ backgroundColor:'rgb(28, 53, 45)', }}>
        <View>
            <Text>March</Text>
            <View style={{flexDirection:'row'}}>
                <Card>
                    <Card.Title>Payment</Card.Title>
                </Card>
                <Card>
                    <Card.Title>Invoices</Card.Title>
                </Card>
            </View>
        </View>
        <View>
            <Text>February</Text>
            <View style={{flexDirection:'row'}}>
                <Card>
                    <Card.Title>Payment</Card.Title>
                </Card>
                <Card>
                    <Card.Title>Invoices</Card.Title>
                </Card>
            </View>
        </View>
        <View>
            <Text>January</Text>
            <View style={{flexDirection:'row'}}>
                <Card>
                    <Card.Title>Payment</Card.Title>
                </Card>
                <Card>
                    <Card.Title>Invoices</Card.Title>
                </Card>
            </View>
        </View>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
