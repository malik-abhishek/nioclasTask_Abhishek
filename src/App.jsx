import './App.css'
import Questions from './Components/Questions.jsx'
import {MathJaxContext} from 'better-react-mathjax';

export default function App() {
  return (
    <main>
      <MathJaxContext>
      <Questions/>
      </MathJaxContext>  
    </main>
  )
}
