import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item96725Navigator from '../features/Add-Item96725/navigator';
import Maps96721Navigator from '../features/Maps96721/navigator';
import UserProfile96717Navigator from '../features/UserProfile96717/navigator';
import BlankScreen096694Navigator from '../features/BlankScreen096694/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item96725: { screen: Add-Item96725Navigator },
Maps96721: { screen: Maps96721Navigator },
UserProfile96717: { screen: UserProfile96717Navigator },
BlankScreen096694: { screen: BlankScreen096694Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
