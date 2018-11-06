// @flow

import * as React from 'react'
import { View, Text } from 'react-native'
import CityModel from '../../../modules/endpoint/models/CityModel'
import type { NavigationScreenProp } from 'react-navigation'

type PropsType = {
  navigation: NavigationScreenProp<*>,
  cityModel: CityModel,
  language: string
}

export default class Settings extends React.Component<PropsType> {
  static navigationOptions = {
    headerTitle: 'Settings'
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>Settings</Text>
        <Text>{this.props.cityModel.name}</Text>
      </View>
    )
  }
}
