import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import styles from './style';

const TypographyComponent = styled(Typography)({ ...styles })

const MyTypography = ({children, ...props}) => {
     return (
          <TypographyComponent 
               className={styles.root}
               {...props}
               >
               {children}
          </TypographyComponent>
     );
};

export default MyTypography;