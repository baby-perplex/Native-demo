1 ::
return (
    <View style={styles.container}>   
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.view2}>
	   <Text>Hello! you successfullY edited App.</Text>
       <Text style={styles.textIn}>Now Start Working On Projects.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
	margin: 10,
	backgroundColor: 'yellow',
	padding: 20,   // px default
  },
  textIn: {
    backgroundColor: 'red',
	padding: 10,
	fontWeight: 'bold',
  }
});
---------------------------------------------
2 ::
                                // Adding Comments inbtw return stats, causing Error !!
 // Hooks  [useState()]
  const [name, setName] = useState('shaun');  // accessible throughout the function !!
  const [person, setPerson] = useState({name:'Prafful', age:23});  
 
  const clickHandler = () => {
	setName('Perplex!');
	setPerson({name:'Mark', age:45});
  }
// Using {}, string-Interpolation, for Dynamic Output
  return (
    <View style={styles.container}>   
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.button}>
	   <Button  title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
} // Cannot Add style-prop to button  [RN not allows to do that]
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
	marginTop: 10,
  }  // default color: blue
});
-------------------------------------------
3 ::
 // Hooks  [useState()]
  const [name, setName] = useState('shaun');  // accessible throughout the function !!
  const [age, setAge] = useState('23');  
 
  const clickHandler = () => {
	setName('Perplex!');
	setPerson({name:'Mark', age:45});
  }
// Using {}, string-Interpolation, for Dynamic Output
  return (
    <View style={styles.container}>  
	  <Text style={styles.name}>Enter Name:</Text>
	  <TextInput 
	       style={styles.input}
           placeholder='e.g. Prafful Perplex'
           onChangeText= {(val) => setName(val)}
		   multiline
	   />
	  
	  <Text style={styles.name}>Enter Age:</Text>
	  <TextInput 
		  keyboardType='numeric'
	       style={styles.input}
           placeholder='e.g. 23'
           onChangeText= {(val) => setAge(val)}
	   />
      <Text>His name: {name} and his age: {age} !</Text>
    </View>
  );
} // TextInput has blank-appearance ByDefault, style It
 // Use, 'onChangeText'-prop for InputText, it ByDefault takes value of input as Param !!
 // We are Updating name, fro each text input by user 
// Hence Updating the State, whatever we type in, [use for LogIn, etc]
// 'multiline'-prop used for allow user to type multiple line Data in TextInput
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		fontSize: 25    // for bottom Text
  },
	name: {
	  fontSize: 40
	},
  input: {
	borderWidth: 1,
	borderColor: '#777',
	padding: 8,
	margin: 10,
	width: 200,
  }
});
-------------------------------------------------------------
4 ::

 const [people, setPeople] = useState([
    {name:'Prafful', key:1},	 
    {name:'Perplex', key:2},	 
    {name:'Shivam', key:3},	 
    {name:'Arnold', key:4},	 
    {name:'Zafar', key:5},	 
    {name:'Kim', key:6},	 
  ]); // initial value is array of prop

// Using {}, string-Interpolation, for Dynamic Output
  return (
    <View style={styles.container}>  
	  
    <ScrollView>
	{people.map(obj => (
		  <View key={obj.key}>
		   <Text style={styles.list} >{obj.name}</Text>
		  </View>
		))}
    </ScrollView>

    </View>
  );
} 
//'key'-prop is MUST for List, as React uses key-prop fno multiple items, to update their State
// SV renders each item in List all at Once opposite to FL !! [performance issues]
//2-Texts in a Text aligns on same-line, while 2-Texts in View align in Different Lines !!!
//App gave Warning: Each child in a List should have a unique 'key' prop. [Use key-prop in View]
// Bydefault, when List items Content inceases and go down, we cannot Scroll to see Below Content.
// Here, we will use ScrollView, to scroll down to see Content which went below the screen
// Suround all List Content within ScrollView Component !!
// 'SafeAreaView' used for IOS, yto content not go out of screen in Curved-screen
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
	paddingHorizontal: 20,
  // alignItems: 'center',
  //  justifyContent: 'center',
  },
  list: {
    backgroundColor: 'pink',
	marginTop: 25,
	padding: 30,
    fontSize: 35
  }
});
---------------------------------------------------
5 ::

 const [people, setPeople] = useState([
    {name:'Prafful', id:1},	 
    {name:'Perplex', id:2},	 
    {name:'Shivam', id:3},	 
    {name:'Arnold', id:4},	 
    {name:'Zafar', id:5},	 
    {name:'Kim', id:6},	 
  ]); // initial value is array of prop

