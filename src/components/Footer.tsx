import { Container, Stack, Grid, Typography, Fab, Divider, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import hero from "../assets/images/hero.jpg";
import LinkIcon from '@mui/icons-material/Link';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import zavoka from "../assets/images/zavoka.svg";


const Footer = () => {
    return (
        <Container maxWidth={false} id={"footer"}
            style={{
                width: "100%",
                background: `url(${hero}) no-repeat center center fixed #000`,
                backgroundSize: "cover",
                padding: 0
            }}
        >
            <Stack bgcolor={"#000000e8"} sx={{ padding: "50px 2% 50px 2%", backdropFilter: "blur(80px) sepia(40%)" }}>
                <Grid container rowSpacing={4}>
                    <Grid item xs={12} md={4} justifyContent="start">
                        <Stack alignItems="center">
                            <Stack direction={"row"} alignItems={"center"} mb={1.5}>
                                <Box component="img" src={zavoka} sx={{ mr: 1 }} alt="Hero" width={30} />
                                <Typography variant="h6" noWrap component="a" href="/"
                                    sx={{ mr: 2, display: "flex", fontWeight: 700, letterSpacing: '.1rem', color: 'white', textDecoration: 'none' }}
                                >
                                    Zavoka
                                </Typography>
                            </Stack>
                            <Typography className={"text-white"} variant='body1' sx={{ lineHeight: 1.5, textAlign: "center", width: "70%" }}>
                                La plateforme 3D interactive qui ajoute une dimension supplémentaire à vos événements.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} justifyContent="start">
                        <Stack alignItems="center">
                            <Stack direction={"row"} alignItems={"center"} mb={1.5}>
                                <LinkIcon sx={{ display: "flex", mr: 1, color: "white" }} />
                                <Typography variant="h6" noWrap component="a" href="/"
                                    sx={{ mr: 2, display: "flex", fontWeight: 700, letterSpacing: '.1rem', color: 'white', textDecoration: 'none' }}
                                >
                                    Réseaux sociaux
                                </Typography>
                            </Stack>
                            <Stack direction={"row"}>
                                <Stack px={1} className="social-icon" onClick={() => { window.open("https://www.linkedin.com/company/iteamscommunity", '_blank') }}>
                                    <Fab size="small" sx={{ backgroundColor: "#0075B5", color: "white" }} className="sc-linkedin">
                                        <LinkedInIcon />
                                    </Fab>
                                </Stack>
                                <Stack px={1} className="social-icon" onClick={() => { window.open("https://web.facebook.com/zavoka.plateform", '_blank') }} >
                                    <Fab size="small" sx={{ backgroundColor: "#1778F2", color: "white" }} className="sc-facebook">
                                        <FacebookIcon />
                                    </Fab>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack alignItems="center">
                            <Stack direction={"row"} alignItems={"center"} mb={1.5}>
                                <ContactSupportIcon sx={{ display: "flex", mr: 1, color: "white" }} />
                                <Typography variant="h6" noWrap component="a" href="/"
                                    sx={{ mr: 2, display: "flex", fontWeight: 700, letterSpacing: '.1rem', color: 'white', textDecoration: 'none' }}
                                >
                                    Nous contacter
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"}>
                                <MailOutlineIcon sx={{ display: "flex", mr: 1, color: "white" }} />
                                <Typography className={"text-white"} variant='body1' sx={{ lineHeight: 1.8 }}>
                                    contact@zavoka.mg
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"}>
                                <CallIcon sx={{ display: "flex", mr: 1, color: "white" }} />
                                <Typography className={"text-white"} variant='body1' sx={{ lineHeight: 1.8 }}>
                                    +261 38 37 756 14
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Divider sx={{ borderBottom: `0.5px solid #ffffff30`, marginY: 2, width: "60%" }} />
                </Stack>
                <p style={{ textAlign: "center", color: "white", fontSize: 15, cursor: "pointer" }} onClick={() => { window.open("https://iteam-s.mg", '_blank') }}>
                    Zavoka copyright {new Date().getFullYear()}
                </p>
            </Stack>
        </Container >
    )
};


export default Footer;
