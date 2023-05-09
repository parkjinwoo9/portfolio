import '../../css/board/BoardList.css';
import Post from './Post';
import { Link } from 'react-router-dom';


function BoardList (props){
    const result = props.boardList.map(
        (data)=>(<Post no={data.no} title={data.title} author={data.author}
        contents={data.contents} />)
    )
    
    return(
        <div className='board-list'>
            <div className='board-header'>
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>내용</span>
            </div>

            {result}
            <Link to='/board/write'>
                <div className='write'>글쓰기</div>
            </Link>
        </div>
    )
}

export default BoardList;