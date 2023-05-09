import '../../css/board/Post.css'

function Post (props){
    return(
        <div className='post'>
            <span>{props.no}</span>
            <span>{props.title}</span>
            <span>{props.author}</span>
            <span>{props.contents}</span>

        </div>
    )
}

export default Post;