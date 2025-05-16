import { Box, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';


export default function Inicio() {
  return (
    <Box sx={{ padding: 0, margin: 0 }}>

      {/* hero section  */}
      <Box 
        sx={{
          width: '100%',
          height: {xs: "800px", md: '100vh'},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'flex-end',
          backgroundColor: '#f0f0f0',
          backgroundImage: {xs: 'url(https://res.cloudinary.com/dbchxgv2n/image/upload/v1747427581/hero-mobile_cbcl7l.png)', md: 'url(https://res.cloudinary.com/dbchxgv2n/image/upload/v1747239186/Artboard1_yskeso.png)'},
          backgroundSize: {xs: 'cover', md: '100% 100%'},
          backgroundPosition: 'center', 
          color: 'white',
          textAlign: 'center',
          padding: 0,
          margin: 0,
          px: 4,
          position: 'relative',
        }}>


          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: {sx: 'center', md: 'flex-end'},
            gap: 2,
            width: '100%',
            height: '100%',
            backgroundColor: 'none',
            position: 'absolute',
            top: 100, 
            left: 0,
            pr: {xs: 0, md:4},
          }}>

            <Divider
              sx={{
                display: {xs: 'none', md: 'block'},
                backgroundColor: '#fff',
                height: '1px',
                width: '60px',
                mt: {xs: 20, md: 50}
              }}
            />
            <Typography
              sx={{
                fontSize: '1em',
                fontFamily: 'Inter, sans-serif',
                color: '#fff',
                fontWeight: 200,
                width: {sx: '100%', md: "700px"},
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                textAlign: { xs: 'center', md: 'right' },
                mt: {xs: 34, md: 2},
                mb: 2,
                px: { xs: 4, md: 0 },
              }}
            >
              ALTUS simboliza la grandeza y la elevación, reflejando perfectamente la posición de su ubicación en Los Cerros de Gurabo, donde se redefine la vida exclusiva y prestigiosa.
            </Typography>


        {/* logos  */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            gap: 5,
          }}
        >
          <Box
            component={'img'}
            src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747248650/altus-logo_qpsbia.png"
            alt="Logo"
            sx={{
              width: {xs: '150px', md:'200px'},
              height: {xs: '50px', md: '100px'},
              mixBlendMode: 'exclusion',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // border: '1px solid red',
              mt: {xs: 1, md: 2},
            }}
          />
          <Box
            component={'img'}
            src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747248650/vict-logo_soadbi.png"
            alt="Logo"
            sx={{
              width: {xs: '100px', md: '150px'},
              height: {xs: '50px', md: '100px'},
              mixBlendMode: 'exclusion',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // border: '1px solid yellow',
            }}
          />
        </Box>
          </Box>

          

      </Box>

      {/* second section  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 0 },
        }}
      >
        {/* Image section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%', md: '60%' },
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747239025/bird-view_x11m1t.png"
            alt="Vista aérea de Altus"
            sx={{
              width: '100%',
              height: { xs: '300px', md: '600px' },
              borderRadius: { md: 1 },
              objectFit: 'cover',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: '12px',
              textAlign: 'center',
              fontWeight: 300,
              color: '#fff',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Cerros de Gurabo, Santiago de Los Caballeros, República Dominicana.
          </Typography>
        </Box>

        {/* Text section */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            pl: { md: 8 },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              textTransform: 'uppercase',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            Altus Residence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: '16px',
              fontWeight: 200,
            }}
          >
            Elevando la vida a nuevas <strong>altu</strong>ra<strong>s</strong>, donde la exclusividad y el lujo se encuentran en perfecta armonía.
          </Typography>

          <Link href="/galeria" passHref>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#000',
                color: '#fff',
                fontSize: {xs: '12px', md: '16px'},
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              Ver Galería
            </Button>
          </Link>
        </Box>
      </Box>


      {/* third section  */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          height: {xs: "750px", md: '100vh'},
          px: 2,
          py: { xs: 4, md: 0 },
          backgroundColor: '#000',
          color: 'white',
          gap: 4,
        }}
      >
        {/* Left side */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            pl: { md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        > 
          <Box
            sx={{
              width: '300px',
              height: '150px',
              background: 'url(https://res.cloudinary.com/dbchxgv2n/image/upload/v1747248650/vict-logo_soadbi.png)',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: {xs: 'none', md: 'block'}
            }}
          >
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              color: '#fff',
              px: {xs: 2}
            }}
          >
            Nuestra misión es crear espacios que inspiren, que conecten el presente pero sobre todo que miren con firmeza hacia el futuro.
          </Typography>

          <Link href="/equipo" passHref>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#fff',
                color: '#000',
                fontSize: {xs: '12px', md: '16px'},
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              Conoce al equipo
            </Button>
          </Link>
        </Box>

        {/* Right side */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747249331/02_yervjy.jpg"
            alt="Equipo Altus"
            sx={{
              width: { xs: '100%', sm: '80%', md: '600px' },
              height: { xs: '500px', md: '800px' },
              borderRadius: 1,
              objectFit: 'cover',
              objectPosition: {xs: 'top', md: 'center'},
            }}
          />

          <Typography
            variant="body1"
            sx={{
              display: {xs: 'none'},
              width: { xs: '90%', md: '75%' },
              mb: 2,
              fontSize: '14px',
              textAlign: 'center',
              fontWeight: 300,
              color: '#ccc',
            }}
          >
            <em>Con Altus, estamos escribiendo un nuevo capítulo para la ciudad de Santiago.</em>
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}
