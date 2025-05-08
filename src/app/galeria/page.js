'use client';
import React, { useRef } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Galeria() {
    const links = [
        { label: 'Apartamentos', href: '/galeria/apartamentos' },
        { label: 'Areas-comunes', href: '/galeria/areas-comunes' },
        { label: 'Concepto', href: '/galeria/concepto' },
        { label: 'Elevaciones', href: '/galeria/elevaciones' },
        { label: 'Equipo', href: '/galeria/equipo' },
        { label: 'Exteriores', href: '/galeria/exteriores' },
        { label: 'Interiores', href: '/galeria/interiores' },
        { label: 'Lugar', href: '/galeria/lugar' },
        { label: 'Plan Arquitectónico', href: '/galeria/plan-arquitectonico' },
        { label: 'Plantas', href: '/galeria/plantas' },
        { label: 'Renders', href: '/galeria/renders' },
        { label: 'Videos', href: '/galeria/videos' }
    ];

    const listRef = useRef(null);

    const handleScroll = () => {
        if (listRef.current) {
        listRef.current.scrollBy({ top: 60, behavior: 'smooth' }); // scroll down by ~1 item height
        }
    };

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            // justifyContent: 'center',
            backgroundImage: 'url(/assets/exteriores/extn02.png)',
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

        {/* Scrollable List Container */}
        <Box
            ref={listRef}
            sx={{
            height: 220,
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            width: '300px',
            }}
        >
            <List sx={{ padding: 0 }}>
            {links.map(({ label, href }) => (
                <ListItem key={label} disablePadding>
                    <Link
                        href={href}
                        passHref
                        style={{ textDecoration: 'none', color: 'white', width: '300px'}}
                    >
                        
                        <ListItemText
                        primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, textTransform: 'uppercase', fontWeight: 100, fontSize: '13px' }}>
                            <ArrowForwardIcon fontSize="small" />
                            {label}
                        </Box>
                        }
                        sx={{
                            cursor: 'pointer',
                            borderBottom: '1px solid white',
                            pb: 2,
                        '&:hover': {
                            textDecoration: 'underline',
                            },
                            textAlign: 'right',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            py: 1,
                        }}

                        />
                    </Link>
                </ListItem>
            ))}
        </List>
    </Box>

        {/* Scroll Button */}
        <IconButton onClick={handleScroll} sx={{ color: 'white', mt: 1 }}>
            <ArrowDownwardIcon />
        </IconButton>
        </Box>
    );
}
