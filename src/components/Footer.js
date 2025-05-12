import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, Button, TextField } from "@mui/material";
import Image from 'next/image'
import Link from 'next/link';


export default function Footer () {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                padding: 6
            }}
        >
            {/* top  */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 8
                }}
            >
                {/* images  */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10
                    }}
                >
                    <Image
                        src="/assets/logos/altus-logo.png"
                        width={100}
                        height={50}
                        alt="Altus logo"
                        objectFit='cover'
                        style={{
                            paddingTop: 4,
                            // border: '1px solid red'
                        }}
                    />
                    <Image
                        src="/assets/logos/vict-logo.png"
                        width={100}
                        height={50}
                        alt="Victlan Logo"
                        objectFit='cover'
                        style={{
                            // border: '1px solid red'
                        }}
                    />
                </Box>
                {/* copyright  */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: '100',
                            opacity: '.5'
                        }}
                    >
                        ALTUS 2025 - All rights Reserved
                    </Typography>
                </Box>
            </Box>


            {/* bottom  */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '120px'
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Link href="/acercade">
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: '12px',
                                fontWeight: '100',
                                textDecoration: "underline"
                            }}
                        >
                            ACERCA DE
                        </Typography>
                    </Link>

                    <Typography
                        sx={{
                            color: "white",
                            fontSize: '12px',
                            fontWeight: '100',
                            textTransform: 'uppercase',
                            mt: 2
                        }}
                    >
                        Contacto: (829) 192 9183
                    </Typography>
                    {/* social icons  */}
                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            gap: 3
                        }}
                    >
                        <Link href="/acercade" style={{color: 'white', cursor: 'pointer'}}><FacebookIcon/></Link>
                        <Link href="/acercade" style={{color: 'white', cursor: 'pointer'}}><XIcon/></Link>
                        <Link href="/acercade" style={{color: 'white', cursor: 'pointer'}}><InstagramIcon /></Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 2,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: '100',
                            width: '140px',
                            px: 2,
                            flex: 1
                        }}
                    >Subscirbete a nuestro boletin informativo</Typography>
                    <TextField className="filled-basic" variant="filled" 
                    sx={{
                        backgroundColor: 'rgb(39, 39, 39)',
                        height: '25px',
                        color: '#fff',
                        flex: 2
                    }}/>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                px: 3
                            }}
                        >
                            Subscribir
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}