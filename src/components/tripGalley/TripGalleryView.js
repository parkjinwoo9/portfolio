import '../../css/tripGallery/TripGalleryView.css'


function TripGalleryView ({currItem}){
    const {title,desc,detailImg,detailImg2} = currItem
    return(
        <article className='desc'>

            <h3>{title}</h3>
            <p>{desc}</p>
            <div className='detail-img'>
                <img className='one' src={detailImg} alt={title}/>
                <img className='two' src={detailImg2} alt={title}/>
            </div>

        </article>
    )
}

export default TripGalleryView;