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
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084162/A01_vsqhw4.png',
    },
    {
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084166/A02_lalidi.png',
    },
    {
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084166/A03_frsku5.png',
    },
    {
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084166/A05_osshtc.png',
    },
    {
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084167/A06_bg6jkz.png',
    },
    {
        label: 'Apartamentos A',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084166/A07_lr4vnf.png',
    },
    {
        label: 'Apartamentos B',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084216/B01_uwer8b.png',
    },
    {
        label: 'Apartamentos B',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084215/B02_ovpzk7.png',
    },
    {
        label: 'Apartamentos B',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084215/B03_n2vxvl.png',
    },
    {
        label: 'Apartamentos B',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084216/B04_ihr2hc.png',
    },
    {
        label: 'Apartamentos B',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084216/B05_zszsxn.png',
    },
    {
        label: 'Apartamentos C',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084236/C01_sv9j16.png',
    },
    {
        label: 'Apartamentos C',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084238/C02_yqw10o.png',
    },
    {
        label: 'Apartamentos C',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084237/C03_vilp5m.png',
    },
    {
        label: 'Apartamentos C',
        imgPath: 'https://res.cloudinary.com/dbchxgv2n/image/upload/v1747084237/C04_dfhugn.png',
    },
    ]

    export default function Slideshow() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        onSelect();
    }, [embla, onSelect]);

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
            overflow: 'hidden',
            }}
        >
            <Box
            sx={{
                display: 'flex',
                height: '100%',
            }}
            >
            {images.map((image, idx) => (
                <Box
                key={idx}
                sx={{
                    flex: '0 0 100%',
                    height: '100%',
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
                    objectFit: 'fill'
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
            display: 'flex',
            justifyContent: 'space-between',
            px: 6,
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
            bottom: 24,
            left: 24,
            color: 'white',
            padding: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 2,
            maxWidth: '80%',

            }}
        >
            <Link href="/galeria">
            <Typography variant="body2" sx={{color: "#fff", textTransform: 'uppercase', fontWeight: '100', display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'underline'}}>
                <ArrowBackIcon />
                Volver al menú anterior
                </Typography>
            </Link>
        </Box>

        {/* img counter */}
        <Box
            sx={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            color: 'white',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
            px: 4,
            textAlign: 'right'
            }}
        >
            <Typography
            sx={{
                fontSize: '16px',
                fontWeight: '100',
                textTransform: 'uppercase'
            }}
            >
            {images[selectedIndex].label}
            </Typography>
            <Typography
            sx={{
                fontSize: '30px',
                fontWeight: '100'
            }}
            >
            {selectedIndex + 1}/{images.length}
            </Typography>
        </Box>
        </Box>
    );
}
