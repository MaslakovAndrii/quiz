import React from 'react';
import Question from '../Question/Question';



const QuestionList = ({ data }) => {
     

     return (
          <div>
               {data.map((question, index) =>
                    <Question number={index + 1} question={question} key={question.id} />
               )}
          </div>
     );
};

export default QuestionList;