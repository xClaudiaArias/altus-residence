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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'flex-end',
          backgroundColor: '#f0f0f0',
          backgroundImage: 'url(https://res.cloudinary.com/dbchxgv2n/image/upload/v1747239186/Artboard1_yskeso.png)',
          backgroundSize: '100% 100%',
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
            alignItems: 'flex-end',
            gap: 2,
            width: '100%',
            height: '100%',
            backgroundColor: 'none',
            position: 'absolute',
            top: 100, 
            left: 0,
            pr: 4,
          }}>

          <Divider
            sx={{
              backgroundColor: '#fff',
              height: '1px',
              width: '60px',
              mt: 40
            }}
          />
          <Typography sx={{
            fontSize: '1em',
            fontFamily: 'Inter, san-serif', 
            color: '#fff',
            fontWeight: 100,
            // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            textAlign: 'right',
            mt: 2,
          }}>
            ALTUS simboliza la grandeza y la elevacion, reflejando perfectamente
            <br/>
            la posicion de su ubicación and Los Cerros de Gurabo, donde se
            <br/>
            redefine la vida exclusiva y prestigiosa.
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
            src="/assets/logos/altus-logo.png"
            alt="Logo"
            sx={{
              width: '200px',
              height: '100px',
              mixBlendMode: 'exclusion',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // border: '1px solid red',
              mt: 2,
            }}
          />
          <Box
            component={'img'}
            src="/assets/logos/vict-logo.png"
            alt="Logo"
            sx={{
              width: '150px',
              height: '100px',
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
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          px: 4
        }}
      >

          {/* my image  */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,  
            width: '70%'   
          }}>
            <Box
            component={'img'}
            src="https://res.cloudinary.com/dbchxgv2n/image/upload/v1747239025/bird-view_x11m1t.png"
            alt="Logo"
            sx={{
              width: '100%',
              height: '600px',
              borderRadius: 1,
            }}/>
            <Typography variant="body1" sx={{ width: '100%', mb: 2, fontSize: '12px', textAlign: 'center', fontWeight: 300 }}>
              Cerros de Gurabo, Santiago de Los Caballeros, Republica Dominicana.
            </Typography>
          </Box>
        {/* right side  */}
        <Box sx={{ width: '50%', pl: 8 }}>
          <Typography variant="h6" sx={{ mb: 2, textTransform: 'uppercase', fontSize: '18px', fontWeight: 700 }}>
            Altus Residence
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '16px', fontWeight: 200 }}>
            Elevando la vida a nuevas <strong>altu</strong>ra<strong>s</strong>
            <br></br>
            donde la exclusividad y el lujo se encuentran en perfecta armonía.
          </Typography>
          <Link href="/galeria">
            <Button variant="contained" 
            sx={{
                mt: 2, 
                backgroundColor: '#000', 
                color: '#fff', 
                fontSize: '16px', 
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#333',
                  cursor: 'pointer',
                  color: '#fff',
                },
                
              }}>
              Ver Galeria
            </Button>
          </Link>
        </Box>

      </Box>

      {/* third section  */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          px: 2,
          backgroundColor: '#000',
          color: "white"
        }}
      >
        {/* left side  */}
        <Box sx={{ width: '50%', pl: 4, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/assets/logos/vict-logo.png"
            alt="Logo"
            width={400}
            height={200}
            style={{
              borderRadius: 1,
              objectFit: 'contain',
              objectPosition: 'center',
              padding: 0,
            }}
          />

          <Typography variant="body1" sx={{ mb: 2, fontSize: '12px', fontWeight: 400, color: '#fff', textAlign: 'center' }}>
            Nuestra misión es crear espacios que inpiren, que conecten el presente pero sobre todo que miren con firmeza hacia el futuro.
          </Typography>
          <Link href="/equipo">
            <Button variant="contained" 
            sx={{
                mt: 2, 
                backgroundColor: '#fff', 
                color: '#000', 
                fontSize: '11px', 
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  cursor: 'pointer',
                  color: '#000',
                },
                
              }}>
              Conoce al equipo
            </Button>
          </Link>
        </Box>

        {/* right side  */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,  
          width: '70%'   
        }}>
          <Box
            component={'img'}
            src="/assets/headshots/02.jpg"
            alt="Logo"
            sx={{
              width: '100%',
              height: '500px',
              borderRadius: 1, 
              objectFit: 'contain',
              objectPosition: 'top',
          }}/>
          <Typography variant="body1" sx={{ width: '75%', mb: 2, fontSize: '10px', textAlign: 'center', fontWeight: 300 }}>
            <em>Con Altus, estamos escribiendo un nuevo capitulo para la ciudad de Santiago</em>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}
