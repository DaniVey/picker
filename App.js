import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from "react-navigation-stack";
import Picker from './modules/picker/containers/Picker';
import Opc1 from'./modules/picker/containers/Opc1';
import Opc2 from'./modules/picker/containers/Opc2';
import Opc3 from'./modules/picker/containers/Opc3';
import Opc4 from'./modules/picker/containers/Opc4';
import Opc5 from'./modules/picker/containers/Opc5';

const AppNavigator =createStackNavigator({
    Home: {
        screen: Picker,
        navigationOptions: {
            title: 'Picker'
        }
    },
      Opc1:{
        screen: Opc1,
        navigationOptions:{
        title: 'Opción 1'
        }
    },
    Opc2:{
        screen: Opc2,
        navigationOptions:{
            title:'Opción 2'
        }
    },
        Opc3:{
            screen: Opc3,
            navigationOptions:{
                title:'Opción 3'
            }
        },

        Opc4:{
            screen: Opc4,
            navigationOptions:{
                title:'Opción 4'
            }
        },
        Opc5:{
            screen: Opc5,
            navigationOptions:{
                title:'Opción 5'
            }
        },
},
    {headerLayoutPreset : "center"});
export default createAppContainer(AppNavigator);