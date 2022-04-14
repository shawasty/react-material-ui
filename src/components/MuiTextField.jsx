import React from 'react';
import { InputAdornment, Stack, TextField } from '@mui/material'


const MuiTextField = () => {
    return (
        // demonstartaing different variants of material ui
        <Stack spacing={4}>
            <Stack direction='row' spacing={4}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
            </Stack>
            {/* demonstrating sizing  */}
            <Stack direction='row' spacing={4}>
            <TextField label='small secondary' size='small' color='secondary' variant='outlined'/>
            </Stack>
            {/* required field demonstration */}
            <Stack direction='row' spacing={4}>
            <TextField label='form Input' required />
            </Stack>
            {/* Helper text demonstartaion */}
            <Stack direction='row' spacing={4}>
            <TextField label='form Input' helperText='dont share password' />
            </Stack>
            {/* demonstrtaing adornment by insertng symbols*/}
            <Stack direction='row' spacing={4}>
            <TextField label='amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            }}/>
            <TextField label='weight' InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
            }}/>
            </Stack>
        </Stack>
    );
};

export default MuiTextField;