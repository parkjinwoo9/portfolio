import '../../css/food/FoodDetail.css';
import { useParams } from 'react-router-dom';

function FoodDetail (props){
    let {id} = useParams();
    let FoodData = props.FoodData
    return(
        <div className='food-detail'>
            <header>
                <h2>맛집탐방!</h2>
            </header>
            <div className='food-detail-img-box'>
                {FoodData[id].img}
                {FoodData[id].detailImg1}
                {FoodData[id].detailImg2}
                {FoodData[id].detailImg3}
            </div>
            <div className='food-info'>
                <h2>{FoodData[id].name}</h2><br/>
                <h5>{FoodData[id].place}</h5><br/>
                <h5>평점:{FoodData[id].score}</h5><br/>
                <p>{FoodData[id].review}</p><br/>
            </div>
        </div>
    )
}

export default FoodDetail;