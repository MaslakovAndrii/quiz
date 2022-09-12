import React from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import QuestionList from '../QuestionList/QuestionList';

const Quiz = ({data}) => {
     console.log(data);
     return (
          <>
               {/* <MainContainer>
                    <QuestionList data={data}></QuestionList>
               </MainContainer> */}
               {/* <div>{data}</div> */}
          </>
     );
};

export default Quiz;