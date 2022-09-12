import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Header = () => {
     return (
          <AppBar>
               <Container disableGutters>
                    <Toolbar>
                         <Box sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%'
                         }}>

                              <Typography
                                   component='h2'
                                   variant='h4'
                              >
                                   QUIZ
                              </Typography>
                              <IconButton
                                   sx={{
                                        color: 'white'
                                   }}>
                                   <AccountCircle fontSize='large' />
                              </IconButton>
                         </Box>
                    </Toolbar>
               </Container>

          </AppBar>
     );
};

export default Header;