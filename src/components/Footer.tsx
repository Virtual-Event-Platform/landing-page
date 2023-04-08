import { Container, Stack, Grid, Typography, Fab } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import hero from "../assets/images/hero.jpg";


const Footer = () => {
    return (
        <Container maxWidth={false}
            style={{
                width: "100%",
                background: `url(${hero}) no-repeat center center fixed #000`,
                backgroundSize: "cover",
                padding: 0
            }}
        >
            <Stack bgcolor={"#000000e8"} sx={{ margin: "5% 0% 0% 0%", padding: "3% 2% 2% 2%", backdropFilter: "blur(80px) sepia(40%)" }}>
                <Grid container rowSpacing={4}>
                    <Grid item container xs={12} md={12} justifyContent="start">
                        <Stack direction={"column"} sx={{ textAlign: "center" }} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                            <LayersTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "white" }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                Landing
                            </Typography>
                            <p style={{ color: "white", fontSize: 16, fontWeight: "500", lineHeight: 2, width: "80%", textAlign: "center" }}>
                                landry.aps@gmail.com<br />032 69 129 19 . 034 65 034 57
                            </p>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Stack px={1} className="social-icon" onClick={() => { window.open("https://www.linkedin.com/company/iteamscommunity", '_blank') }}>
                        <Fab size="small" sx={{ backgroundColor: "#0075B5", color: "white" }} className="sc-linkedin">
                            <LinkedInIcon />
                        </Fab>
                    </Stack>
                    <Stack px={1} className="social-icon" onClick={() => { window.open("https://www.facebook.com/profile.php?id=100083660835154", '_blank') }} >
                        <Fab size="small" sx={{ backgroundColor: "#1778F2", color: "white" }} className="sc-facebook">
                            <FacebookIcon />
                        </Fab>
                    </Stack>
                </Grid>
                <p style={{ textAlign: "center", color: "white", fontSize: 15, marginTop: 10, cursor: "pointer" }} onClick={() => { window.open("https://iteam-s.mg", '_blank') }}>
                    Landing copyright {new Date().getFullYear()}
                </p>
            </Stack>
        </Container >
    )
};


export default Footer;