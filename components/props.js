import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style'

const Props = (props) => {
  return (
   <View>
    <Text style={styles.textProps}>Props Component</Text>
    <Text style={[styles.textProps, {color:'red'}]}>Res: {props.name}</Text>

   </View>
  )
}

export default Props
