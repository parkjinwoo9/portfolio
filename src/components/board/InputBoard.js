import '../../css/board/InputBoard.css';
import { useState } from 'react';

function InputBoard (props){
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor] = useState('')
    const [ contents, setContents ] = useState('')

    const addBoard = (e) => {
        alert('게시글이 등록되었습니다.')
        alert('input'+title)
        alert('input'+author)
        alert('input'+contents)
        props.addBoard(title,author,contents)
        e.preventDefault()
    }
    return(
        <form className='input-board'>
            <h2>게시판 글쓰기</h2>
            <div className='title-form'> 
                <label htmlfor='title-write'>제목</label><br/>
                <input 
                placeholder='제목 작성'
                type='text' 
                id='title-write'
                onChange={(e)=>(setTitle(e.target.value))}/><br/>
             </div>

            <div className='contents-form'>
                <label htmlfor='contents-write'>내용</label>
                <input 
                placeholder='내용 작성'
                type='text' 
                id='contents-write'
                onChange={(e)=>(setContents(e.target.value))}/><br/>
             </div>

            <div className='author-form'>
                <label htmlfor='author-write'>작성자</label><br/><br/>
                <input 
                placeholder='작성자(2자-10자)'
                type='text' 
                id='author-write'
                onChange={(e)=>(setAuthor(e.target.value))}/><br/>
             </div>

            <button onClick={addBoard}>등록</button>
        </form>
    )
}

export default InputBoard;