import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import styles from './style';

const InputComponent = styled(TextField)({ ...styles })

const MyInput = forwardRef((props, ref) => {
     return (
          <InputComponent
               {...props}
               className={styles.root}
               inputRef={ref}
          />
     );
});


export default MyInput;