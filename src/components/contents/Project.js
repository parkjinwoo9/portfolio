import '../../css/contents/Project.css';
import haus2 from '../../images/haus2.png'
import amazone from '../../images/amazone.png'
import project3 from '../../images/project3.png';
import ProjectItem from './ProjectItem';

function Project (){

    const project = [
        {
        name:'haus쇼핑몰',img:<img src={haus2} alt='haus'/>,
        info:'패션디자이너 친구에게 만들어 준 프로토타입 형태인 웹 브라우저입니다. 반응형 , 페이지네이션 등  구현했고, Firebase를 이용한 모의 DB를 사용하였습니다. ',
        info2:'부족한 점은 react에서 jquery를 이용하여 메뉴바 드롭다운을 구현했는데, 오류가 심했습니다. jquery를 사용하지 않고, 리액트 문법을 사용해서 다시 만들어볼 예정입니다.',
        link:<a href="https://haus-kr.netlify.app/">haus</a>
        },
        {
        name:'포트폴리오',img:<img src={project3} alt='project3'/>,
        info:'부트스트랩이나 템플릿을 쓰지않고, 제 머릿속으로 디자인을 구상하여 만들어본 포트폴리오 페이지입니다. 리액트-라우터-돔,리액트와 서버를 붙여 게시판 조회,디테일페이지 등 구현해보았습니다.',
        info2:'혼자 만들어보면서 개발 영역이 산이라면, 저는 자갈 한줌이라는걸 톡톡히 깨닫게 되었습니다. crud에 서버를 붙이는 작업도 삭제와 수정을 마무리하지 못하여 더 공부가 필요하다는걸 느꼇습니다. '
        },

        {
        name:'아마존 클론코딩',img:<img src={amazone} alt='curd'/>
        ,info:`장바구니, 파이어베이스 authentication 로그인,회원가입, stirpe payment-processing`,
        info2:`context와 reduce, stripe를 이용한 결제페이지, express-firebase 데이터베이스 연결, 쿼리스트링,
        stripe에 개인키가 연결이 안되서 결제하기를 누르면 결제창으로 넘어가지가 않는다. `,
        link:<a href="https://e-clone-94b0e.web.app/">아마존 페이지</a>
        }

    ]

    return(
        <div className='project'>
            <div className='project-container'> 
                <h2>PROJECT</h2>
                <p>UI/UX & FRONTEND 과정을 수료하는 동안 작업한 웹 작업물입니다.</p>
            </div>
            {project.map((project,map)=>{
                return(
                    <ProjectItem project={project} name={project.name} img={project.img}
                    info={project.info} info2={project.info2} link={project.link}/>
                )
            })}

        </div>
    )
}

export default Project;