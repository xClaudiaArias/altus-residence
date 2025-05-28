'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
    Box,
    IconButton,
    Typography,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const images = [
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238800/re01_xu86tj.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238800/re02_ocsbvr.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238800/re03_bpaemb.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238800/re04_nglzmb.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238799/re05_xnpf4u.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238798/re06_wb77lo.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238805/re07_wkmtg3.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238805/re08_z0zajj.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238806/re09_mhnyin.png',
    },
    {
        label: 'Renders',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747238807/re10_rfqu7a.png',
    },
]

    export default function Slideshow() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true, draggable: true  });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

   useEffect(() => {
        if (!embla) return;

        const updateIndex = () => {
            setSelectedIndex(embla.selectedScrollSnap());
        };

        embla.on('select', updateIndex);
        embla.on('reInit', updateIndex);
        updateIndex();

        console.log(selectedIndex, ' selected index')

        return () => {
            embla.off('select', updateIndex);
            embla.off('reInit', updateIndex);
        };
    }, [embla]);

    useEffect(() => {
        const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            scrollPrev();
        } else if (event.key === 'ArrowRight') {
            scrollNext();
        }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [scrollPrev, scrollNext]);
    
    

    return (
        <Box
        sx={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: "white"
        }}
        >
        {/* slideshow */}
        <Box
            ref={emblaRef}
            sx={{
            height: '100%',
            width: '100%',
            overflowX: { xs: 'auto', md: 'hidden' },
            overflowY: 'hidden'
            }}
        >
            <Box
            sx={{
                display: 'flex',
                height: '100%',
                minWidth: "100%",
                scrollSnapType: 'x mandatory'
            }}
            >
            {images.map((image, idx) => (
                <Box
                key={idx}
                sx={{
                    flex: '0 0 100%',
                    height: {xs: '100vh', md: '100%'},
                    position: 'relative',
                    backgroundColor: "#fff"
                }}
                >
                <Box
                    component="img"
                    src={image.imgPath}
                    alt={image.label}
                    sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: {xs: 'cover', md: 'fill'}
                    }}
                />
                </Box>
            ))}
            </Box>
        </Box>

        {/* left and right arws */}
        <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: {xs: 'none', md: 'flex'},
            justifyContent: 'space-between',
            px: {xs: 0, md: 6},
            zIndex: 2,
            }}
        >
            <IconButton onClick={scrollPrev} 
            sx={{ 
            color: 'white', 
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
            mixBlendMode: 'exclusion',
            '&:focus-visible': {
                outline: '2px solid white',
                outlineOffset: '2px',
            }
            }}>
            <ArrowBackIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={scrollNext} 
            sx={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.36)',
                mixBlendMode: 'exclusion',
                '&:focus-visible': {
                outline: '2px solid white',
                outlineOffset: '2px',
                },
            }}>
            <ArrowForwardIcon fontSize="large"/>
            </IconButton>
        </Box>

        {/* info box */}
        <Box
            sx={{
            position: 'absolute',
            bottom: {xs: 80, md: 40},
            left: 24,
            color: 'white',
            padding: {xs: 1, md: 2},
            backgroundColor: {xs: 'rgba(0, 0, 0, 0.29)', md: 'rgba(0, 0, 0, 0.5)'},
            borderRadius: 2,
            maxWidth: '80%',

            }}
        >
            <Link href="/galeria">
            <Typography variant="body2" sx={{color: "#fff", textTransform: 'uppercase', fontWeight: '100', display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'underline', fontSize: {xs: '10px', md: '16px'}}}>
                <ArrowBackIcon />
                Volver al menú anterior
                </Typography>
            </Link>
        </Box>

        {/* img counter */}
        <Box
            sx={{
            position: 'absolute',
            bottom: {xs: 80, md: 40},
            right: 24,
            color: 'white',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
            px: {xs: 2, md: 4},
            textAlign: 'right'
            }}
        >
            <Typography
            sx={{
                fontSize: {xs: '10px', md:'16px'},
                fontWeight: '100',
                textTransform: 'uppercase'
            }}
            >
            {images[selectedIndex].label}
            </Typography>
            <Typography
            sx={{
                fontSize: {xs: '14px', md:'30px'},
                fontWeight: '100'
            }}
            >
            {selectedIndex + 1}/{images.length}
            </Typography>
        </Box>
        </Box>
    );
}