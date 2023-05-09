import '../../css/food/FoodView.css';
import { useState } from 'react';
import FoodData from './FoodData';
import FoodList from './FoodList';


function FoodView (){
    const [foods, setFoods] = useState(FoodData)

    return(
        <div>
             {foods.map((data)=>{
                    return(
                        <FoodList foods={foods} id={data.id} img={data.img} name={data.name}
                         place={data.place} score={data.score} review={data.review} />
                    )
                })}
        </div>
    )
}

export default FoodView;