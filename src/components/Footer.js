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
                padding: 6,
                height: {xs: '500px', md: 'auto'}
            }}
        >
            {/* top  */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: {xs: 2, md: 0},
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
                        gap: 10,
                    }}
                >
                    <Image
                        src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747248650/altus-logo_qpsbia.png"
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
                        src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747248650/vict-logo_soadbi.png"
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
                    flexDirection: {xs: 'column', md: 'row'},
                    textAlign: {xs: 'center', md: 'left'},
                    justifyContent: 'space-between',
                    height: '120px',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
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
                            justifyContent: {xs: 'center', md: 'flex-start'},
                            gap: {xs: 5, md: 3},
                            padding: {xs: '5px 0', md: 0},
                            mb: {xs: 5, md: 0},
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
                        flexDirection: {xs: 'column', md: 'row'},
                        textAlign: {xs: 'center', md: 'left'},
                        gap: {xs: 1, md:0},
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {xs: '12px', md: '16px'},
                            fontWeight: '100',
                            width: {xs: '100%', md: '500px'},
                            px: 2,
                            flex: 2,
                            pl: {xs: 0}
                        }}
                    >
                        Subscirbete a nuestro boletin informativo
                    </Typography>

                    {/* input  */}
                    <TextField
                    variant="outlined"
                    // fullWidth
                    sx={{
                        mx: 2,
                        width: {xs: '100%', md: '60%'},
                        backgroundColor: 'rgb(39, 39, 39)',
                        height: '25px',
                        '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgb(39, 39, 39)',
                        borderRadius: 1,
                        // height: '25px',
                        paddingX: 1,
                        color: '#fff',
                        },
                        '& .MuiInputBase-input': {
                        color: 'none',
                        height: '25px',
                        padding: '10px', // Adjust as needed
                        },
                        '& .MuiInputLabel-root': {
                        color: '#aaa',
                        },
                        '&.Mui-focused': {
                            boxShadow: 'none',
                            outline: 'none',
                        },
                    }}
                    />



                    {/* button  */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: {xs: 'center', md: 'flex-end'},
                            px: 0,
                            mt: {xs: 4, md: 0}
                            
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