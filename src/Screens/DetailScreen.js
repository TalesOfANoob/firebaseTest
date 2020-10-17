import React,{useContext,useState} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
import {Input} from 'react-native-elements'
import {Context as FireContext} from '../Context/FirebaseTestContext'

const DetailScreen =({navigation})=>{

    const {state,setDoc} = useContext(FireContext);
    const [testValue,setValue]=useState("");
    const id = navigation.getParam("id");
    const doc=state.find((doc)=>doc.id===id);
    
    return (<View style={{flexGrow:1}}>

        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>ID:{doc.id}</Text>
            <Text>TestField:{doc.data.TestValue}</Text>
        </View>
        <View>
            <Input style={styles.input}
            onChangeText={(text)=>{setValue(text)}}
            value={testValue}
            />
            <Button 
            title="Update"
            onPress={()=>
            {
                
                setDoc("testCollection",id,{TestField:testValue});
                navigation.navigate("Home");

            }}/>
        </View>


    </View>)
}

const styles =StyleSheet.create({
    input:{
        borderWidth:1,
    }
});


export default DetailScreen;