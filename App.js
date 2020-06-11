import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen';


import CoctailList from './app/src/coctailList';
import filterList from './app/src/filters';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();




export default class App extends Component {


    componentDidMount(){
        SplashScreen.hide();
    }

    render(){
        return(
            <NavigationContainer>
                        <Stack.Navigator screenOptions={{
                                    headerShown: false
                                  }}>
                        <Stack.Screen
                            name="Drinks"
                            component={CoctailList}
                          
                        />
                        <Stack.Screen
                            name="Filters"
                            component={filterList}
                            options={{
                            title: "Filters"
                            }}
                        />
                        </Stack.Navigator>
                    
                    
            </NavigationContainer>
        );
    }
}