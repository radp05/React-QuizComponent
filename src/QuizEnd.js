import React from 'react';
 
class QuizEnd extends React.Component{
  
   
    render(){
        return(
            <div>
            <p>Thanks for playing!</p>
            <a href='' onClick= {this.props.resetClickHandler}>Reset Quiz</a>
          </div>
        )
    }
  
}
 
export default QuizEnd;