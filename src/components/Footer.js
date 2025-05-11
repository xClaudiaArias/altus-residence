import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Input, Typography, Button } from "@mui/material";
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
                    border: '1px dashed red',
                    height: '120px'
                }}
            >
                <Box
                    sx={{
                        border: '1px solid white',
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
                        border: '1px solid yellow'
                    }}
                >
                    <Typography>Subscirbete a nuestro boletin informativo</Typography>
                    <Input />
                    <Button>Subscribir</Button>
                </Box>

            </Box>
        </Box>
    );
}