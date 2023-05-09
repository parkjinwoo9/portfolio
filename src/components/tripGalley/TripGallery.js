import { useState } from 'react';
import TripGalleryList from './TripGalleryList';
import TripGalleryView from './TripGalleryView';
import data from './data';

import '../../css/tripGallery/TripGallery.css'


function TripGallery (){

    const [datas, setDatas] = useState(data)
    const [currItem, setCurrItem] = useState(datas[0])

    const onView = (id) => {
        setCurrItem(datas.find(item=>item.id===id))
    }

    return(
        <div className='wrap'>
            <TripGalleryList datas={datas} onView={onView} currItem={currItem}/>
            <TripGalleryView currItem={currItem}/>
        </div>
    )
}

export default TripGallery;