import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(){
	const [status, changeStatus] = useState(true);

    if(status){
		setTimeout(changeStatus(false), 1000);
		return(
		 <View>	
		  <Image  style={{justifyContent:'center',alignItems:'center',flex:1,width:102,height:102}} source={require('./assets/open.png')}/>
		 </View>	
		);
    }
  else
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
