let initialState = {
    error:'',
    ads: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
  
      case 'FETCH_DATA':
        console.log("data in reducer from fetch action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          ads: action.payload,
        };
       
      default:
        return state;
    }
  }
  
  export default reducer;