import { bindActionCreators } from 'redux'
import { updateHomeScreenData } from './ActionCreators'

export const mapStateToProps = (state) => {
   const { data } = state
   return { data }
};

export const mapDispatchToProps = dispatch => {
   return bindActionCreators({ updateHomeScreenData }, dispatch)
}
