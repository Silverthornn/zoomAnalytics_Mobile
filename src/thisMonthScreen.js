
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Switch, Dimensions, FlatList, Button} from 'react-native'
import { Card } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
//import thisMonthScreen from './thisMonthScreen';
import thisWeekScreen from './thisWeekScreen';
import thisYearScreen from './thisYearScreen';


export default function thisMonthScreen({ navigation }) {

    const themes = {
        dark: {
            backgroundColor: 'rgb(0, 117, 94)',
            backgroundCard: 'rgb(0, 117, 94)',
            color: 'white'
        },
        light: {
        backgroundColor: 'white',
        backgroundCard: '#fff',
        color: 'black'
        }
    }


    const [checked, setChecked] = useState(true);

    const toggleSwitch = () => {
        if(checked){
            themes.dark.backgroundColor
            setChecked(!checked);
    }
    };
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    

    const data = [
        {title: 'MON - WED.', key:1, number: 835},
        {title: 'MON - WED.', key:1, number: 835},
        {title: 'MON - WED.', key:1, number: 835},
        {title: 'MON - WED.', key:1, number: 835},
        {title: 'MON - WED.', key:1, number: 835}
    ]

    const [press, setPress] = useState(false)

    const handlePress = ()=>{
        console.log("Pressed!")
    }



    //const buttons =[{element:thisweek}, {element:thisMonth}, {element:thisYear}]

    return (
        
        <SafeAreaView>
        <View style={styles.container}>
        <View>
            <View
                style={{flexDirection: 'row', alignItems:"flex-end", justifyContent:"flex-end", margin:20}}
             >
                <Text style={{color:'white', fontWeight:'500', fontSize:'20'}}>Dark theme</Text>
                <Switch
                    trackColor={{ false: "white", true: themes.dark.color }}
                    //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    value={checked}
                    //onChange={toggleSwitch}
                    onValueChange={(value) => setChecked(value)}
                />
            </View>
            <View style={{flexDirection: 'row', margin:20}}>
                <Text style={{ alignItems:"flex-start", justifyContent:"flex-start", marginRight: 100, color:'white', fontWeight:'bold', fontSize:'30'}}>Dashboard</Text>
                <View style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
                <RNPickerSelect
                    style={{backgroundColor:themes.dark.backgroundColor}}
                    //style={{ alignItems:"flex-end", justifyContent:"flex-end"}}
                    placeholder={'null'}
                    
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Summary', value: 'summary' },
                        // { label: 'Baseball', value: 'baseball' },
                        // { label: 'Hockey', value: 'hockey' },
                    ]}
                />
                </View>
            </View>
            <View>
                <Text style={{margin:20, fontSize:'20', fontWeight:'500', color:'white'}}>Bin Distribution</Text>
                {/* <TouchableOpacity underlayCo> */}
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Button title='Today' onPress={() => navigation.navigate("dashboard")}/>
                <Button title='This Week' onPress={() => navigation.navigate("thisweek")}/>
                <Button title='This Month' onPress={() => navigation.navigate("thismonth")}/>
                <Button title='This Year' onPress={() => navigation.navigate("thisyear")}/>
                </View>
                {/* <ButtonGroup
                    onPress={handlePress}
                    containerStyle={{backgroundColor:themes.dark.backgroundColor}}
                    buttons = {'This Week', 'This Month', 'This Year'}
                /> */}
                {/* </TouchableOpacity> */}
            </View>
            <View>
                <FlatList 
                    style={{margin:24, backgroundColor:checked? themes.dark.backgroundColor : themes.light.backgroundColor}}
                    horizontal={true}
                    data={data}
                    renderItem={({item}) =>(
                        <Text style={styles.data}>{item.title}</Text>
                    
                    )}
                />
                
            </View>
            <View stlye={{flexDirection:'row', margin: 20}}> 
                <Text style={{textAlign:'left', fontSize:'20', fontWeight:'500', color:'white'}}>Finance</Text>
                <View style={{alignItems:'flex-end', justifyContent:'flex-end', flexDirection:'row'}}>
                    <Text style={{color:'white'}}>Showing:</Text>
                    <RNPickerSelect
                    
                    placeholder={'null'}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Year to Date (YTD)', value: 'Year to Date (YTD)' },
                        { label: 'This Month', value: 'This month' },
                        { label: 'This week', value: 'This week' },
                        { label: 'Today', value: 'Today' },
                    ]}
                />
                </View>
            </View>

            <Text style={{color:'white', fontSize:'20', fontWeight:'500'}}>Today</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:15, marginBottom:10}}>
                
                <Card containerStyle={{width: windowWidth/2 -20, height: (windowHeight/4 -20)/2, backgroundColor:checked? themes.dark.backgroundColor : themes.light.backgroundColor}}>
                    <Card.Title>TOTAL INVOICES</Card.Title>
                </Card>
                <Card containerStyle={{width: windowWidth/2 -20, height: (windowHeight/4 -20)/2, backgroundColor:checked? themes.dark.backgroundColor : themes.light.backgroundColor}}>
                    <Card.Title>TOTAL PAYMENTS</Card.Title>
                </Card>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', margin:5, marginBottom:55}}>
                <Card containerStyle={{width: windowWidth/2 -20, height: (windowHeight/4 -20)/2, backgroundColor:checked? themes.dark.backgroundColor : themes.light.backgroundColor}}>
                    <Card.Title>TOTAL RECEIVABLES</Card.Title>
                </Card>
                <Card containerStyle={{width: windowWidth/2 -20, height: (windowHeight/4 -20)/2, backgroundColor:checked? themes.dark.backgroundColor : themes.light.backgroundColor}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Financials")}}>
                    <Text>See all</Text>
                    </TouchableOpacity>
                </Card>
            </View>

            </View>
        </View>
        </SafeAreaView>       
    )
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'rgb(28, 53, 45)',
        // alignItems: 'center',
        // justifyContent: 'center',
        
      },
    data: {
        marginTop: 24,
        padding: 30,
        fontSize: 20,
        marginHorizontal: 10,
        marginTop:24
    },
    pressColor: {
        color: 'white'
    }
})


