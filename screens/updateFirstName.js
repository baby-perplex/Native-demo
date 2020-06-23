import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

export default class FirstNameUpdate extends React.Component{

render(){
	return(
 <View>
	  <View>
		<Image source={require('./assets/cross-icon.png')} style={styles.img}/>
	    <Text style={styles.bold}>Update your Name</Text>
	    <Text style={styles.small}>First name</Text>
		<TextInput
		   style={styles.inp}
		   placeholder= 'First Name'
		  />
      </View>

	  <View style={styles.row}>
	     <Text style={styles.text}>Save</Text>
     </View>

  </View>
	);
 }
}

const styles = StyleSheet.create({
	small:{
		marginLeft: 24,
		marginTop: 30,
		width: 58,
		height: 15,
			color: '#909090',
	},
	img:{
		marginTop: 48,
		marginLeft: 24,
	},
	bold:{
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 29,
		marginLeft: 24,
			height: 22,
			width: 157,
	},
	inp:{
		marginTop: 11,
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
	row:{
		flexDirection: 'row',
		backgroundColor: 'black',
			marginTop: 175,
			height: 48,
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
