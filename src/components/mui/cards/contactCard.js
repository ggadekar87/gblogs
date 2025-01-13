import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ContactImage from '../../images/Contact.jpg'
import Typography from '@mui/material/Typography';


export default function ContactCard() {
    return (
        <Card sx={{ display: 'flex', boxShadow: "none", marginBottom: "2%" }}>  <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={ContactImage}
            alt="Contact details"
        />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Contact
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        <b>Email-</b> ggadekar87@gmail.com<br></br>
                        <b>Phone (UAE): </b>+971 561580253<br></br>
                        <b>Phone (IN):</b> +91 7709558425<br></br>
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}