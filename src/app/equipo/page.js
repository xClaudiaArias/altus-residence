import { Box, List, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WebIcon from '@mui/icons-material/Web';

export default function Equipo() {
    return (
        <Box 
            sx={{
                padding: 2,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#000',
                color: '#fff',
            }}
        >
            <Box sx={{px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box
                    sx={{
                        width: '100%',
                        height: '415px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: 'url(/assets/renders/re02.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        mt: 15,
                        borderRadius: 1,
                        boxShadow: 2, 
                    }}
                >
                    {/* BANNER  */}
                </Box>
            </Box>

            {/* victlan box  */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // border: '1px solid yellow',
                    py: 5,
                    px: 4,
                }}
            >
                <Box sx={{
                    mb: 5,
                    // border: '1px solid red',
                    height: '500px'
                }}>
                    {/* left  */}
                    <Typography variant="h1" sx={{fontWeight: '700', fontSize: '1.2rem', fontWeight: 'bold', mb: 2, textTransform: 'uppercase', textAlign: 'left' }}>
                        Conoce a nuestro equipo
                    </Typography>
                    <Typography variant="h2" sx={{fontWeight: '700', textTransform: 'uppercase', fontSize:'16px', mb: 1, mt: 15 }}>
                        VICTLAN
                    </Typography>
                    <Typography variant="h3" sx={{fontWeight: '600', textTransform: 'uppercase', fontSize:'12px', mb: 3 }}>
                        Ingenieria y Arquitectura
                    </Typography>

                    <Typography variant="body1" sx={{fontWeight: '300', fontSize:'12px', mb: 2, width: '80%' }}>
                        Somos un equipo de profesionales apasionados por la arquitectura y el diseño. 
                        Nuestro objetivo es crear espacios únicos y funcionales que se adapten a las necesidades de nuestros clientes.
                        Con años de experiencia en el sector, hemos trabajado en una amplia variedad de proyectos, desde residenciales hasta comerciales.
                        Nos enorgullece ofrecer un servicio personalizado y de alta calidad, asegurando que cada proyecto sea una representación fiel de la visión de nuestros clientes.
                        Creemos en la importancia de la colaboración y la comunicación constante con nuestros clientes,
                        para garantizar que cada detalle sea considerado y que el resultado final supere sus expectativas.
                    </Typography>

                    <List sx={{
                        width: '12%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2,
                    }}>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon sx={{color: 'white'}} />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon sx={{color: 'white'}} />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <WebIcon sx={{color: 'white'}} />
                            </Typography>
                        </Link>
                    </List>
                </Box>
                <Box>
                    {/* right  */}
                    <Image src="/assets/headshots/01.jpg" width={453} height={500} alt="Equipo Victlan" style={{objectFit: 'cover', objectPosition:'100% 80%', borderRadius: 2}}></Image>
                </Box>
            </Box>

            {/* yenni box  */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // border: '1px solid yellow',
                    py: 5,
                    backgroundColor: '#fff',
                    color: '#000',
                    width: '100vw',
                    px: 4,
                }}
            >
                <Box>
                    {/* left  */}
                    <Image src="/assets/headshots/YN01.jpg" width={453} height={500} alt="Equipo Victlan" style={{objectFit: 'cover', objectPosition:'100% 20%', borderRadius: 2}}></Image>
                </Box>


                <Box sx={{
                    mb: 5,
                    // border: '1px solid red',
                    height: '500px',
                    pl: 10,
                }}>
                    {/* left  */}
                    <Typography variant="h2" sx={{fontWeight: '700', textTransform: 'uppercase', fontSize:'16px', mb: 1, mt: 15 }}>
                        Yennifer Lantigua
                    </Typography>
                    <Typography variant="h3" sx={{fontWeight: '600', textTransform: 'uppercase', fontSize:'12px', mb: 3 }}>
                        Arquitecta
                    </Typography>

                    <Typography variant="body1" sx={{fontWeight: '300', fontSize:'12px', mb: 2, width: '80%' }}>
                        Yennifer Lantigua es una arquitecta con más de 5 años de experiencia en el diseño y la planificación de proyectos arquitectónicos.
                        Su enfoque se centra en la creación de espacios funcionales y estéticamente agradables, adaptados a las necesidades de sus clientes.
                        Yennifer ha trabajado en una variedad de proyectos, desde residenciales hasta comerciales, y se destaca por su atención al detalle y su capacidad para resolver problemas complejos.
                        Su pasión por la arquitectura y el diseño la impulsa a mantenerse actualizada con las últimas tendencias y tecnologías en el campo,
                        lo que le permite ofrecer soluciones innovadoras y sostenibles en cada uno de sus proyectos.
                    </Typography>

                    <List sx={{
                        width: '8%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2,
                    }}>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon sx={{color: 'black'}} />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon sx={{color: 'black'}} />
                            </Typography>
                        </Link>
                    </List>
                </Box>

            </Box>


            {/* Kelmyn box */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 5,
                    width: '100vw',
                    px: 4,
                }}
            >


                <Box sx={{
                    mb: 5,
                    // border: '1px solid red',
                    height: '500px',
                    pl: 10,
                }}>
                    {/* left  */}
                    <Typography variant="h2" sx={{fontWeight: '700', textTransform: 'uppercase', fontSize:'16px', mb: 1, mt: 15 }}>
                        Kelmyn Victoria
                    </Typography>
                    <Typography variant="h3" sx={{fontWeight: '600', textTransform: 'uppercase', fontSize:'12px', mb: 3 }}>
                        Ingeniero Civil
                    </Typography>

                    <Typography variant="body1" sx={{fontWeight: '300', fontSize:'12px', mb: 2, width: '80%' }}>
                        Kelmyn Victoria es un ingeniero civil con más de 5 años de experiencia en la gestión y ejecución de proyectos de construcción.
                        Su enfoque se centra en la planificación y supervisión de obras, asegurando que cada proyecto se complete dentro del plazo y el presupuesto establecidos.
                        Kelmyn ha trabajado en una variedad de proyectos, desde infraestructuras hasta edificaciones, y se destaca por su capacidad para coordinar equipos multidisciplinarios y resolver problemas técnicos.
                        Su pasión por la ingeniería y la construcción lo impulsa a mantenerse actualizado con las últimas tecnologías y metodologías en el campo,
                        lo que le permite ofrecer soluciones eficientes y sostenibles en cada uno de sus proyectos.
                    </Typography>

                    <List sx={{
                        width: '8%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2,
                    }}>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon sx={{color: 'white'}} />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon sx={{color: 'white'}} />
                            </Typography>
                        </Link>
                    </List>
                </Box>

                <Box
                    sx={{
                        pr:4
                    }}
                >
                    {/* right */}
                    <Image src="/assets/headshots/KM02.jpg" width={453} height={500} alt="Kelmyn Victoria Headshot" style={{objectFit: 'cover', objectPosition:'100% 10%', borderRadius: 2}}></Image>
                </Box>

            </Box>

        </Box>
    );
}