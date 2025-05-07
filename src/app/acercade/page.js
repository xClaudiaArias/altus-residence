import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from "next/image";


export default function Acercade() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100vw',
            pl: 3,
            mt: 14
        }}>

        {/* written  */}
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
                px: 2,
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>
                <Typography variant="h1" sx={{fontSize: '1.2rem', fontWeight: "bold", textAlign: "left", textTransform: "uppercase" }}>
                    Acerca de
                </Typography>
                <Typography sx={{ textAlign: "left", mt: 3 }}>
                    Altus Residence es un proyecto inmobiliario de vanguardia que redefine el concepto de lujo y exclusividad en Los Cerros de Gurabo, Santiago. Diseñado para ofrecer un estilo de vida sofisticado, seguro y confortable. Este desarrollo residencial cuenta con 4 tipologías de apartamentos, para un total de 27 unidades vendible en 13 niveles, un nivel de sótano destinado a estacionamientos y servicios.
Altus Residence se erige como una opción inigualable para quienes buscan un hogar que combine lujo, confort y exclusividad en un entorno de alta plusvalía. Con una ubicación privilegiada, diseño vanguardista y amenidades de primer nivel, este desarrollo representa una inversión sólida y una oportunidad única para vivir con el máximo confort y prestigio.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>
                <Typography variant="h2" sx={{fontSize: '1rem', fontWeight: "bold", textAlign: "left", mt: 3, textTransform: "uppercase" }}>
                    Misión
                </Typography>
                <Typography sx={{ textAlign: "left", mt: 3 }}>
                    Nuestra misión es ofrecer un hogar moderno y cómodo a nuestros residentes, brindando un estilo de vida de calidad en un entorno seguro y agradable.
                </Typography>
            </Box>

            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Typography variant="h2" sx={{fontSize: '1rem', fontWeight: "bold", textAlign: "left", mt: 3, textTransform: "uppercase" }}>
                    Distribución Arquitectónica
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4, mt: 2 }}>
                    <ListItem sx={{ display: 'list-item' }}>Nivel Sótano: Estacionamientos y servicios.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Primer Nivel: Estacionamientos y servicios.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Segundo al Quinto Nivel: Tres bloques de apartamentos (Tipo A - 235 m2, Tipo B - 185
                        m2, Tipo C - 114 m2).</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sexto Nivel: Dos bloques de apartamentos (Tipo A - 235 m2, Tipo C - 114 m2), gimnasio,
                    clubhouse con bar, terraza destechada y piscina.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Séptimo Nivel: Dos apartamentos (Tipo A - 235 m2, Tipo D - 230 m2).
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Octavo Nivel: Dos apartamentos (Tipo A - 235 m2, Tipo D - 230 m2).</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Noveno Nivel y Décimo Nivel: Dos apartamentos (Tipo A - 235 m2, Tipo D - 230 m2).</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Undécimo Nivel  Duodécimo Nivel: Dos apartamentos (Tipo A - 235 m2, Tipo D - 230 m2).</ListItem>    
                    <ListItem sx={{ display: 'list-item' }}>Decimotercer Nivel: Dos apartamentos (Tipo A - 235 m2) y un área social con lounge climatizado, parque español y playground infantil.</ListItem>
                </List>
            </Box>


            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Typography variant="h2" sx={{fontSize: '1rem', fontWeight: "bold", textAlign: "left", mt: 3, textTransform: "uppercase" }}>
                    Características de los Apartamentos
                </Typography>

                <Typography variant="h3" sx={{fontSize: '14px',  fontWeight: "bold", textAlign: "left", mt:3}}>
                    Tipo A - 235 m2
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4, mt: 2}}>
                    <ListItem sx={{ display: 'list-item' }}>Recibidor</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>3 habitaciones con baño.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>4 baños y medio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Walk-In Closet</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sala
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Estudio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cocina</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Comedor</ListItem>    
                    <ListItem sx={{ display: 'list-item' }}>Lavado</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Closet de ropa blanca</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Habitación de servicio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Terraza interna (Patio)</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Balcón amplio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cerradura principal inteligente</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>2 parqueos</ListItem>
                </List>

                <Typography variant="h3" sx={{fontSize: '14px',  fontWeight: "bold", textAlign: "left", mt:3}}>
                    Tipo B - 185 m2
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4, mt: 2 }}>
                    <ListItem sx={{ display: 'list-item' }}>3 habitaciones con baño</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>4 baños y medio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Walk-In Closet</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sala</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cocina</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Comedor</ListItem>    
                    <ListItem sx={{ display: 'list-item' }}>Lavado</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Closet de ropa blanca</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Habitación de servicio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Balcón amplio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cerradura principal inteligente</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>2 parqueos</ListItem>
                </List>

                <Typography variant="h3" sx={{fontSize: '14px',  fontWeight: "bold", textAlign: "left", mt:3}}>
                    Tipo C - 114 m2
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4, mt: 2 }}>
                    <ListItem sx={{ display: 'list-item' }}>2 habitaciones con baño</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>2 baños y medio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Walk-In Closet</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sala</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cocina</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Comedor</ListItem>    
                    <ListItem sx={{ display: 'list-item' }}>Lavado</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Closet de ropa blanca</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Balcón amplio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cerradura principal inteligente</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>2 parqueos</ListItem>
                </List>

                <Typography variant="h3" sx={{fontSize: '14px',  fontWeight: "bold", textAlign: "left", mt:3}}>
                    Tipo D - 227 - 248 m2
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4, mt: 2 }}>
                    <ListItem sx={{ display: 'list-item' }}>Recibidor</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>3 habitaciones con baño</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>4 baños y medio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Walk-In Closet</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sala</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Estudio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cocina</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Comedor</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Lavado</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Closet de ropa blanca</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Habitación de servicio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Terraza interna (Patio)</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Balcón amplio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Cerradura principal inteligente</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>2 parqueos</ListItem>
                </List>

                <Typography variant="h2" sx={{fontSize: "1rem", fontWeight: "bold", textAlign: "left", textTransform: "uppercase", mt: 3 }}>
                    Amenidades  Servicios
                </Typography>
                <Typography sx={{ textAlign: "left", mt: 3 }}>
                Uno de los mayores atractivos de Altus Residence es su impresionante área social de más de 500 m2, distribuidos en los niveles 1, 6 y 13 respectivamente.
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4, mt: 3 }}>
                    <ListItem sx={{ display: 'list-item' }}>Lobby de doble altura climatizado</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Co-working space</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Gimnasio</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Clubhouse con bar</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Terraza destechada</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Deck</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Piscina</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Dos ascensores de última generación</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Escalera de  emergencia</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Plant eléctrica full para áreas comunes</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Sala de espera para choferes</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Habitaciones climatizadas</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Domótica opcional</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>Administración</ListItem>
                </List>

                <Typography variant="h2" sx={{fontSize: '1rem', fontWeight: "bold", textAlign: "left", textTransform: "uppercase", mt: 3 }}>
                    Plan de Pago
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4, mt: 3 }}>
                    <ListItem sx={{ display: 'list-item' }}><strong>Reserva:</strong> US $5,000</ListItem>
                    <ListItem sx={{ display: 'list-item' }}><strong>Firma de contrato:</strong> Completar el 10% (30 a 60 días para completar).</ListItem>
                    <ListItem sx={{ display: 'list-item' }}><strong>Inicial:</strong> 30% durante el proceso de construcción.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}><strong>Entrega:</strong> 60% con el banco de su preferencia en 2027.</ListItem>
                </List>



            </Box>


        </Box>
        {/* end written  */}


        {/* images  */}
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '800px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 4,
                height: '4500px',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-corner': {
                    backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-button': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Image
                src="/assets/images/hero01.png"
                alt="Altus Residence"
                width={800}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/exteriores/ext01.png"
                alt="Altus Residence"
                width={750}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/exteriores/ext02.png"
                alt="Altus Residence"
                width={800}
                height={600}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/renders/re10.png"
                alt="Altus Residence"
                width={700}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/exteriores/ext04.png"
                alt="Altus Residence"
                width={500}
                height={600}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
                        <Image
                src="/assets/renders/re01.png"
                alt="Altus Residence"
                width={800}
                height={600}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/areas_comunes/02.png"
                alt="Altus Residence"
                width={725}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/apts/a/A01.png"
                alt="Altus Residence"
                width={600}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/apts/a/A03.png"
                alt="Altus Residence"
                width={800}
                height={600}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/areas_comunes/07.png"
                alt="Altus Residence"
                width={600}
                height={500}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />
            <Image
                src="/assets/areas_comunes/11.png"
                alt="Altus Residence"
                width={800}
                height={700}
                objectFit="contain"
                style={{ borderRadius: '2px' }}
            />



        </Box>
        {/* end images */}


        </Box>
    );
}
