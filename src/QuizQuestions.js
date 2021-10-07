import React from 'react';
let quizData = require('./quiz_data.json')


class QuizQuestion extends React.Component{
    render(){
       return ( 
       <main>
        <section>
          <p>{this.props.QuizQuestion}</p>
        </section>‹
        <section className="buttons">
          <ul>
              <li>{this.props.quiz_question.answer_options[0]}</li>
            //quiz question button logic goes here
          </ul>
        </section>
      </main>
       )
    }
}


export default QuizQuestion