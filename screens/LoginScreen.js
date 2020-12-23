import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () =>{

    const [name, setName] = useState('');
    const navigation = useNavigation();

    const button = ()=> { navigation.navigate('Chat')}


    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        {/* <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
            <Text>Press</Text>
        </TouchableOpacity> */}
        <View style={{marginHorizontal:32}}>
            <Text style={styles.header}>Username</Text>
            <TextInput style={styles.input} 
            placeholder='username' 
            onChangeText={(text) => setName(text)} 
            value={name}
            />
            <View style={{alignItems:'flex-end', marginTop:64}}>
                <TouchableOpacity style={styles.continue} onPress={(button)} >
                    <Text>Icône</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#F4F5F7',
    },
    button: {
      backgroundColor:'blue',
      padding:5,
    },
    circle:{
      width:500,
      height:500,
      borderRadius: 500 / 2,
      backgroundColor:'white',
      position:'absolute',
      left:-120,
      top:-20,
    },
    header:{
      fontWeight:'800',
      fontSize:30,
      color:'#514E5A',
      marginTop:42,
    },
    input:{
      marginTop:32,
      height:50,
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:'#BAB7C3',
      borderRadius:30,
      paddingHorizontal:16,
      color:'#514E5A',
      fontWeight:'600',
    },
    continue:{
        width:70,
        height:70,
        backgroundColor:'#9075E3',
        borderRadius:70/2,
        alignItems:'center',
        justifyContent:'center',
    },
  });

export default LoginScreen;