const initialState = { data: [] }
const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case "UPDATE_DATA":
         return { data: state.data }
   }
   return state
}

export default Reducer