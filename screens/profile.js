import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, CheckBox, Image, TouchableOpacity} from 'react-native';

export default function ProfileComponent(props) { 
                                  
	return(

   <View style={styles.bg}>
	  
      <View style={styles.row}>
	    <TouchableOpacity >
		<Image source={require('./assets/back-arrow.png')} style={styles.left}/>
		</TouchableOpacity>
	   
        <Text style={styles.bold}>Edit Personal Details</Text>
	  </View> 
	   
	  <View style={styles.second}> 
		<Text style={styles.name}>First Name</Text>
		<View style={styles.line}>
	      <Text style={styles.big}>{props.fname}</Text>
		  <Text style={styles.right}>
		    <TouchableOpacity onPress={ () => navigation.navigate('FirstNameUpdate', {fname: props.fname}) }>
	          Edit
		    </TouchableOpacity>
		  </Text>
		</View>
	  </View> 
	   
	  <View style={styles.second}> 
		<Text style={styles.name}>Last Name</Text>
		<View style={styles.line}>
	      <Text style={styles.big}>{props.lname}</Text>
		  <Text style={styles.right}>Edit</Text>
		</View>
	  </View> 

      <View style={styles.out}>
       <Text style={styles.lg}>Logout</Text>
	  </View>
	   
      <View style={styles.end}>
       <Text style={styles.demo}>Demo App</Text>
       <Text style={styles.demo}>V1.02</Text>
	  </View>
	   
  </View>
	);
 
}

const styles = StyleSheet.create({
	bg:{
		flex:1,  // will take full screen, default column grid
	   backgroundColor: '#f5f5f5',	
	},
	row:{
		flexDirection: 'row',
		backgroundColor: '#ffffff',
			height:58,
			padding: 2,
	},
	line:{
		flexDirection: 'row',
		backgroundColor: '#ffffff',
	},
    img:{
		width: 14,
		height:14,
    },
	left:{
		marginTop: 28, // +10, bcz going out of screen
		height: 12,
		marginLeft: 16,
	},
	second:{
		 backgroundColor: '#ffffff',
			 marginTop: 8,
			 height: 73,
	},
    name:{
		fontSize: 14,
			color: '#909090',
			marginTop: 16,
			marginLeft: 16
    },
    right:{
			position: 'absolute',  // Can also align items in row, at the End using right&absolute !!!
				right: 16,
			 marginTop: 9,
			color: '#909090',
    },
    big:{
	   marginLeft: 16,
	   fontSize: 24,
	   fontWeight: 'bold',
		   marginTop: 4,
    },
    out:{
	   marginTop: 58,
	   alignItems: 'center',
    },
    lg:{
		color: '#d8232a',
			width: 43,
			height: 20,
         fontSize: 16,
    },
     end:{
		marginTop: 310,
			alignItems: 'center',
     },
	demo:{
		color: '#909090',
			fontSize: 16,
	},
	bold:{
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 24,
		marginLeft: 74,
			height: 22,
			width: 170,
	},
});
