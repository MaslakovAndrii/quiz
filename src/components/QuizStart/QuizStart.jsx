import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import MainContainer from '../MainContainer/MainContainer';
import { AUTHORIZATION_ROUTE, QUIZ_ROUTE } from '../../utils/const';
import { useAuth } from '../../hooks/useAuth';

const QuizStart = () => {

     const { isAuth,  email } = useAuth()

     return (
          <>
               <MainContainer>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              rowGap: '20px',
                              maxWidth: '50%'
                         }}>
                         <Typography
                              component='h2'
                              variant='h4'
                         >
                              Добро пожаловать в QUIZ!
                         </Typography>
                         <Button
                              variant="contained"
                              component={Link}
                              to={isAuth ? QUIZ_ROUTE : AUTHORIZATION_ROUTE}
                         >
                              Начать тестирование
                         </Button>
                    </Box>
               </MainContainer>
          </>

     );
};

export default QuizStart;