import React, { useState, Component, useContext, createContext}from 'react';
import auth from '../firebase/firebaseAuth'
import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import getUserInfo from '../firebase/getUserInfo';
import {  AuthProvider, AuthContext} from '../navigation/AuthProvider';
import SubmitLogIn from '../Components/submitLogIn.js';
import SubmitRegister from '../Components/submitRegister';
import { Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import SubmitRegisterButton from '../Components/submitButton';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const providerValue = 'working'
const otherValue = 'other value'
export const UserContext = createContext();
const RegisterModalScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigation = useNavigation();
  const value = useContext(AuthContext);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  
    return (
      <SafeAreaView>
        <View>
          <Text style = {styles.textStyles}>
            First Name:
          </Text>
          <TextInput
          style = {styles.emailInput}
          value = {firstName}
          placeholderTextColor= 'grey'
          placeholder='First Name'
          onChangeText={text => setFirstName(text)}
          />
          <Text style = {styles.textStyles}>
            Last Name:
          </Text>
          <TextInput
          style = {styles.emailInput}
          value = {lastName}
          placeholderTextColor= 'grey'
          placeholder='Last Name'
          onChangeText={text => setLastName(text)}
          />
          <Text style = {styles.textStyles}>
            Email:
          </Text>
          <TextInput
          style = {styles.emailInput}
          value = {email}
          placeholderTextColor= 'grey'
          placeholder='Email'
          onChangeText={text => setEmail(text)}
          />
          <Text style = {styles.textStyles}>
            Password:
          </Text>
          <TextInput
          style = {styles.emailInput}
          value = {password}
          placeholderTextColor= 'grey'
          placeholder='Password'

          secureTextEntry={passwordVisibility} // makes passwords dots
          onChangeText={text => setPassword(text)}
          />
          <View style = {styles.eyeIcon}>
            <Pressable onPress={handlePasswordVisibility} styles = {{marginTop:30}}>
                <MaterialCommunityIcons name={rightIcon} size={22} color='gray' />
            </Pressable>
        </View>
          <AuthProvider>
            <SubmitRegisterButton email={email}
            password={password}FirstName={firstName}LastName={lastName}/>
          </AuthProvider>

        </View>
        
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    emailInput:{
      color: 'black',
      width:250,
      height:50,
      borderColor:'#9B9A9A',
      borderWidth:3,
      textAlign:'center',
      borderRadius:10,
      fontSize:25,
      marginHorizontal :'17%'

      
      
     
  },
  textStyles:{
    fontSize:20,
    marginTop: 20,
    marginLeft:10,
    marginBottom: 10,
    color: 'black',



  },
  eyeIcon:{
    marginLeft:'85%',
    marginTop:-33,
}
  

  });
        




  

export default RegisterModalScreen;