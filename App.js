import React,{Component} from 'react';
import Main from './Main';
import Details from './details';
import Music from './Music.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

    export default function App(){
  
  return (
    <NavigationContainer>
           <RootStack.Navigator headerMode="none">
              <RootStack.Screen name="Main" component={Main}/>
              <RootStack.Screen name="Music" component={Music}/>
              <RootStack.Screen name="Details" component={Details} />
             
          </RootStack.Navigator>
          </NavigationContainer>
  );
  }