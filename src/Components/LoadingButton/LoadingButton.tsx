import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingButton = () => {
  return (
  <Button
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
  )
}

export default LoadingButton

const styles = StyleSheet.create({})