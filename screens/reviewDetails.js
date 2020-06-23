import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ReviewDetails({navigation}){
/*1 ::	
	const pressHandler = () => {
		navigation.goBack();  // does same thing, which 'back-arrow' odes to switch to previous-screen
	}// pops screen off from Stack, to move to prev screen
	
	return(
	  <View style={styles.container}>	
	   <Text>ReviewDetails</Text>
		<Button title='back to home screen' onPress={pressHandler}/>
	  </View>	
	);
*/
    return(
	  <View style={styles.container}>	
	   <Text>key: {navigation.getParam('key')}</Text>
	   <Text>title: {navigation.getParam('title')}</Text>
	   <Text>body: {navigation.getParam('body')}</Text>
	  </View>	
	); // output data we are getting from Home
// getParam(prop), will get param/prop of specified prop fro the Object passed here
// passed Object, MUST have diff key/value pairs in it, each key/value pair is a param, grab the param using getParam('key')
} 

const styles =  StyleSheet.create({
	container : {
		padding: 24,
	}
});

