import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Toolbar, AppBar, Container, Typography, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import { Link } from 'react-scroll';
import { ElevationScroll } from "./Scrolls";


const sections = [
    { name: "A propos", link: "apropos" },
    { name: "Services", link: "services" },
    { name: "Pricing", link: "pricing" },
    { name: "Team", link: "team" },
];


const Navbar = (props: any) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Items for desktop */}
                        <LayersTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '0.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            VEP
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }} >
                            {sections.map((page) => (
                                <Link
                                    key={page.name}
                                    smooth spy
                                    activeClass="nav-item"
                                    to={page.link}
                                    duration={400}
                                    offset={-90}
                                    style={{ textDecoration: "none", justifyContent: "center" }}>
                                    <Box
                                        component="h4"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', textTransform: 'none', fontWeight: "normal", fontSize: "0.97rem", pr: 3, cursor: "pointer" }}
                                    >
                                        {page.name}
                                    </Box>
                                </Link>
                            ))}
                        </Box>

                        {/* Items for mobile */}
                        <LayersTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '0.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            VEP
                        </Typography>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {sections.map((page) => (
                                    <Link
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        smooth spy
                                        to={page.link}
                                        duration={400}
                                        offset={-90}
                                    >
                                        <MenuItem >
                                            <Typography textAlign="center" sx={{ fontSize: 15 }}>{page.name}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        {/* Last item, nous contacter */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Link to="footer" smooth spy duration={400} offset={-90} style={{ textDecoration: "none" }}>
                                <Button className={"border-white radius-zero"} variant="outlined"
                                    sx={{
                                        color: 'white',
                                        textTransform: 'none',
                                        fontFamily: "product",
                                        fontSize: "16px",
                                        width: "170px",
                                    }}
                                    disableElevation
                                >
                                    Nous contacter
                                </Button>
                            </Link>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};


export default Navbar;