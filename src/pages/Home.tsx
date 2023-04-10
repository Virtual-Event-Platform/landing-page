import '../assets/scss/Home.scss';
import Navbar from '../components/Navbar';
import { Button, Fab, Grid, Stack, Typography, Divider, Box } from '@mui/material';
import { Container } from '@mui/system';
import { BsChevronDoubleDown, BsPinAngleFill } from "react-icons/bs";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/Scrolls';
import colors from "../colors/colors"
import Typed from "react-typed";
import { typedText, teamText, aboutText, serviceText } from '../mocks/mock';
import BackdropFilter from "react-backdrop-filter";
import hero from "../assets/images/hero.jpg";
import team from "../assets/images/team.jpg";
import about from "../assets/images/about.jpg";
import Footer from '../components/Footer';


const Home = (props: any) => {
	return (
		<>
			<Container id="hero" maxWidth={false}
				style={{
					height: "100vh",
					background: `url(${hero}) no-repeat center center fixed #000`,
					backgroundSize: "cover",
					paddingRight: 0,
					paddingLeft: 0
				}}>
				<Navbar />
				<BackdropFilter filter={"blur(80px) sepia(40%)"} html2canvasOpts={{ allowTaint: true }}>
					<Stack direction="column" bgcolor={"#000000c7"} width={"100%"}>
						<Container maxWidth={"lg"}>
							<Stack width={"100%"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
								<Stack direction="column" justifyContent={"center"} alignItems={"center"}>
									<Typography className={"text-bold"} sx={{ fontSize: { md: "10rem", sm: "8rem", xs: "6rem" }, textAlign: "center", lineHeight: 1 }}>
										<div className={"text-fg"}>Nomapps</div>
									</Typography>
									<Typed
										className={"text-white"}
										style={{ fontSize: "1.1rem", lineHeight: 1.6, textAlign: "center", width: "75%" }}
										strings={typedText}
										typeSpeed={10}
										cursorChar=''
									/>
									<Button className='radius-zero hover-dark' variant="contained"
										sx={{
											my: 3,
											color: 'white',
											textTransform: 'none',
											fontFamily: "product",
											fontSize: "16px",
											width: "150px",
											backgroundColor: `${colors.beige}`,
										}}
										disableElevation
									>
										En savoir plus
									</Button>
								</Stack>
								<Stack direction="column" justifyContent={"center"} alignItems={"center"}>
									<Link
										smooth spy
										duration={400}
										offset={-90}
										style={{ textDecoration: "none" }}
										to="apropos">
										<BsChevronDoubleDown className={"shimmer-icon"} style={{ color: "#fff", fontSize: 18, cursor: "pointer" }} />
									</Link>
								</Stack>
							</Stack>
						</Container>
					</Stack>
				</BackdropFilter>
			</Container>
			<section id="apropos" style={{ display: "flex", justifyContent: "center", margin: "5% 0% 5% 0%", }}>
				<Container maxWidth={"lg"}>
					<Typography className={"text-bold text-dark"} variant='h4' sx={{ textAlign: { xs: "center", md: "left" }, lineHeight: 1, letterSpacing: 1.2 }}>
						Nous connaître ...
					</Typography>
					<Grid container mt={2.5} alignItems={"center"} py={{ xs: 4, md: 0 }} bgcolor={colors.beigeSecondary}>
						<Grid item md={5} xs={12}>
							<Stack direction="row" width={"100%"} justifyContent={{ xs: "center", md: "start" }}>
								<Box component="img" src={about} alt="Hero" sx={{ width: "90%", maxWidth: { xs: 350, md: "85%" } }} />
							</Stack>
						</Grid>
						<Grid item md={7} xs={12}>
							<Stack spacing={3} px={2}>
								<Typography className={"text-dark"} mt={{ xs: 3, md: "unset" }} sx={{ textAlign: { xs: "center", md: "left" }, fontSize: 17, lineHeight: 1.5 }}>
									{aboutText}
								</Typography>
								<Stack direction={"row"} justifyContent={{ xs: "center", md: "start" }} spacing={1.2}>
									<Link to="services" smooth spy duration={400} offset={-90} style={{ textDecoration: "none" }}>
										<Button className='radius-zero hover-beige' variant="contained"
											sx={{
												color: 'white',
												textTransform: 'none',
												fontFamily: "product",
												fontSize: "16px",
												width: "150px",
												backgroundColor: `#fc9546`,
											}}
											disableElevation
										>
											Nos services
										</Button>
									</Link>
									<Link to="footer" smooth spy duration={400} offset={-90} style={{ textDecoration: "none" }}>
										<Button className={"border-dark radius-zero"} variant="outlined"
											sx={{
												color: "#2b2b27e1",
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
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section id="services" style={{ backgroundColor: colors.dark, display: "flex", justifyContent: "center", margin: "5% 0% 5% 0%", }}>
				<Container maxWidth={"xl"} sx={{ padding: "5% 0% 6% 0%" }}>
					<Typography className={"text-bold text-white"} variant='h2' sx={{ textAlign: "center", lineHeight: 1, letterSpacing: 1.2 }}>
						Qu'offrons nous ?
					</Typography>
					<Grid container mt={7}>
						<Grid item md={4}>
							<Stack spacing={3} px={2}>
								<Typography className={"text-white"} sx={{ fontSize: 17, lineHeight: 1.5 }}>
									{serviceText}
								</Typography>
							</Stack>
						</Grid>
						<Grid item md={8}>
							<Grid container columnSpacing={{ xs: 0, sm: 3, md: 3 }} rowSpacing={{ xs: 3, md: 0 }} mt={{ xs: 3, md: 0 }}>
								{Array.from({ length: 3 }, (_) => (
									<Grid item md={4} sm={6} xs={12} px={{ xs: 2, sm: 0, md: 0 }}>
										<Stack className={"card-service"} p={3} spacing={1} justifyContent={"center"} alignItems={"center"} bgcolor={colors.darkSecondary}
											sx={{ transform: { md: "rotate(8deg)", xs: "rotate(0deg)" } }}
										>
											<Stack direction={"row"} justifyContent="end" width={"100%"}>
												<BsPinAngleFill style={{ fontSize: 20, color: colors.blue }} />
											</Stack>
											<Typography className={"text-bold"} variant='h5' sx={{ textAlign: "center", lineHeight: 1, color: colors.beige, letterSpacing: 3 }}>
												Service
											</Typography>
											<Typography className={"text-white"} sx={{ textAlign: "center", fontSize: 17, lineHeight: 1.5 }}>
												{serviceText}
											</Typography>
										</Stack>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section id="team" style={{ display: "flex", justifyContent: "center", margin: "5% 0% 5% 0%", }}>
				<Container maxWidth={"lg"}>
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Typography className={"text-bold text-dark"} variant='h2' sx={{ textAlign: "center", lineHeight: 1 }}>
							Qui sommes nous ?
						</Typography>
						<Typography className={"text-dark"} mt={2.5} sx={{ fontSize: 18, textAlign: "center", lineHeight: 1.5, width: "50%" }}>
							{teamText}
						</Typography>
					</Stack>
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Divider sx={{ borderBottom: `1px solid ${colors.beige}`, marginY: 4, width: "70%" }} />
					</Stack>
					<Grid container rowSpacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
						{Array.from({ length: 5 }, (_) => (
							<Grid item md={4} sm={6} xs={12}>
								<Stack justifyContent={"center"} alignItems={"center"}>
									<Stack direction={"row"} alignItems={"center"} spacing={0.8}>
										<img src={team} alt="Student" width="80"
											className={"rounded-circle img-thumbnail shadow-sm"}
										/>
										<Stack spacing={1.5}>
											<Typography className={"text-dark"} sx={{ lineHeight: 1.3, fontSize: 18 }}>
												Landry Manankoraisina
											</Typography>
											<Typography variant='body2' sx={{ lineHeight: 0.7, color: colors.purple }}>
												Développeur FullStack
											</Typography>
										</Stack>
									</Stack>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Container>
			</section>
			<Footer />
			<ScrollToTop {...props}>
				<Link
					smooth spy
					duration={400}
					style={{ textDecoration: "none" }}
					to="hero">
					<Fab sx={{ backgroundColor: `${colors.beige}` }} size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon className={"float-icon"} sx={{ color: "#fff" }} />
					</Fab>
				</Link>
			</ScrollToTop>
		</>
	);
};


export default Home;