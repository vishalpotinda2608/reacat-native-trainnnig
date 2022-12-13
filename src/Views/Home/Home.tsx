import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { School } from '../../models/school.model';

export default class Home extends Component {
  
schools:School[]=[
  {
    address:'Malad Church roads, Malad West',
    id:1,
    name:'Don Bosco '
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  }, {
    address:'Malad Church roads, Malad West',
    id:1,
    name:'Don Bosco '
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  }, {
    address:'Malad Church roads, Malad West',
    id:1,
    name:'Don Bosco '
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  }, {
    address:'Malad Church roads, Malad West',
    id:1,
    name:'Don Bosco '
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  },
  {
    address:'Sector 8, Vashi Bridge road, Vashi naka, West',
    id:2,
    name:'St Xavier College'
  }




];

  render() {
    return (
      
      <View>
      {
        this.schools.map((school)=>{
          return <Text style={styles.card}>
            {school.name}, {school.address}
          </Text>
        })
      }  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    fontSize:20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:5,
    borderRadius:10,
    elevation:2,
    margin:5,
    padding:5
}
})