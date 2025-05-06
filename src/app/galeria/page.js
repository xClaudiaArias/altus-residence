'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Link from 'next/link';



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
    ]
    return (
        <Box
            sx={{
                p: 2,
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}
        >
            <Typography variant='h1' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'right' }}>Galeria</Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                {links.map(({label, href}) => {
                    console.log(label)
                    return (
                        <ListItem key={label} disablePadding>
                            <Link href={href} passHref style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemText 
                                    primary={label} 
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                        textAlign: 'right', 
                                        fontSize: '1.5rem', 
                                        fontWeight: 'bold' 
                                    }} 
                                />
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}