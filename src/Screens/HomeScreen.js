import React,{useContext, useEffect} from 'react'
import {StyleSheet,View,Button,Text,FlatList,TouchableOpacity,ScrollView} from 'react-native'
import { ceil } from 'react-native-reanimated'
import {Context as AuthContext} from '../Context/AuthContext'
import {Context as FireContext} from '../Context/FirebaseTestContext'


const HomeScreen = ({navigation})=>{

    const {signIn,signOut} = useContext(AuthContext);
    const {state,fetchCollection,addDocument,delDocument} = useContext(FireContext);
    
    
    useEffect(()=>{signIn()},[]);
    useEffect(()=>{fetchCollection("testCollection")},[]);
   
    

    return (<View style={{flexGrow:1}}>

        <Button title="Add Stuff" 
        onPress={()=>addDocument("testCollection",{TestField:1234})}

        />
        <FlatList

            
            data={state}
            keyExtractor = {(item)=>{return item.id}}
            renderItem = {({item})=>{
                
                return (<ScrollView>
                    <TouchableOpacity style={styles.doc}

                        onPress={()=>{navigation.navigate("Detail",{id : item.id})}}
                    >
                        <Text>ID:{item.id}</Text>
                        <Text>TestField:{item.data.TestField}</Text>

                        <TouchableOpacity  
                            onPress={()=>{delDocument("testCollection",item.id)}}
                        >
                            <Text style={styles.del}>X</Text>
                        </TouchableOpacity>
                    
                    </TouchableOpacity>
                    
                    
                    
                </ScrollView>);
            }}

        />
        

    </View>)


}


const styles = StyleSheet.create({

    
    doc:{
        borderWidth:1,
        flexDirection:"row",
        marginVertical:5,
        height:30,
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:15,
        
        

    },
    
    del:{
        fontSize:25,
        color:"red",
        marginRight:5,
        
    }

})

export default HomeScreen;
