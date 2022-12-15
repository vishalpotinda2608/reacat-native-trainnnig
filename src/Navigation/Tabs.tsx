import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ListTodo from '../Views/Todos/ListTodo';
import AddTodo from '../Views/Todos/AddTodo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from '../Views/Settings/Settings';
const Tab=createBottomTabNavigator();
const Tabs = () => {
  return (
 
    <Tab.Navigator initialRouteName="profile">
      <Tab.Screen
        name="todo"
        component={ListTodo}
        options={{
          title: "Todo List",
          tabBarIcon: ({ focused }) => {
            return <Icon name="list" />;
          },
        }}
      />
      <Tab.Screen
        name="add todo"
        component={AddTodo}
        options={{
          title: "Add Todo ",
          tabBarIcon: ({ focused }) => {
            return <Icon name="plus-circle" />;
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => {
            return <Icon name="bars" />;
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})