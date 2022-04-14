import React from 'react';
import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Headeing</Typography>
            <Typography variant='h2'>h2 Headeing</Typography>
            <Typography variant='h3'>h3 Headeing</Typography>
            <Typography variant='h4'>h4 Headeing</Typography>
            <Typography variant='h6'>h6 Headeing</Typography>
        {/* h6 has other variants called subtitles */}
            <Typography variant='subtitle 1'>Subtitle 1</Typography>
            <Typography variant='subtitle 2'>Subtitle 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias fuga nihil nulla amet accusamus laudantium optio minus, voluptate, nam qui inventore, similique placeat quam sequi nostrum necessitatibus perferendis obcaecati!</Typography>
            <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam optio voluptates ratione dicta fugiat tenetur dignissimos dolorum aliquam suscipit? Minus eveniet molestiae nesciunt natus! Facilis culpa officia molestias magnam voluptas?</Typography>
        </div>
    );
};

export default MuiTypography;