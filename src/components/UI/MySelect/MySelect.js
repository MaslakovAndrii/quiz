import React, { forwardRef } from 'react';
import { Select, MenuItem } from '@mui/material';

const MySelect = forwardRef((props, ref) => {
     const { options } = props
     console.log(options);
     return (

          <Select
               inputRef={ref}
              {...props}
          >
               {options.map(option => {
                    return <MenuItem
                         value={option[Object.keys(option)] + ""}
                         key={Object.keys(option)[0]}
                    >
                         {Object.keys(option)[0]}
                    </MenuItem>
               })}
          </Select>
     );
});

export default MySelect;