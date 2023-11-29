import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
const alanKey='6ecc5fff92469b335b8b5d333da52cf52e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ()=>{
  const [newsArticles,setNewsArticles]= useState([]);
  useEffect(()=> {
    alanBtn({
      key : alanKey,
      onCommand : ({ command,articles }) => {
        if(command==='newHeadlines') {
          // alert('this code was execcuted');
          console.log(articles);
        }
      }
    })
  }, [])
  return (
    <div>
      <h1> Alan Ai news application</h1>
      <NewsCards articles ={newsArticles}/>
    </div>
  );
}
export default App;