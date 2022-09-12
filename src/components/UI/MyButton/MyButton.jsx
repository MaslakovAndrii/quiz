import React from 'react';
import { Button } from '@mui/material';
import styles from './style';
import styled from '@emotion/styled';

const ButtonComponent = styled(Button)({ ...styles })


const MyButton = ({ children, ...props }) => {
     return (
          <ButtonComponent
               {...props}
               className={styles.root}
          >
               {children}
          </ButtonComponent>

     );
};

export default MyButton;