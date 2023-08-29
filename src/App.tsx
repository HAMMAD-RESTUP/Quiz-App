import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function App() {

  type optionstype = {
    Answeroptions: any,
    questionText: any
    questions: any
  }


  const questions = [
    {
      questionText: '1. What is the capital of Pakistan?',
      answerOptions: [

        { Answeroptions: 'Karachi', correct: false },
        { Answeroptions: 'Islamabad', correct: true },
        { Answeroptions: 'Sukkur', correct: false },
        { Answeroptions: 'Multan', correct: false }

      ]
    },
    {
      questionText: '2. How Many Provinces In Pakistan?',
      answerOptions: [

        { Answeroptions: 4, correct: false },
        { Answeroptions: 5, correct: true },
        { Answeroptions: 8, correct: false },
        { Answeroptions: 10, correct: false }

      ]
    },
    {
      questionText: '3. Who was the founder of Pakistan ?',
      answerOptions: [

        { Answeroptions: 'Maulana Muhammad Ali Juhar', correct: false },
        { Answeroptions: 'Chaudary Rehmat Ali', correct: false },
        { Answeroptions: 'Quid-e-Azam', correct: true },
        { Answeroptions: 'Ghandi', correct: false }

      ]
    },
    {
      questionText: '4. What Is the Biggest lake of Pakistan?',
      answerOptions: [

        { Answeroptions: 'the Manchar Lake', correct: true },
        { Answeroptions: 'River Lake', correct: true },
        { Answeroptions: 'Satluj', correct: false },
        { Answeroptions: 'Beas', correct: false }

      ]
    },
    {
      questionText: '5. Who is the Current Prime Minister of Pakistan?',
      answerOptions: [

        { Answeroptions: 'Imran Khan', correct: false },
        { Answeroptions: 'Zardari Bhutto', correct: true },
        { Answeroptions: 'Shebaz Sharif', correct: false },
        { Answeroptions: 'Nawaz Sharif', correct: false }

      ]
    },
    {
      questionText: '6. The Second Largest City Of Pakistan?',
      answerOptions: [

        { Answeroptions: 'Karachi', correct: false },
        { Answeroptions: 'Islamabad', correct: true },
        { Answeroptions: 'Sukkur', correct: false },
        { Answeroptions: 'Multan', correct: false }

      ]
    },
    {
      questionText: '7. What is the national language of Pakistan?',
      answerOptions: [

        { Answeroptions: 'Sindhi', correct: true },
        { Answeroptions: 'Punjabi', correct: false },
        { Answeroptions: 'Pushto', correct: false },
        { Answeroptions: 'Urdu', correct: true  } ,

      ]
    },
    {
      questionText: '8. What is the official currency of Pakistan ?',
      answerOptions: [

        { Answeroptions: '(PKR)', correct: false },
        { Answeroptions: '($)', correct: false },
        { Answeroptions: '(Bath)', correct: true },
        { Answeroptions: '(Riyal)', correct: false  } ,

      ]
    },
    {
      questionText: '9. Which pass connects Pakistan with Afghanistan and is an important historical trade route ?',
      answerOptions: [

        { Answeroptions: 'Kabul ', correct: false },
        { Answeroptions: ' Kandahar', correct: false },
        { Answeroptions: 'Khyber Pass', correct: true },
        { Answeroptions: 'Gilgit', correct: true  } ,

      ]
    },
    {
      questionText: '10. What is the national tree of Pakistan, known for its large size and distinctive fragrance ?',
      answerOptions: [

        { Answeroptions: 'Deodar Cedar', correct: true },
        { Answeroptions: 'Fobia', correct: false },
        { Answeroptions: 'Raisal', correct: false },
        { Answeroptions: 'Zedar', correct: false  } ,

      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState<any>(0);
  const handelAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);

    } else {
      alert("You are End of This Quiz");
    }
  }

  return (
    <>
      <div className='container'>

        <div className='Quiz-container'>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Question-Section">
          <h1 className='text-center mainh1'>Quiz App</h1>
            <h3> {questions[currentQuestion].questionText}</h3>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Answer-Section">
            {questions[currentQuestion].answerOptions.map((e,i) => 
            
              <Button className='mtr-btn' sx={{ m: '1rem' }} variant="contained"  color='success' onClick={handelAnswerButtonClick}>{e.Answeroptions}</Button>)}

          </div>
        </div>
      </div>






    </>
  );
}

export default App;
