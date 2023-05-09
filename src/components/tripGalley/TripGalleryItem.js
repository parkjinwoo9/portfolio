import '../../css/tripGallery/TripGalleryItem.css'

function TripGalleryItem ({item, onView}){
    const {image, title, id} = item
    return(
        <div className='g-item'>
            <li onClick={()=>onView(id)}>
                <img src={image} alt={title}/>
            </li>
        </div>
    )
}

export default TripGalleryItem