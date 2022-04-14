import React from 'react';
import { Stack, Button, IconButton , ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return (
        <Stack spacing={4}>
        <Stack spacing={2} direction='row' >
            <Button variant ='text' href='google.com'>Text</Button>
            <Button variant ='contained'>Contained</Button>
            <Button variant ="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant ='contained' color='primary'>Primary</Button>
            <Button variant ='contained' color='secondary'>Secondary</Button>
            <Button variant ='contained' color='error'>Error</Button>
            <Button variant ='contained' color='warning'>Warning</Button>
            <Button variant ='contained' color='info'>INFO</Button>
            <Button variant ='contained' color='success'>SUCCESS</Button>

        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant ='text' color='primary'>Primary</Button>
            <Button variant ='text' color='secondary'>Secondary</Button>
            <Button variant ='text' color='error'>Error</Button>
            <Button variant ='text' color='warning'>Warning</Button>
            <Button variant ='text' color='info'>INFO</Button>
            <Button variant ='text' color='success'>SUCCESS</Button>

        </Stack>
        {/* check colors with outlined  */}
        <Stack spacing={2} direction='row'>
            <Button variant ='outlined' color='primary'>Primary</Button>
            <Button variant ='outlined' color='secondary'>Secondary</Button>
            <Button variant ='outlined' color='error'>Error</Button>
            <Button variant ='outlined' color='warning'>Warning</Button>
            <Button variant ='outlined' color='info'>INFO</Button>
            <Button variant ='outlined' color='success'>SUCCESS</Button>

        </Stack>
            {/* sizes of buttons */}
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='large'>Large </Button>
            <Button variant='contained' size='medium'>Medium </Button>
            <Button variant='contained' size='small'>small </Button>
        </Stack>
        {/* ÷adding icons */}
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>SEND</Button>
            <Button variant='contained' endIcon={<SendIcon/>}>SEND</Button>

            {/* display an icon without button */}
            <IconButton color='success' size='large'>
                <SendIcon/>
            </IconButton>
        </Stack>
        {/* using the button group , this is when a group of button that are serving the same function */ }
        <Stack direction='row'>
            <ButtonGroup variant='contained'>
            <Button >Left</Button>
            <Button >Center</Button>
            <Button >Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' aria-label='alignment group'>
            <Button >Left</Button>
            <Button >Center</Button>
            <Button >Right</Button>
            </ButtonGroup>
        </Stack>
        </Stack>
    );
};

export default MuiButton;