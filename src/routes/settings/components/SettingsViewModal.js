// @flow

import * as React from 'react'
import { View, Text } from 'react-native'
import FirebaseCheckbox from './FirebaseCheckbox'

export default class SettingsViewModal extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>Settings</Text>
        <FirebaseCheckbox />
      </View>
    )
  }
}
