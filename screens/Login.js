import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, CheckBox, Image, TouchableOpacity} from 'react-native';
import ProfileComponent from './profile.js';

export default class LoginComponent extends React.Component{
      constructor(props){
		  super(props);
		  this.state={
			fname : '',
			lname : ''
		  };
      }
 /*    next(){
		 console.log('next');
		  	<ProfileComponent fname={this.state.fname} lname={this.state.lname}/>
		 // pass state data to Child, which is PC here !!!
     }
*/
render(){
	return(
 <View>
	  <View>
	    <Text style={styles.bold}>Hey! What we call you?</Text>
	    <TextInput
		   style={styles.inp}
		   placeholder= 'First Name'
		   onChangeText={ (val) => this.setState({fname: val}) }
		  />
	    <TextInput
		   style={styles.inp}
		   placeholder= 'Last Name'
		   onChangeText={ (val) => this.setState({lname: val}) }
		  />
      <View style={styles.rw}>
		   <Text style={styles.cb}>
		    <CheckBox
			  />
		   </Text>
		   <Text style={styles.transp}>
			  By proceeding I agree with <Text style={styles.underline}>Terms & Conditions</Text>,
				<Text style={styles.underline}>Terms of use</Text> and
				<Text style={styles.underline}> Privacy Policy.</Text>
		   </Text>
      </View>
	  </View>

     <TouchableOpacity
		 onPress={ () => navigation.navigate('ProfileComponent', {fname: this.state.fname, lname: this.state.lname})} >
	   <View style={styles.row}>
	     <Text style={styles.text}>Continue <Text>
		  <Image source={require('./assets/next-icon.png')} />  </Text>
	     </Text>
       </View>
	  </TouchableOpacity>
  </View>
	);
 }
}
//
const styles = StyleSheet.create({
	bold:{
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 54,
		marginLeft: 25,
			height: 24,
			width: 254,
	},
	inp:{
		marginTop: 41,
		marginLeft: 25,
	   borderBottomWidth: 1,
		width: 360,
			height: 30,
	   borderBottomColor: '#d8d8d8'
	},
	rw:{
		marginTop: 50,
		marginLeft: 25,
		marginRight: 32,
			flexDirection: 'row',
	},
	cb: {
		flex: 2,
 	},
	transp:{
      flex: 8,
		fontSize: 14,
		color: '#909090',
		fontWeight: 'bold',
		  marginLeft: -45,
	},
	row:{
		flexDirection: 'row',
		backgroundColor: 'black',
			marginTop: 72,
			height: 60,
			fontSize: 25,
			alignItems: 'center',
			justifyContent: 'center',
	},
	text:{
		color: 'white',
			fontSize: 16,
	},
	underline:{
		textDecorationLine: 'underline',
	}
});
