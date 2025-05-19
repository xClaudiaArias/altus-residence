'use client';

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isInicio = pathname === '/'; 
    const isAcerca = pathname === '/acercade';
    const isGaleria = pathname === '/galeria';
    const isEquipo = pathname === '/equipo';
    const isContacto = pathname === '/contacto';

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setMobileOpen(open);
    };

    const navItems = [
        { label: "Inicio", path: "/" },
        { label: "Acerca de", path: "/acercade" },
        { label: "Galería", path: "/galeria" },
        { label: "Equipo", path: "/equipo" },
        { label: "Contacto", path: "/contacto" },
    ];

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 5); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getFontColor = () => {
        if (isAcerca) {
            return scrolled ? '#fff' : '#000'; 
        }
        return '#fff'; // default on other pages
    };



    return (
        <>
        <AppBar position="fixed" sx={{
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
            transition: 'background-color 0.3s ease',
            boxShadow: "none", 
            py: 2, 
            px: 2 }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    <Link href="/" style={{ color: getFontColor(), textDecoration: "none", letterSpacing: 2 }}>
                    ALTUS
                    </Link>
                </Typography>

                {/* desktop Nav */}
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    {navItems.map(({ label, path }) => (
                    <Button key={label} color="inherit" sx={{ ml: 4, px: 0 }}>
                        <Link
                        href={path}
                        style={{
                            textDecoration: 'none',
                            color: getFontColor(),
                            fontWeight: pathname === path ? 'bold' : 'normal',
                            letterSpacing: 2,
                        }}
                        >
                        {label}
                        </Link>
                    </Button>
                    ))}
                </Box>

                {/* mobile Mmnu Icon */}
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: "flex", md: "none", color: isAcerca ? '#000' : '#fff' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

        {/* mobile drawer */}
        <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            <Box
            sx={{ width: 250, p: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            >
                <IconButton sx={{ mb: 2 }}>
                    <CloseIcon />
                </IconButton>
                <List>
                    {navItems.map(({ label, path }) => (
                    <ListItem button key={label} component={Link} href={path}>
                        <ListItemText
                            primary={label}
                            sx={{
                                color: '#000',
                            }}
                        />
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
        </>
    );
}
