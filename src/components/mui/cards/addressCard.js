import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddressImage from '../../images/Address.png'
import Typography from '@mui/material/Typography';
import './card.css'

export default function AddressCard() {
    return (
        <Card className='text' sx={{ display: 'flex', boxShadow: "none" }}>  <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={AddressImage}
            alt="address"
        />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Address
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        <b> Current</b> Salam tower, Abu dhabi, UAE.
                        <br></br>
                        <b> Permanent </b> Pune, Maharashtra, India.
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}