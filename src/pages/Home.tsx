import '../assets/scss/Home.scss';
import Navbar from '../components/Navbar';
import { Button, Fab, Grid, Stack, Typography, Divider } from '@mui/material';
import { Container } from '@mui/system';
import { BsChevronDoubleDown } from "react-icons/bs";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/Scrolls';
import colors from "../colors/colors"
import Typed from "react-typed";
import { typedText } from '../mocks/mock';
import BackdropFilter from "react-backdrop-filter";
import hero from "../assets/images/hero.jpg";
import team from "../assets/images/team.jpg";
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
									<Typography className={"text-bold"} sx={{ fontSize: "10rem", textAlign: "center", lineHeight: 1 }}>
										<div id="text-fg">Virtual Event</div>
									</Typography>
									<Typed
										style={{ color: "white", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "center", marginTop: 17, marginBottom: 17, width: 500 }}
										strings={typedText}
										typeSpeed={5}
										cursorChar=''
									/>
									<Button className='radius-zero hover-dark' variant="contained"
										sx={{
											my: 2,
											color: 'white',
											textTransform: 'none',
											fontFamily: "product",
											fontSize: "16px",
											width: "150px",
											backgroundColor: `${colors.purpleSecondary}`,
										}}
										disableElevation
									>
										En savoir plus
									</Button>
								</Stack>
								<Stack direction="column" justifyContent={"center"} alignItems={"center"}>
									<BsChevronDoubleDown className={"shimmer-icon"} style={{ color: "#fff", fontSize: 18 }} />
								</Stack>
							</Stack>
						</Container>
					</Stack>
				</BackdropFilter>
			</Container>
			<section id="team">
				<Container maxWidth={false} style={{ width: "100%", margin: "5% 0% 0% 0%" }} >
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Typography className={"text-bold text-dark"} variant='h2' sx={{ textAlign: "center", lineHeight: 1 }}>
							Qui sommes nous ?
						</Typography>
						<Typography className={"text-dark"} variant='h6' mt={2.5} sx={{ textAlign: "center", lineHeight: 1.5, width: "50%" }}>
							{typedText}
						</Typography>
					</Stack>
					<Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
						<Divider sx={{ borderBottom: `1px solid ${colors.beige}`, marginY: 4, width: "70%" }} />
					</Stack>
					<Grid container rowSpacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
						{Array.from({ length: 5 }, (_) => (
							<Grid item md={4} xs={6}>
								<Stack justifyContent={"center"} alignItems={"center"}>
									<Stack direction={"row"} alignItems={"center"} spacing={0.8}>
										<img src={team} alt="Student" width="80"
											className={"rounded-circle img-thumbnail shadow-sm"}
										/>
										<Stack spacing={1.5}>
											<Typography className={"text-dark"} variant='h6' sx={{ lineHeight: 0.7 }}>
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
					<Fab sx={{ backgroundColor: `${colors.purpleSecondary}` }} size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon className={"float-icon"} sx={{ color: "#fff" }} />
					</Fab>
				</Link>
			</ScrollToTop>
		</>
	);
};


export default Home;