// Using {}, string-Interpolation, for Dynamic Output
  return (
    <View style={styles.container}>  
	
     <FlatList
		 key = {people.id}
		 numColumns={2}
		 keyExtractor={(item) => item.id }
        data={people}
	    renderItem={({item}) => (
		  <Text style={styles.flatList}>{item.name}</Text>	
		)}
     />

    </View>
  );
} 
// React Native dynamically Toggle between Grid View and List View
// Other & Better way of displaying List is using **FlatList**-Component !!
/* FlatList takes several params to render and display data we want.
  - 'data' = data we want to display on screen [array basically supplied]
  - 'renderItem' = takes function, destruct the item-param, bcz its not just item, it would keep 
     changing its data, so need to destruct it using braces !!
  - 'keyExtractor' = what property we will look for each item as a 'key'
  - 'numColumns' = takes number as arg, to display on of items in a row (arg as no of coumns)
      Changes FL ListView to GridView !!
 When changing 'numColumns', we are forced to change the key of FL, to help it Rerender th List
  else, it popsUpan Error !!
-- So when key-prop changes in FL, it rerender the Items in List !!
*/// FlatList's renderItem automatically reads key-prop, as it automatically adds key up while rendering!!
// FL code is less than ScrollView, also its performance is alos Better !!
//Note:: When we have Big-array of data to display, FL donot render's all data at once,only
//     renders the data we see on screen, and as we scrolldown, it renders remaining Data !!
const styles = StyleSheet.create({   
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
	paddingHorizontal: 20,
  // alignItems: 'center',
  //  justifyContent: 'center',
  },
  flatList: {
    backgroundColor: 'pink',
	marginTop: 25,
	padding: 30,
    fontSize: 35,
	marginHorizontal: 10,
	marginTop: 24
  }
}); // adding 'numColumns' with 'key', we changed ListView of FL to GridView
//---------------------------------------------------------------------------------
6 ::  [Login Screen]
export default function App(){
	
	return(
 <View>
	  <View>
	   <Text style={styles.bold}>Hey! What we call you?</Text>
	   <TextInput
		  style={styles.inp}
		  placeholder= 'First Name'
		/>
	   <TextInput
		  style={styles.inp}
		  placeholder= 'Last Name'
		/>
        <CheckBox
			style={styles.cb}
			/>
				
		<Text style={styles.transp}>
			By proceeding I agree with Terms & Conditions, Terms of use and Privacy Policy</Text>
	  </View>
	  <View >
	   <Text style={styles.row}>
	     <Text >Continue</Text>
		</Text>
      </View>
 </View>
	);
}

const styles = StyleSheet.create({
	bold:{
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: 50,
		marginLeft: 25,
	},
	inp:{
		marginTop: 25,
		marginLeft: 25,
	   borderBottomWidth: 1,
		width: 250,
			height: 30,
	   borderBottomColor: '#F8F8F8'
	},
	cb:{
		marginTop: 15,
		marginLeft: 25,
	},
	transp:{
	marginTop: 15,
		marginLeft: 25,
		fontSize: 14,
		color: 'silver',
		fontWeight: 'bold',
		
	},
	row:{
		
		flexDirection: 'row',
		backgroundColor: 'black',
			marginTop: 10,
			height: 60,
			color: 'white',
			fontSize: 25,
			alignItems: 'center',
	},
	align:{
		justifyContent: 'center',
		flex: 1,
	},
}); 
//-------------------------------------------------------------
7 ::  [render() ->  ComponentDidMount() -> if state-changes ->[Rerender] render()]
--------
export default class App extends React.Component {  
	state = {  // no need to use cont, var let in class
		text : 'Loading'
	}
	componentDidMount(){ // execute after render()
       fetch('https://jsonplaceholder.typicode.com/users')
	   .then(data => data.json())
	   .then(data2 => {
		 this.setState({text:data2[0].name})
	  })
    }

 render(){ 
   return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>
	      {this.state.text}
        </Text>
        <Text style={{fontSize:50}}>
          PRAFFUL PERPLEX !!
        </Text>
      </View>
   );
 }
}
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//--------------------------------------------------------------
LOGIN SCREEN [Complete] ::
------------------
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, CheckBox, Image} from 'react-native';

export default class App extends React.Component{

render(){
	return(
 <View>
	  <View>
	    <Text style={styles.bold}>Hey! What we call you?</Text>
	    <TextInput
		   style={styles.inp}
		   placeholder= 'First Name'
		  />
	    <TextInput
		   style={styles.inp}
		   placeholder= 'Last Name'
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

	  <View style={styles.row}>
	     <Text style={styles.text}>Continue <Text>
		  <Image source={require('./assets/next-icon.png')} />  </Text>
	     </Text>
      </View>

  </View>
	);
 }
}

