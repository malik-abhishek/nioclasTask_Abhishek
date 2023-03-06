import {useState,useEffect} from 'react';
import {MathJax} from 'better-react-mathjax';
import './Question.css'


 const Questions=()=>{
   const [ques,setQues]=useState([]);
   const[index, setIndex]=useState(0);
  const quesArray=['AreaUnderTheCurve_901','BinomialTheorem_901','DifferentialCalculus2_901'];  

    const fetchData = async () => {
  
      const result=await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${quesArray[index]} `);
      const data=await result.json();
      
      setQues(data);
      console.log(quesArray.length)
  }
   const updatePage=()=>{
     if(index<quesArray.length-1){
     setIndex(index+1);
     }
   }
   const decPage=()=>{
     if(index>0){
     setIndex(index-1);
     }
   }
   useEffect(()=>{
     fetchData();
   },[index])
   
    return(
      <div>
        {
        ques.map((name,indexNo)=>{
          return (
            <div className='question__Div'>
              <span className='question__Number'>{`Question ${index+1}`}</span>
              <MathJax>
              <span key={indexNo} className='question'>{name.Question}</span>
              </MathJax>
             </div>  
          )})
      }
        {
          quesArray.map((_,i)=>{
            if(index===i){
            return(
              <div className='pageIndicator'>
              <button onClick={decPage}>◀</button>
              <span key={index}>{i+1}</span>
              <button onClick={updatePage}>▶</button>  
              </div>  
            )  
            }
          })
        }
      </div>
    )
}
export default Questions;