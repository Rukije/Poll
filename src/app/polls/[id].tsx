import { useLocalSearchParams, Link, Stack } from "expo-router";
import { View,Text,StyleSheet,Pressable, Button} from "react-native";
import {Feather} from '@expo/vector-icons';
import { useState } from "react";


const poll ={
    question: 'React Native vs Flutter',
    options: 
    [
        'React Native FTW',
        'Flutter',
    ]
};
export default function PollDetails(){
    const { id } = useLocalSearchParams<{id : string}>();
    const [selected,setSelected] = useState('React Native FTW');
    const submit = () => {
        console.warn('Submit', selected)
    }
    // const { id:globalId } = useGlobalSearchParams();
    
    // console.log('Local: ', id, 'Global: ', globalId);

    return (
        <View style={styles.container}>
            {/* <Text> Poll Details: {id} </Text> */}
            {/* <Link href={`polls/${Number.parseFloat(id) + 1}`}>Go Next</Link> */}
            <Stack.Screen options={{title:'Poll Question',headerStyle: {
              backgroundColor: '#193C47',
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
             fontWeight: 'bold',
             },}}/>
            <Text style={styles.question}>{poll.question}</Text>
            <View style={{gap:5}}>
            {poll.options.map(option =>(
                <Pressable onPress={()=> setSelected(option)} key={option} style={styles.optionContainer}>  
                {/* View replaced with Pressable */}
                     <Feather name={option === selected ? "check-circle" : 'circle'} 
                     size={17} 
                     color={option === selected ? 'white' : 'black'}/>
                     <Text style={styles.optionTextContainer}>{option}</Text>
                </Pressable>
            ))}
            </View>
            <Button onPress={submit} title="Submit" color="#193C47"  />
 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:50,
        gap:20,
    },
    question:{
        fontSize:25,
        paddingTop:10,
        fontWeight:'600',
        color:'#193C47',
        textAlign:'center'
    },
    optionContainer:{
        backgroundColor:'#5e767e',
        padding:20,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        gap: 10,
    },
    optionTextContainer:{
        fontSize:17,
        color:'white',
    },
  
})
