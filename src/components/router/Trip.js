import '../../css/router/Trip.css';
import TripGallery from '../tripGalley/TripGallery';





function Trip (){

    return(
        <div className='trip'>
            <header>
                <h2>여행</h2>
            </header>
                <TripGallery />
        </div>
    )
}

export default Trip;