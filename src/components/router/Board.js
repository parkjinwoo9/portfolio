import '../../css/router/Board.css';
import BoardList from '../board/BoardList';
import Pagination from '../board/Pagination';
import InputBoard from '../board/InputBoard';
import axios from 'axios';
import { useState,useEffect } from 'react'

function Board (){
    const [boardList,setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [boardPerPage, setBoardPerPage] = useState(10);
    useEffect(()=>{
        getBoard()
    },[])

    const getBoard = async() => {
        const result = await axios ('/board')
        console.log(result.data)
        setBoardList(result.data)
    }
    const currentBoardList = () => {
        const startIndex=(currentPage-1)*boardPerPage;
        const endIndex = startIndex+boardPerPage;
        const slicedList = boardList.slice(startIndex,endIndex);
        return slicedList;
    }

    const addBoard = (title,contents,author) => {
        alert('추가(App)')
        const boardObj = {
             title:title, contents:contents, author:author
        }
        const concatedList = boardObj.concat(boardObj)
        setBoardList(concatedList)
    }

    return(
        <div className='board'>
            <header>
                <h2>게시판</h2>
            </header>
            <div className='boards'>
                <BoardList boardList={currentBoardList(boardList)}/>
                <Pagination total={boardList.length} boardPerPage={boardPerPage}
                setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}

export default Board;