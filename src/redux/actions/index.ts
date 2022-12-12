// 2- Action
export const petIncrement = (number:number) => {
    return {
      type: "PET_INCREASED",// name of the action ( like calling a function and giving it its name ) type = function name
      payload: number // what we send to the reducer
    }
  } 
  // 2 - another action
export const petDecrement = (number:number) => {
    return {
      type: "PET_DECREASED",
      payload: number
    }
  }

  export const petFavoriteIncrement = () => {
    return {
      type: "PET_FAVORITE_INCREASED" // name of the action ( like calling a function and giving it its name ) type = function name
    }
  } 
  // 2 - another action
export const petFavoriteDecrement = () => {
    return {
      type: "PET_FAVORITE_DECREASED"
    }
  }