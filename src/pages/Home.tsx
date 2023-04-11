import '../assets/scss/Home.scss';
import Navbar from '../components/Navbar';
import { Button, Fab, Grid, Stack, Typography, Divider, Box } from '@mui/material';
import { Container } from '@mui/system';
import { BsChevronDoubleDown, BsPinAngleFill } from "react-icons/bs";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/Scrolls';
import colors from "../colors/colors"
import Typed from "react-typed";
import { typedText, teamText, aboutText, serviceText, services, teams, pricingText, cardPrincing } from '../mocks/mock';
import BackdropFilter from "react-backdrop-filter";
import hero from "../assets/images/hero.jpg";
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
									<Typography className={"text-bold"} sx={{ letterSpacing: 20, fontSize: { md: "14rem", sm: "8rem", xs: "6rem" }, textAlign: "center", lineHeight: 1 }}>
										<div className={"text-fg"}>Zavoka</div>
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
			<section id="apropos" style={{ display: "flex", justifyContent: "center", margin: "7% 0% 7% 0%", }}>
				<Container maxWidth={"lg"}>
					<Typography className={"text-bold text-dark"} variant='h4' sx={{ textAlign: { xs: "center", md: "left" }, lineHeight: 1, letterSpacing: 1.2 }}>
						La plateforme virtuelle 3D
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
			<section id="services" style={{ backgroundColor: colors.dark, display: "flex", justifyContent: "center", margin: "7% 0% 7% 0%", }}>
				<Container maxWidth={"xl"} sx={{ padding: "5% 0% 6% 0%" }}>
					<Typography className={"text-bold text-white"} variant='h2' sx={{ textAlign: "center", lineHeight: 1, letterSpacing: 1.2 }}>
						Qu'offrons-nous ?
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
								{services.map((s) => (
									<Grid key={s.title} item md={4} sm={6} xs={12} px={{ xs: 2, sm: 0, md: 0 }}>
										<Stack className={"card-service"} p={3} spacing={1} justifyContent={"center"} alignItems={"center"} bgcolor={colors.darkSecondary}
											sx={{ transform: { md: "rotate(8deg)", xs: "rotate(0deg)" } }}
										>
											<Stack direction={"row"} justifyContent="end" width={"100%"}>
												<BsPinAngleFill style={{ fontSize: 20, color: colors.blue }} />
											</Stack>
											<Typography className={"text-bold"} variant='h5' sx={{ textAlign: "center", lineHeight: 1, color: colors.beige, letterSpacing: 3 }}>
												{s.title}
											</Typography>
											<Typography className={"text-white"} sx={{ textAlign: "center", fontSize: 16.2, lineHeight: 1.5 }}>
												{s.description}
											</Typography>
										</Stack>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section id="pricing" style={{ display: "flex", justifyContent: "center", margin: "7% 0% 7% 0%", }}>
				<Container maxWidth={"lg"}>
					<Typography className={"text-bold text-dark"} variant='h4' sx={{ textAlign: { xs: "center", md: "left" }, lineHeight: 1, letterSpacing: 1.2 }}>
						Découvrez nos offres
					</Typography>
					<Typography className={"text-dark"} my={{ xs: 3, md: 2 }} sx={{ width: { md: "50%", xs: "100%" }, textAlign: { xs: "center", md: "left" }, fontSize: 17, lineHeight: 1.5 }}>
						{pricingText}
					</Typography>
					<Grid container columnSpacing={3} rowSpacing={{ xs: 3, md: 0 }} alignItems={{ md: "center", xs: "start" }} py={{ xs: 4, md: 0 }}>
						{Array.from({ length: 3 }, (_, index) => (
							<Grid item md={4} sm={6} xs={12}>
								<Stack p={5} borderRadius={5} justifyContent={"center"} bgcolor={index === 1 ? "#fc9546" : "white"} sx={{ border: index === 1 ? "1px solid white" : "1px solid #2b2b2740" }}>
									<Typography className={index === 1 ? "text-white text-bold" : "text-dark text-bold"} variant='h5' sx={{ textAlign: "center", lineHeight: 1, letterSpacing: 3 }}>
										{cardPrincing[index].titre}
									</Typography>
									<Typography my={2} className={index === 1 ? "text-white" : "text-dark"} sx={{ textAlign: "center", fontSize: 16.2, lineHeight: 1.5 }}>
										{cardPrincing[index].description}
									</Typography>
									<Typography className={index === 1 ? "text-white text-bold" : "text-pink text-bold"} sx={{ textAlign: "center", fontSize: 30, lineHeight: 1.5 }}>
										{cardPrincing[index].price}
									</Typography>
									<Stack mt={2} direction={"row"} justifyContent={"start"}>
										<Stack px={5} spacing={1}>
											{Array.from({ length: cardPrincing[index].benefice.length }, (_, _index) => (
												<Stack spacing={1} direction={"row"}>
													<CheckCircleIcon sx={{ color: index === 1 ? "white" : "#fc9546" }} />
													<Typography className={index === 1 ? "text-white" : "text-dark"} sx={{ textAlign: "center", fontSize: 16.2, lineHeight: 1.5 }}>
														{cardPrincing[index].benefice[_index]}
													</Typography>
												</Stack>
											))}
										</Stack>
									</Stack>
									<Stack mt={3} direction={"row"} width={"100%"} justifyContent={"center"}>
										{
											index === 1 ? (
												<Link to="footer" smooth spy duration={400} offset={-90} style={{ textDecoration: "none" }}>
													<Button className={"hover-plan"} variant="contained"
														sx={{
															color: "#fc9546",
															textTransform: 'none',
															fontFamily: "product",
															fontSize: "16px",
															width: "140px",
															borderRadius: 15,
															backgroundColor: "white"
														}}
														disableElevation
													>
														Choisir
													</Button>
												</Link>
											) : (
												<Link to="footer" smooth spy duration={400} offset={-90} style={{ textDecoration: "none" }}>
													<Button className={"border-dark"} variant="outlined"
														sx={{
															color: "#2b2b27e1",
															textTransform: 'none',
															fontFamily: "product",
															fontSize: "16px",
															width: "140px",
															borderRadius: 15
														}}
														disableElevation
													>
														Choisir
													</Button>
												</Link>
											)
										}
									</Stack>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Container>
			</section>
			<section id="team" style={{ display: "flex", justifyContent: "center", margin: "7% 0% 7% 0%", }}>
				<Container maxWidth={"lg"}>
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Typography className={"text-bold text-dark"} variant='h2' sx={{ textAlign: "center", lineHeight: 1 }}>
							Qui sommes nous ?
						</Typography>
						<Typography className={"text-dark"} mt={2.5} sx={{ fontSize: 18, textAlign: "center", lineHeight: 1.5, width: "80%" }}>
							{teamText}
						</Typography>
					</Stack>
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Divider sx={{ borderBottom: `1px solid ${colors.beige}`, marginY: 4, width: "70%" }} />
					</Stack>
					<Grid container columnSpacing={1} rowSpacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
						{teams.map((m) => (
							<Grid key={m.nom} item md={4} sm={6} xs={12}>
								<Stack justifyContent={"center"}>
									<Stack direction={"row"} justifyContent={"start"} alignItems={"center"} spacing={0.8}>
										<img src={m.photo} alt="Student" width="80"
											className={"rounded-circle img-thumbnail shadow-sm"}
										/>
										<Stack spacing={0.5}>
											<Typography className={"text-dark"} sx={{ lineHeight: 1.3, fontSize: 18 }}>
												{m.nom}
											</Typography>
											<Typography variant='body2' sx={{ lineHeight: 1.5, color: colors.purple }}>
												{m.description}
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