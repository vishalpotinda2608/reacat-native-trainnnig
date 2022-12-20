import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack'

import Login from '../Views/Login/Login';
import Register from '../Views/Register/Register';
import Tabs from './Tabs';
const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='register'>
                <Stack.Screen name='login' component={Login} ></Stack.Screen>
                <Stack.Screen name='register' component={Register}></Stack.Screen>
                <Stack.Screen name="tabs" component={Tabs} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Routes

