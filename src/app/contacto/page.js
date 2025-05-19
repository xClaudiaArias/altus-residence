import { Box, Typography, TextField, Button, List, ListItem } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contacto() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: 'url(https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238341/ext02_d9hazf.png)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                backgroundSize: {xs: 'cover', md:'100% 100%'},
                backgroundPosition: 'center',
                padding: 0,
                margin: 0,
            }}
        >

            <Box sx={{ padding: {xs: 2, md: 4}, backgroundColor: 'white',  width: {xs: '90%', md: '40%'}, height: '400px' }}>
                {/* <Box>
                    <Typography variant="h1" sx={{fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}>
                        Contáctanos
                    </Typography>   
                    <Typography>
                        Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros.
                    </Typography>
                    <Typography>
                        Teléfono: +1 (809) 555-1234
                        <br></br>
                        Email: -------- 
                    </Typography>
                </Box> */}

                <Box>
                    <Typography variant="h1" sx={{fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}>
                        Contáctanos
                    </Typography>  
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                        <Typography sx={{textTransform: 'uppercase', fontSize: '14px',  width: '80px', fontWeight: 300}}>Nombre</Typography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            sx={{
                                flex: 2,
                                '& .MuiInputBase-root': {
                                height: '32px',
                                fontSize: '14px',
                                },
                                '& input': {
                                padding: '8px',
                                }
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                        <Typography sx={{textTransform: 'uppercase', fontSize: '14px', fontWeight: 300, width: '80px'}}>Email</Typography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            sx={{
                                flex: 2,
                                '& .MuiInputBase-root': {
                                height: '32px',
                                fontSize: '14px',
                                },
                                '& input': {
                                padding: '8px',
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                        <Typography sx={{textTransform: 'uppercase', fontSize: '14px', fontWeight: 300, width: '100px'}}>Mensaje</Typography>
                        <TextField
                            multiline
                            rows={6}
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiInputBase-root': {
                                fontSize: '14px',
                                padding: 0,
                                },
                                '& textarea': {
                                padding: '8px',
                                }
                            }}
                            />

                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button variant="contained" sx={{backgroundColor: 'black', color: 'white', textTransform: 'uppercase', fontSize: '14px', fontWeight: 300,  '&:hover': { backgroundColor: '#333' } }}>
                            <SendIcon/>  Enviar
                        </Button>
                        <List sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItem>
                                <Link href="https://www.instagram.com/altusdr/" target="_blank" rel="noopener noreferrer">
                                    <Typography variant="body1" sx={{color: 'black' }}>
                                        <InstagramIcon></InstagramIcon>
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.facebook.com/altusdr/" target="_blank" rel="noopener noreferrer">
                                    <Typography variant="body1" sx={{color: 'black' }}>
                                        <FacebookIcon />
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
