// @flow

import * as React from 'react'
import logo from '../assets/integreat-app-logo.png'
import styled from 'styled-components'
import { View } from 'react-native'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import type { NavigationScene } from 'react-navigation'
import type { ThemeType } from 'modules/theme/constants/theme'

const Horizonal = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HorizonalLeft = styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.Image`
  width: 150px;
  height: 50px;
  resize-mode: contain;
`

const Title = styled.Text`
 font-size: 30px;
 color: black;
 margin-left: 10px;
`

const BackButton = styled(MaterialIcon)`
  margin-left: 10px;
  margin-right: 10px;
`

const BoxShadow = styled.View`
  background-color: ${props => props.theme.colors.backgroundAccentColor};
  height: ${props => props.theme.dimensions.headerHeight};
`

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcon} iconSize={23} color='black' />
)

const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      OverflowIcon={<MaterialIcon name='more-vert' size={23} color='black' />}
      {...props}
    />
  )
}

type PropsType = {
  scene: NavigationScene,
  theme: ThemeType
}

class Header extends React.PureComponent<PropsType> {
  render () {
    let headerTitle = ''

    // $FlowFixMe
    if (this.props.scene.descriptor) {
      const {options} = this.props.scene.descriptor
      headerTitle = options.headerTitle
    }

    return (
      <BoxShadow theme={this.props.theme}>
        <Horizonal>
          <HorizonalLeft>
            <BackButton name='arrow-back' size={30} color='black' />
            <Logo source={logo} />
            <Title>{headerTitle}</Title>
          </HorizonalLeft>
          <MaterialHeaderButtons>
            <Item title='add' iconName='search' onPress={() => console.warn('add')} />
            <Item title='language' iconName='language' onPress={() => console.warn('edit')} />
            <Item title='location' iconName='edit-location' onPress={() => console.warn('edit')} />
            <Item title='asdf' show='never' onPress={() => console.warn('edit')} />
          </MaterialHeaderButtons>
        </Horizonal>
      </BoxShadow>
    )
  }
}

export default Header
