import './index.scss'
import { useState } from 'react'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
]

function Result ({ sumOfCorrectAnswer }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
           alt="result"/>
      <h2>Вы отгадали {sumOfCorrectAnswer} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

function Game ({ step, question, onAnswerClick }) {
  const progressPercent = Math.round((step / questions.length) * 100)
  console.log(step)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressPercent}%` }}
             className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((value, index) => (
          <li
            onClick={() => {
              onAnswerClick(index)
            }}
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  )
}

function App () {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]
  const onAnswerClick = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
    setStep(step + 1)
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question}
                                          onAnswerClick={onAnswerClick}/> :
          <Result sumOfCorrectAnswer={correct}/>
      }
    </div>
  )
}

export default App
