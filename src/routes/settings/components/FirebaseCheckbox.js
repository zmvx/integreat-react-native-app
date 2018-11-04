import React, { Component } from 'react'
import { CheckBox } from 'react-native-elements'

class FirebaseCheckbox extends Component {
  constructor () {
    super()
    this.state = {isChecked: true}
  }

  render () {
    return (
      <CheckBox
        title='Click Here'
        checked={this.state.isChecked}
      />
    )
  }
}

export default FirebaseCheckbox
