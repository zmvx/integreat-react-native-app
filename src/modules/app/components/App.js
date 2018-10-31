// @flow

import * as React from 'react'

import { Provider } from 'react-redux'
import I18nProvider from 'modules/i18n/containers/I18nProvider'
import createReduxStore from '../createReduxStore'
import CustomThemeProvider from '../../theme/containers/CustomThemeProvider'
import IOSSafeAreaView from 'modules/platform/components/IOSSafeAreaView'
import AndroidStatusBarContainer from '../../platform/containers/AndroidStatusBarContainer'
import type { Store } from 'redux'
import type { StateType } from '../StateType'
import type { StoreActionType } from '../StoreActionType'
import Navigator from './Navigator'
import { AsyncStorage } from 'react-native'
import firebase from 'react-native-firebase'

class App extends React.Component<{}, { waitingForStore: boolean }> {
  store: Store<StateType, StoreActionType>

  constructor () {
    super()
    this.state = {waitingForStore: true}
    const storeConfig = createReduxStore(() => { this.setState({waitingForStore: false}) })
    this.store = storeConfig.store
  }

  async componentDidMount() {
    this.checkPermission();
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken', value);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  render () {
    if (this.state.waitingForStore) {
      return null
    }

    return (
      <Provider store={this.store}>
        <I18nProvider>
          <CustomThemeProvider>
            <>
              <AndroidStatusBarContainer />
              <IOSSafeAreaView>
                <Navigator />
              </IOSSafeAreaView>
            </>
          </CustomThemeProvider>
        </I18nProvider>
      </Provider>
    )
  }
}

export default App
