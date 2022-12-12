
// 3 -- Reducer 
const petFavoriteCounter = (state=10,action:{type:string}) => {
    switch(action.type){
      case "PET_FAVORITE_INCREASED":
        return state+1;
      case "PET_FAVORITE_DECREASED":
        return state-1;
      default:
        return state;
    }
  }
export default petFavoriteCounter; 