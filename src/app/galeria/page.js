'use client';
import React, { useRef, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { red } from '@mui/material/colors';


export default function Galeria() {
    // tracking which menu items is beiing hovered 
    const [hoveredItem, setHoveredItem] = useState(null);


    const links = [
        { 
            label: 'Apartamentos', 
            href: '/galeria/apartamentos',
            image: '/assets/exteriores/extn02.png',
            title: 'Apartamentos',
            description: ''
        },
        { 
            label: 'Areas comunes', 
            href: '/galeria/areas-comunes',
            image: '/assets/areas_comunes/04.png',
            title: 'Area Comunes',
            description: 'Ambientes interiores que combinan confort y diseño.'
        },
        { 
            label: 'Elevaciones', 
            href: '/galeria/elevaciones',
            image: '/assets/elevaciones/EL-derecha-hero.png',
            title: 'Elevaciones',
            description: ''
        },
        { 
            label: 'Exteriores', 
            href: '/galeria/exteriores',
            image: '/assets/exteriores/ext02.png',
            title: 'Exteriores',
            description: 'Descubre los exteriores modernos y elegantes del complejo.'
        },
        { 
            label: 'Plan Arquitectónico', 
            href: '/galeria/plan-arquitectonico',
            image: '/assets/plan-arq/PA-nivel06.png',
            title: 'Plan Arquitectónico',
            description: ''
        },
        { 
            label: 'Plantas', 
            href: '/galeria/plantas',
            image: '/assets/plantas/apta.png',
            title: 'Plantas',
            description: ''
        },
        { 
            label: 'Renders', 
            href: '/galeria/renders',
            image: '/assets/renders/re10.png',
            title: '',
            description: ''
        },
        { 
            label: 'Videos', 
            href: '/galeria/videos',
            image: '/assets/videos/Altus Residence.mp4',
            title: '',
            description: ''
        }
    ];

    const listRef = useRef(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
        if (listRef.current) {
            const scrollTop = listRef.current.scrollTop;
            setShowScrollTop(scrollTop > 20); // set by pixels of scrolls
        }
    };
    
    const scrollDown = () => {
        listRef.current?.scrollBy({ top: 60, behavior: 'smooth' });
    };
    
    const scrollUp = () => {
        listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            // dynamically change our background
            backgroundImage: `url(${hoveredItem?.image || '/assets/exteriores/extn02.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#f0f0f0',
            width: '100%',
            height: '100vh',
            pr: 4,
            textAlign: 'right',
            pt: 20
        }}
        >
            {/* ----- */}
            {hoveredItem && (
                <Box
                    sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '5%',
                    width: '300px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: 2,
                    borderRadius: '8px',
                    zIndex: 10,
                    }}
                >
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                    {hoveredItem.title}
                    </Typography>
                    <Typography variant="body2">
                    {hoveredItem.description}
                    </Typography>
                </Box>
            )}


            {/* ----- */}
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <Typography
                variant='h1'
                sx={{
                fontWeight: 400,
                mb: 2,
                textAlign: 'right',
                color: 'white',
                fontSize: '1rem',
                textTransform: 'uppercase',
                }}
            >
                Menu de Galeria
            </Typography>

            <Divider sx={{ backgroundColor: '#fff', height: '1px', width: '300px', mb: 2 }} />

        <Box
            sx={{
                position: 'relative',
                height: '24px',
                display: 'flex',
                alignItems: 'center'
            }}>
            {showScrollTop && (
                    <IconButton
                        onClick={scrollUp}
                        sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.6)',
                        },
                        }}
                    >
                        <ArrowUpwardIcon />
                    </IconButton>
                    
            )}
        </Box>
                
        {/* Scrollable List Container */}
        <Box
            ref={listRef}
            onScroll={handleScroll}
            sx={{
            height: 220,
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            width: '300px',
            position: 'relative',
            }}
        >

            <List sx={{ padding: 0 }}>
            {links.map((item) => (
                <ListItem 
                    key={item.label} 
                    disablePadding
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link href={item.href} passHref style={{ textDecoration: 'none' }}>
                        <Box
                        sx={{
                            width: '300px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 1,
                            cursor: 'pointer',
                            textAlign: 'right',
                            py: 1,
                            borderBottom: '1px solid white',
                            transition: 'all 0.3s ease',
                            '&:hover .arrow': {
                            transform: 'translateX(4px)',
                            },
                            '&:hover': {
                            textDecoration: 'underline',
                            },
                        }}
                        >
                        <ArrowForwardIcon className="arrow" fontSize="small" sx={{ transition: 'transform 0.3s ease' }} />
                        <Typography
                            sx={{
                            fontWeight: 100,
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            }}
                        >
                            {item.label}
                        </Typography>
                        </Box>
                    </Link>
                    </ListItem>

                    

            ))}
        </List>
        </Box>
                {/* Scroll Button */}
                <IconButton onClick={scrollDown} 
                    sx={{
                        fontSize: 'small',
                        color: 'white', 
                        mt: 2,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.6)',
                        },
                    }}>
                    <ArrowDownwardIcon />
                </IconButton>
        </Box>
    </Box>
    );
}
