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

            }}
        >

            <Box
                sx={{
                    width: '100%',
                    height: '415px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mt: 15,
                    borderRadius: 2,
                }}
            >
                {/* BANNER  */}
            </Box>

            {/* victlan box  */}

            <Box>
                <Box>
                    {/* left  */}
                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Conocenos
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        VICTLAN
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Ingenieria y Arquitectura
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Somos un equipo de profesionales apasionados por la arquitectura y el diseño. 
                        Nuestro objetivo es crear espacios únicos y funcionales que se adapten a las necesidades de nuestros clientes.
                        Con años de experiencia en el sector, hemos trabajado en una amplia variedad de proyectos, desde residenciales hasta comerciales.
                        Nos enorgullece ofrecer un servicio personalizado y de alta calidad, asegurando que cada proyecto sea una representación fiel de la visión de nuestros clientes.
                        Creemos en la importancia de la colaboración y la comunicación constante con nuestros clientes,
                        para garantizar que cada detalle sea considerado y que el resultado final supere sus expectativas.
                    </Typography>

                    <List>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <WebIcon />
                            </Typography>
                        </Link>
                    </List>
                </Box>
                <Box>
                    {/* right  */}
                    <Image src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200" width={453} height={453} alt="Equipo Victlan" style={{objectFit: 'cover'}}></Image>
                </Box>
            </Box>

            {/* yenni box  */}
            <Box>
                <Box>
                    <Image src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200" width={453} height={453} alt="Equipo Victlan" style={{objectFit: 'cover'}}></Image>
                </Box>
                <Box>                
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        YENNIFER LANTIGUA
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Arquitecta 2017
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Yenni Lantigua es una arquitecta con más de 6 años de experiencia en el diseño y la planificación de proyectos arquitectónicos.
                        Su enfoque se centra en la creación de espacios funcionales y estéticamente atractivos,
                        que se adaptan a las necesidades de sus clientes. Yenni ha trabajado en una variedad de proyectos, desde residencias privadas hasta edificios comerciales,
                        y se destaca por su atención al detalle y su capacidad para gestionar proyectos de manera eficiente.
                        Su pasión por la arquitectura y el diseño la impulsa a mantenerse actualizada con las últimas tendencias y tecnologías en el campo,
                        lo que le permite ofrecer soluciones innovadoras y sostenibles en cada uno de sus proyectos.    
                    </Typography>

                    <List>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon />
                            </Typography>
                        </Link>
                    </List>
                </Box>
            </Box>


            {/* Kelmyn box */}
            <Box>
                <Box>                
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        KELMYN VICTORIA
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Ingenieria 2017
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Kelmyn Victoria es un ingeniero civil con más de 6 años de experiencia en la gestión y ejecución de proyectos de construcción.
                        Su enfoque se centra en la planificación y supervisión de obras, asegurando que cada proyecto se complete dentro del plazo y el presupuesto establecidos.
                        Kelmyn ha trabajado en una variedad de proyectos, desde infraestructuras públicas hasta desarrollos residenciales,
                        y se destaca por su capacidad para resolver problemas y tomar decisiones rápidas en situaciones de alta presión.
                        Su pasión por la ingeniería y la construcción lo impulsa a mantenerse actualizado con las últimas tecnologías y métodos de construcción,
                        lo que le permite ofrecer soluciones eficientes y sostenibles en cada uno de sus proyectos. 
                    </Typography>

                    <List>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <InstagramIcon />
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                <FacebookIcon />
                            </Typography>
                        </Link>
                    </List>
                </Box>
                <Box>
                    <Image src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200" width={453} height={453} alt="Equipo Victlan" style={{objectFit: 'cover'}}></Image>
                </Box>
            </Box>

        </Box>
    );
}