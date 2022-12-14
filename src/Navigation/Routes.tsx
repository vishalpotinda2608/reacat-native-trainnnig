import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListTodo from '../Views/Todos/ListTodo';
import AddTodo from '../Views/Todos/AddTodo';
const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Add' >
                <Tab.Screen name='List' component={ListTodo}></Tab.Screen>
                <Tab.Screen name='Add' component={AddTodo}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Routes

