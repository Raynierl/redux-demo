
// 3 -- Reducer 
const petCounter = (state=10,action:{type:string,payload:number|any}) => {
    switch(action.type){
      case "PET_INCREASED":
        return state+action.payload;
      case "PET_DECREASED":
        return state-action.payload;
      default:
        return state;
    }
  }
export default petCounter; 