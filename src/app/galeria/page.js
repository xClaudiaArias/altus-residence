'use client';
import React, { useRef, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';



export default function Galeria() {
    // tracking which menu items is beiing hovered 
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredParent, setHoveredParent] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);



    const links = [
        { 
            label: 'Elevaciones', 
            href: '/galeria/elevaciones',
            image: '/assets/images/EL-derecha-hero.png',
            title: 'Elevaciones',
            description: 'Representaciones en alzado que detallan la volumetría y tratamiento de fachadas.'
        },
        { 
            label: 'Exteriores', 
            href: '/galeria/exteriores',
            image: '/assets/images/ext02.png',
            title: 'Exteriores',
            description: 'Vistas exteriores que integran diseño urbano con elementos naturales.'
        },
        { 
            label: 'Interiores', 
            href: '/galeria/Interiores',
            image: '/assets/images/B04.png',
            title: 'Interiores',
            description: 'Unidades residenciales optimizadas en distribución y aprovechamiento del espacio.',
            children: [
                {
                    label: 'Apartamentos',
                    href: '/galeria/apartamentos',
                    image: '/assets/images/apts-hero.png',
                    title: 'Apartamentos',
                    description: 'Departamentos modernos, funcionales y llenos de luz natural.'
                },
                {
                    label: 'Áreas Comunes',
                    href: '/galeria/areas-comunes',
                    image: '/assets/images/areas-hero.png',
                    title: 'Áreas Comunes',
                    description: 'Ambientes interiores que combinan confort y diseño.'
                }
            ]
        },
        { 
            label: 'Plan Arquitectónico', 
            href: '/galeria/plan-arquitectonico',
            image: '/assets/images/PA-nivel01.png',
            title: 'Plan Arquitectónico',
            description: 'Plano maestro que ilustra zonificación, accesos y articulación del conjunto.'
        },
        { 
            label: 'Plantas', 
            href: '/galeria/plantas',
            image: '/assets/images/pa.png',
            title: 'Plantas',
            description: 'Plantas arquitectónicas detalladas con escalas y distribuciones por nivel.'
        },
        { 
            label: 'Renders', 
            href: '/galeria/renders',
            image: '/assets/images/re10.png',
            title: 'Renders',
            description: 'Modelos 3D fotorrealistas generados para validar la propuesta estética.'
        },
        { 
            label: 'Videos', 
            href: '/galeria/videos',
            image: '/assets/images/03.png',
            title: 'Videos',
            description: 'Material audiovisual que complementa la comprensión espacial del proyecto.'
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
                    top: '70%',
                    left: '5%',
                    width: '400px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    padding: 2,
                    zIndex: 10,
                    textAlign: 'left'
                    }}
                >
                    <Typography variant="h6" sx={{ textTransform: 'uppercase', fontSize: '15px', fontWeight: 300, mb: 1 }}>
                    {hoveredItem.title}
                    </Typography>
                    <Divider
                        sx={{
                            backgroundColor: '#fff',
                            height: '1px',
                            width: '20px',
                        }}
                    />
                    <Typography variant="body2" sx={{ fontSize: '13px', fontWeight: '100', mt: 2}}>
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
        {links.map((item) => {
            const isInteriores = item.label === 'Interiores';
            const isOpen = hoveredParent === item.label;

            return (
            <React.Fragment key={item.label}>
                <ListItem
                disablePadding
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                >
                {isInteriores ? (
                    <Box
                    onClick={() => setDropdownOpen((prev) => !prev)}
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
                    {dropdownOpen ? (
                        <ArrowDownwardIcon
                        className="arrow"
                        fontSize="13px"
                        sx={{ transition: 'transform 0.3s ease' }}
                        />
                    ) : (
                        <ArrowForwardIcon
                        className="arrow"
                        fontSize="13px"
                        sx={{ transition: 'transform 0.3s ease' }}
                        />
                    )}
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
                ) : (
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
                        <ArrowForwardIcon
                        className="arrow"
                        fontSize="13px"
                        sx={{ transition: 'transform 0.3s ease' }}
                        />
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
                )}
                </ListItem>

                {/* Dropdown for Interiores */}
                {item.label === 'Interiores' && (
                <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                    {item.children.map((child) => (
                    <ListItem
                        key={child.label}
                        disablePadding
                        onMouseEnter={() => setHoveredItem(child)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Link href={child.href} passHref style={{ textDecoration: 'none' }}>
                        <Box
                            sx={{
                            width: '300px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            // border: '1px, solid red',
                            cursor: 'pointer',
                            textAlign: 'right',
                            fontSize: '13px',
                            py: 1,
                            borderBottom: '1px solid white',
                            pl: 2,
                            transition: 'all 0.3s ease',
                            '&:hover .arrow': {
                                transform: 'translateX(4px)',
                            },
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            }}
                        >
                            <ArrowForwardIcon className="arrow" fontSize="13px" sx={{ transition: 'transform 0.3s ease' }} />
                            <Typography
                            sx={{
                                fontWeight: 100,
                                fontSize: '11px',
                                textTransform: 'uppercase',
                            }}
                            >
                            {child.label}
                            </Typography>
                        </Box>
                        </Link>
                    </ListItem>
                    ))}
                </Collapse>
                )}
            </React.Fragment>
            );
        })}
        </List>



        </Box>
                {/* Scroll Button */}
                <IconButton onClick={scrollDown} 
                    sx={{
                        fontSize: '13px',
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
