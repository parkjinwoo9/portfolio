import '../../css/contents/Home.css';

import { useState,useEffect } from 'react';


function Home (){


  
    const completionWord = 'React  Express  mySQL';
    const [blogTitles, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const typingInterval = setInterval(() => {
          setBlogTitle((prevTitleValue) => {
            let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
            setCount(count + 1);
    
            if (count >= completionWord.length) {
              setCount(0);
              setBlogTitle('');
            }
    
            return result;
          });
        }, 300);
    
        return () => {
          clearInterval(typingInterval);
        };
      });
    

    return(
        <div className='home'>
            <div className="home-info" >

                <h1>Park jin woo</h1>
                <h2 className='imdev'>Frontend Developer</h2>
              <a href="#" className='typing-effect'>{blogTitles}</a>
            </div>
        </div>
        
    )
}

export default Home;