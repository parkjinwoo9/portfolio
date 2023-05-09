import '../../css/board/Pagination.css';

function Pagination (props){
    const {total,boardPerPage} = props
    const endPage = Math.ceil(total/boardPerPage)
    let pageNumbers = []
    for(var i=1; i<=endPage; i++){
        pageNumbers.push(i)
    }
    const result = pageNumbers.map(
        (page)=>(<span className='page' onClick={()=>pageClick(page)}>{page}</span>)
    )
    const pageClick = page => {
        props.setCurrentPage(page)
    }
    return(
        <div className='pagination'>
            <div className='pagination-inner'>
                {result}
            </div>
        </div>
    )
}

export default Pagination;