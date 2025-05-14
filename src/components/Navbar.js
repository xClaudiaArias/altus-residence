'use client'; 

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from 'next/navigation';




export default function Navbar () {
    const pathname = usePathname();
    const isInicio = pathname === '/'; 
    const isAcerca = pathname === '/acercade';
    const isGaleria = pathname === '/galeria';
    const isEquipo = pathname === '/equipo';
    const isContacto = pathname === '/contacto';

    return (

        <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow: "none", py: 2, px: 2 }}>
            <Toolbar>
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
                <Link href="/" style={{ color: isAcerca ? '#000' : '#fff', textDecoration: "none", letterSpacing: 2}}>
                    ALTUS
                </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button color="inherit" sx={{ ml: 8, px: 0}}>
                    <Link href="/" style={{ textDecoration: 'none', color: isAcerca ? '#000' : '#fff', fontWeight: isInicio ? 'bold' : 'normal', letterSpacing: 2 }}>
                        Inicio
                    </Link>
                </Button>
                <Button color="inherit" sx={{ ml: 8, px: 0}}>
                    <Link href="/acercade" style={{ textDecoration: 'none', color: isAcerca ? '#000' : '#fff', fontWeight: isAcerca ? 'bold' : 'normal', letterSpacing: 2  }}>
                        Acerca de
                    </Link>
                </Button>
                <Button color="inherit" sx={{ ml: 8, px: 0}}>
                    <Link href="/galeria" style={{ textDecoration: 'none', color: isAcerca ? '#000' : '#fff', fontWeight: isGaleria ? 'bold' : 'normal', letterSpacing: 2, mixBlendMode: isGaleria ? 'exclusion' : 'normal'  }}>
                        Galería
                    </Link>
                </Button>
                <Button color="inherit" sx={{ ml: 8, px: 0}}>
                    <Link href="/equipo" style={{ textDecoration: 'none', color: isAcerca ? '#000' : '#fff', fontWeight: isEquipo ? 'bold' : 'normal', letterSpacing: 2  }}>
                        Equipo
                    </Link>
                </Button>
                <Button color="inherit" sx={{ ml: 8, px: 0}}>
                    <Link href="/contacto" style={{ textDecoration: 'none', color: isAcerca ? '#000' : '#fff', fontWeight: isContacto ? 'bold' : 'normal', letterSpacing: 2  }}>
                        Contacto
                    </Link>
                </Button>
            </Box>

            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "flex", md: "none" } }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    );
}