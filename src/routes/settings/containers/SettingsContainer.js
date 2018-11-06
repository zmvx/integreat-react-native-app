import connect from 'react-redux/es/connect/connect'
import Settings from '../components/Settings'
import { StateType } from '../../../modules/app/StateType'

const mapStateToProps = (state: StateType, ownProps) => {
  return {
    language: state.language,
    cityModel: ownProps.navigation.getParam('cityModel')
  }
}

export default connect(mapStateToProps)(Settings)
