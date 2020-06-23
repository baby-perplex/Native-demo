import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Home({navigation}){ // Each screen wil Automatically gets 'navigation'-prop assigned to it.
// props will contain 'navigation' prop, when screen build using StackNavg		
/* 1 ::
	const pressHandler = () => {
//      navigation.navigate('ReviewDetails');  // pass the screen[name u assigned] to which want to navigate as 'string'
		navigation.push('ReviewDetails');    // same as navigate()
	} // calling navigate() on navigation-prop	
	return(
	  <View style={styles.container}>	
	   <Text>Home Screen</Text>
	   <Button title='go to review details' onPress={pressHandler}/>
	  </View>	
	);
*/
 const [reviews, setReviews] = useState([
	{title: 'Hello from the Heaven', rating: 5, body: 'lorem ipsum', key: '1'},	 
	{title: 'Gotta catch them all again', rating: 3, body: 'lorem ipsum', key: '2'},	 
	{title: 'Not so final Fantasy', rating: 4, body: 'lorem ipsum', key: '3'},	 
 ]);

 return(
    <View style={styles.container}>
	 <FlatList
	    data={reviews}
        renderItem={ ({item}) => (
		  <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item) }>	
		    <Text style={{fontSize:30,margin:5,fontWeight:'bold',textAlign:'center'}}>{item.title}</Text>
		  </TouchableOpacity>	
		)}
     />
    </View>	 
 );

// onPress={ () => navigation.navigate('ReviewDetails', item) }
// '2nd-arg', can pass data, which must be Object[data], wnated to pass to next screen

} 
// ByDefault, we get 'back-arrow' on Navigated screen, from StackNav, through whichwe can jump back to Original screen
// Can manually use 'back-arrow' functionaling, using goBack()-meth
// check, ReviewDetails.js, added a button, with goBack() to get back to previous screen !!
const styles =  StyleSheet.create({
	container : {
		padding: 24,
	}
});

