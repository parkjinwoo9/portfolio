import '../../css/common/MoveTop.css';
import TopBtn from '../../images/top.png';

function MoveTop (){
    const MoveToTop= () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return(
        <div className='move-top'>
            <img src={TopBtn} alt='top-btn'  onClick={MoveToTop}/>
        </div> 
    )
}

export default MoveTop;