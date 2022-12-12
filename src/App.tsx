import './App.css';
import { petIncrement, petDecrement, petFavoriteDecrement, petFavoriteIncrement } from './redux/actions';
import {useSelector, useDispatch} from 'react-redux';
function App() {
  const petCounter = useSelector((state:any)=> state.petCounter);
  const petFavoriteCounter = useSelector((state:any)=> state.petFavoriteCounter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Demo</h1>
      <h3>PetCounter : <span>{petCounter}</span></h3>
      <h3>PetFavoriteCounter : <span>{petFavoriteCounter}</span></h3>
      <button onClick={()=> dispatch(petIncrement(100))}>Add PET</button>
      <button onClick={()=> dispatch(petDecrement(50))}>Remove PET</button>
      <button onClick={()=> dispatch(petFavoriteIncrement())}>ADD PetFavoriteCounter</button>
      <button onClick={()=> dispatch(petFavoriteDecrement())}>REMOVE PetFavoriteCounter</button>

    </div>
  );
}

export default App;
