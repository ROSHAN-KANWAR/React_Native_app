import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyHeader = () => {
  return (
    <Appbar.Header style={styles.container}>
    <MaterialCommunityIcons name="menu" style = {styles.Icons} />
    <Text style = {styles.Icons}>Home</Text>
    </Appbar.Header>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:5,
    },
    Icons:{
        fontSize:35,
       color:'black',
        margin:6,
    }
})
export default MyHeader