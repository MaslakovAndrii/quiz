import React from 'react';
import { Container, styled } from '@mui/system';
import styles from './style';

const ContainerComponent = styled(Container)({ ...styles });



const MainContainer = ({ children, ...props }) => {
     return (
          <ContainerComponent
               {...props}
               className={styles.root}
               // container='main'
          >
               {children}
          </ContainerComponent>
     );
};

export default MainContainer;