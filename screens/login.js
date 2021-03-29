import React from 'react'
import {Text, View , StyleSheet , TextInput ,TouchableOpacity, Alert, Image} from 'react-native'
import * as firebase from 'firebase'
import { Switch } from 'react-native-gesture-handler'
 export default class login extends React.Component{
     constructor(){
         super()
         this.state={
           emailId:'',
           password:''
         }
     }
     login = async(emailId,password)=>{
         if (emailId && password){
         try{
             const respons = await firebase.auth().signInWithEmailAndPassword(emailId,password)
             console.log(respons)
             if(respons){
                 this.props.navigation.navigate('transactonScreen')
             }
         }
         catch(error){
        switch(error.code){
            case 'auth/user-not-found':alert("user not found")
            console.log("user not exsist")
            break;
            case 'auth/invaild-email':alert("incorrect emailId or password")
            console.log("invaild email")
            break;
            default:console.log(error);
        }
         } 
        }
        else{
            alert("enter emailId and password")
        }
     }
     render(){
         return(
             <View style={{backgroundColor:'red'}}>
                 <Image source={require("../assets/booklogo.jpg")} style={{width:200,height:200}}/>
                 <Text>Login Screen</Text>
                 <View>
                     <TextInput placeholder="abc@exmaple.com" keyboardType='email-address' onChangeText={(text)=>{
                         this.setState({
                        emailId:text
                         })
                     }}/>
                      
                     <TextInput  secureTextEntry={true} placeholder="enter password"  onChangeText={(text)=>{
                         this.setState({
                          password:text
                         })
                     }}/>
                     <TouchableOpacity style={styles.submitbutton} onPress={()=>{
                         this.login(this.state.emailId,this.state.password)
                     }}>
                         <Text>Submit</Text>
                     </TouchableOpacity>
                 </View>
             </View>

         )
     }
 }
 const styles= StyleSheet.create({
  submitbutton:{
      height:30,
      width:40,
      borderRadius:7
  }
 })