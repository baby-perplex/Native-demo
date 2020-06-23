import {createStackNavigator} from 'react-navigation-stack'; // fn to create new stackNav
import {createAppContainer} from 'react-navigation';
import LoginComponent from '../screens/login.js';
import ProfileComponent from '../screens/profile.js';
import FirstNameUpdate from '../screens/updateFirstName.js';

const screens = {
	SignUp : {          // screen 1  [Top will be Default Screen, (any name we can specify)]
		screen : LoginComponent     // screen to be displayed
	},
	Profile : {       // screen 2
		screen : ProfileComponent
	},
    FirstNameUp : {
		screen : FirstNameUpdate
    }
}
// Each screen wil Automatically gets 'navigation'-prop assigned to it.
// passing 'navigation'-props in Home-Comp

const HomeStack =  createStackNavigator(screens, {
	                        defaultNavigationOptions: {
                                     header: null
                            }
                    }); 
									 // need to pass objects as screens which to be displayed as navgs
                //  creates a StackNav for us, default screen is TopMost specified screen

export default createAppContainer(HomeStack);     // Config for Navg





// AppContainer returns a Component, which we can Render in App.js & it contains all info of StackNavg build into it !!    

// Need to wrap 'HomeStack' into AppContainer, also export AppConatiner tooo.

// better to create a const-var as object for diff screens [for simplicity]

/* object will contain several key-value pairs for screens :
       key = name of screen we give it to it [any name]
 again  'key' will have several props :
  1- 'screen' = component/screen which we want to show

*/