const styles = StyleSheet.create({
	bold:{
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 54,
		marginLeft: 25,
			height: 22,
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

//---------------------------------------------------------------------
 Edit Profile Details / PROFILE  :: [Complete]
----------------------------------
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, CheckBox, Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component{

render(){
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
	      <Text style={styles.big}>Prafful</Text>
		  <Text style={styles.right}>Edit</Text>
		</View>
	  </View> 
	   
	  <View style={styles.second}> 
		<Text style={styles.name}>Last Name</Text>
		<View style={styles.line}>
	      <Text style={styles.big}>Perplexx</Text>
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

//--------------------------------------------------------------------------------------------
Change First Name :: [Completed]
----------------------------------
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

export default class App extends React.Component{

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
//----------------------------------------------------------------------------------
Passing Components Parent to Child :: [1st Time]
-----------------

class Header extends Component{  // private Child Component
  render(){
   return(
	<View style={styles.container}>	
	   <Text style={{fontWeight: 'bold',fontSize: 22,}}>I am from Header !</Text>
	   <TouchableOpacity>
	   <Image source={require('./assets/play.png')} style={{marginTop: 10, width: 102, height: 102}} />
	   </TouchableOpacity>     
	</View>	
	);
  }
}
export default class App extends React.Component {
 render(){
	return(
	   <View style={styles.container}> 
	    <Header />
	    <Header />
	   </View>
	);
 }
}
const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
			alignItems: 'center',
			flex:1,
	},
//-------------------------------------------
 'props' in RN :: [Basic Coding ]
-------------------------------
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';  
           
             //   Props    \\

const MyData = (props) => {   // functional Comp, [pass 'props' as arg to Function-Comp]
	 return (  // NOT using 'this' here, bcz calling props directly, NOT in any function of the Component
	   <View>	 
	    <Text>{props.name} : {props.status}</Text>
	   </View>	 
	 );
}
//Use 'this' inside render(), bcz render() is called By Class and props are associatd with class,so use 'this'
export default class App extends React.Component {  
  render(){ 
     return (
      <View style={styles.container}>
	    <MyData name='Prafful' status='coder'/>
	    <MyData name='Perplex' status='Programmer'/>
	    <MyData name='Kaminee' status='Trainer'/>
      </View>
   );
 }
}//Assigning 'props' to Child Component,& using them in Child Component to Display Data on screen
// Can Assign any 'props' to Component we are using to display Data.
// Here, App-Comp is passing props to Child-Comp[MyData], means props can be changed by ParentComp outside the Comp
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//----------------------------------------------------------------
State Demo [basics] ::
---------------------
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';  
          
			//   State   \\

//Use 'this' inside render(), bcz render() is called By Class and props are associatd with class,so use 'this'
export default class App extends React.Component {  
  state = {    // also can be initialized in constructor !!
	fname : 'Prafful',
	lname : 'Perplex'
  }
  change() {
	this.setState({
		fname : 'Prafful Perplex'
	})
  }
  
  render(){ 
     console.log("From render() :", this.state);
	 return (
      <View style={styles.container}>
		 <Text>{this.state.fname}</Text>
		 <Text>{this.state.lname}</Text>
        <Button title='Change State' onPress={ this.change.bind(this) }/>
	 </View>
   );    // Used fn.bind(this), instead of {() => {this.fn}} [technique to call fn]
 }
}//State has Dynamic props, Once any prop of State change by user-Interaction, Component will be forced to Rerender!!
	
const styles = StyleSheet.create({   // StyleSheet.create(), to create style Object for Screen/view
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//-------------------------------------------------------------------------------
LANDING SCREEN ::
----------------
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(){
	return(
    <View style={{backgroundColor:'#000'}}>	
	  <Image style={{width:'100%', height:320, marginTop:24, }} source={ require('./assets/tang-top.png') } />
	  <Text style={styles.mid}>Tangled</Text>
      
	  <View style={{position: 'absolute',top:257,left:122}}>
	   <Text style={{color:'white'}}>2010  •  7+  •  1h 40m</Text>
      </View>
	  
	  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',position: 'absolute',width:120,height:32,backgroundColor:'white',top:284,left:130}}>
	    <Image style={{width:16,height:16}} source={require('./assets/play.png')} />
		<Text style={{marginLeft:8,fontWeight:'bold',width:73,height:16,fontSize:14}}>Watch Trailer</Text>
	  </View>
	  
	  <Text style={{width:46,
		  height:13,
		  marginTop: 28,
		  marginLeft: 16,	
	   color: '#ffffff',
		 
		  fontSize: 11}}>TEASER 1</Text>

	  <Image style={{width:'100%', height:120, marginTop:20}} source={ require('./assets/tang-mid.png') } />
 
	  <View style={{backgroundColor:'white', height:44}}>
	    <Text style={{marginLeft:8,marginTop:6,fontWeight:'bold',width:186,height:16,fontSize:14}}>Tangled - I See the Light(HD)</Text>
		<Text style={{marginLeft:8,fontWeight:'bold',width:215,height:15,fontSize:14,color:'#D3D3D3'}}>Archiebuild  •  6m+ Views  •  7 years ago</Text>
	    <Image style={{width:24,height:24,position:'absolute',top:10,right:12}} source={require('./assets/play.png')} />
	  </View>

      <Text style={{width:49,
		  height:13,
		  marginTop: 28,
		  marginLeft: 16,
	   color: '#ffffff',
		  fontSize: 11}}>TEASER 2</Text>

	  <Image style={{width:'100%', height:75,marginTop:20}} source={ require('./assets/tang-bott.png') } />

	</View>	
	);
}
const styles = StyleSheet.create({
	mid:{
		width:89,
	  position: 'absolute',	
	   color: 'white',
		  top: 222,
		  left: 150,
		  fontSize: 27,
          fontWeight: 'bold',
	},
});



