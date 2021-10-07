import React, { Component } from 'react'

let quizData = require('./quiz_data.json')
import QuizQuestion from './QuizQuestions';

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
    render(){
        return (
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1].instruction_text}/>

        )
    }
}

exports default Quiz;