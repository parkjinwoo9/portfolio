import '../../css/tripGallery/TripGalleryList.css'
import TripGalleryItem from './TripGalleryItem';


function TripGalleryList ({datas, currItem, onView}){
    const {image,title} = currItem

    return(
        <atricle className='g-list'>
            <img src={image} alt={title} />
            <ul>
                {
                    datas.map(item=>
                        <TripGalleryItem key={item.id} item={item} onView={onView}/>)
                }
            </ul>
        </atricle>
    )
}

export default TripGalleryList;