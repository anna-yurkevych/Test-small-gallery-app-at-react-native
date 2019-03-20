import {createAppContainer, createStackNavigator} from 'react-navigation';
import {MainGallery} from '../components/MainGallery.js';
import {OnePhoto} from '../components/OnePhoto.js';
import {styles} from '../constants/Styles.js'


const AppNavigator = createStackNavigator(
{
  Main: MainGallery,
  Photo: OnePhoto,
},

{
    initialRouteName: 'Main'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export {AppNavigator, AppContainer}