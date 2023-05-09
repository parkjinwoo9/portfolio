import '../../css/food/FoodList.css';
import { Link } from 'react-router-dom';

function FoodList (props){

    return(
        <div className='food-list'>
            <div className='food-img'>
                <Link to={'/food/'+props.id}> 
                    {props.img}
                </Link> 

            </div>
            <h3>{props.name}</h3>
            <p>{props.place}</p>
            <p>평점 : {props.score}</p>
        </div>
    )
}

export default FoodList;