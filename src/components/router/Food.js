import '../../css/router/Food.css';
import { useParams } from 'react-router-dom';
import FoodView from '../food/FoodView';

function Food (){
    let {id} = useParams();
    console.log(id)

    return(
        <div className='food'>
            <header>
                <h2>맛집 리스트!</h2>
            </header>
            <div className='foods'>
               <FoodView />
            </div>
        </div>
    )
}

export default Food;