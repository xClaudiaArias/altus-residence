import { Box, Typography, TextField, Button, List, ListItem } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contacto() {
    return (
        <Box>
            <Box>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', mt: 10 }}>
                    Contáctanos
                </Typography>   
                <Typography>
                    Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros.
                </Typography>
                <Typography>
                    <p>Teléfono: +1 (809) 555-1234</p>
                    <br></br>
                    <p>Email: -------- </p>
                </Typography>
            </Box>

            <Box>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <br></br>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br></br>
                <TextField id="outlined-basic" label="Mensaje" variant="outlined" multiline rows={4} />
                <br></br>
                <Box>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        <SendIcon/>  Enviar
                    </Button>
                    <List>
                        <ListItem>
                            <Link href="https://www.instagram.com/altusdr/" target="_blank" rel="noopener noreferrer">
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    <InstagramIcon></InstagramIcon>
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.facebook.com/altusdr/" target="_blank" rel="noopener noreferrer">
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    <FacebookIcon />
                                </Typography>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
}
