const initialState = { data: {} }
const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case "UPDATE_HOME_SCREEN_DATA":
         return { data: action.data }
      default:
         return state
   }
}

export default Reducer