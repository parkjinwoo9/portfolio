import '../../css/contents/About.css';
import Profile from '../../images/profileImg.jpg'

function About (){
    return(
        <div className='about'>
            <div className='line'> 
            <section className='section-title'>
                    <h2 style={{'marginTop':'100px'}}>ABOUT ME</h2>
                    <p className='thwpahr'>신입 퍼블리셔 & 프론트개발자</p>
                    <div className='aboutme'>
                    <img src={Profile} alt='profile-img'/>
                        <ul className='left'>
                            <li>
                                <strong>Birthday</strong><p>1998.01.03</p>
                            </li>
                            <li>
                                <strong>Age</strong><p>26</p>
                            </li>
                        </ul>
                        <ul className='left'>
                            <li>
                                <strong>Email</strong><p>pju1504@naver.com</p>
                            </li>
                            <li>
                                <strong>phone</strong><p>010 4245 5354</p>
                            </li>
                        </ul>
                    </div>
            </section>
           </div>

           <section className='section-resume'> 
            <h2>RESUME</h2>

            <div className='resume-flex'>
                <div className='resume-container'>
                    <div className='resume-item'>
                        <h3>Education</h3>
                        <h4>대구보건대학교</h4>
                        <p>2016.02 - 2021.02</p>
                        <h4>KOREA IT ACARDAMY</h4>
                        <p>2022.07~2022.04</p>
                    </div>
                </div>

                <div className='resume-container'>
                    <div className='resume-item'>
                        <h3>License</h3>
                        <h4>SQLD</h4>
                        <p>2022.11</p>
                        <h4>리눅스 마스터2급</h4>
                        <p>2022.12</p>
                    </div>
                </div>

                <div className='resume-container'>
                    <div className='resume-item'>
                        <h3>Exprience</h3>
                        <h4>white dental lab<br/>(2021.04 ~ 2022.06)</h4>
                        <p>
                            치과용 보철물 제작회사<br/>
                            denture 파트 보조 역할
                        </p>
                        <h4>메가젠 임플란트<br/>(2022.06 ~ 2022.07)</h4>
                        <p>
                            유닛체어사업본부<br/>
                            의자 조립 및 수리
                        </p>
                    </div>
                </div>

                <div className='resume-container'>
                    <div className='resume-item'>
                        <h3>Military Service</h3>
                        <h4>육군<br/>(2016.12 ~ 2018.09)</h4>
                        <p>
                            만기전역
                        </p>
                       
                    </div>
                </div>
                <div className='resume-container'>
                    <div style={{lineHeight:'50px'}}className='resume-item'>
                        <h3>Skill</h3>
                        <p>Html+Css</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>MySQL</p>
                    </div>
                </div>
                
            </div>
            
           </section>
        </div>
    )
}

export default About;