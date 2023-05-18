import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import about from "../assets/images/about.jpg";
import colors from '../colors/colors';


export default function EventTimeline() {
    return (
        <Timeline position='alternate' sx={{ width: "100%" }}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Stack bgcolor={"white"} p={4} borderRadius={4}>
                        <Typography variant="h5" component="span" className='text-bold' sx={{color: colors.beige}}>
                            Forum SESAME
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            20/06/2023 à 9h30
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1}>
                            <Box component="img" src={about} alt="Hero" sx={{ width: "40%" }} borderRadius={2}/>
                        </Stack>
                        <Typography mt={2}>
                            Découvrez nos offres commerciales adaptées à vos besoins et à la durée de votre événement. Chacune de nos formules inclut les fonctionnalités de base pour une expérience optimale.
                        </Typography>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Stack bgcolor={"white"} p={4} borderRadius={4}>
                        <Typography variant="h5" component="span" className='text-bold' sx={{color: colors.beige}}>
                            Forum SESAME
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            20/06/2023 à 9h30
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1} justifyContent={"right"}>
                            <Box component="img" src={about} alt="Hero" sx={{ width: "40%" }} borderRadius={2}/>
                        </Stack>
                        <Typography mt={2}>
                            Découvrez nos offres commerciales adaptées à vos besoins et à la durée de votre événement. Chacune de nos formules inclut les fonctionnalités de base pour une expérience optimale.
                        </Typography>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Stack bgcolor={"white"} p={4} borderRadius={4}>
                        <Typography variant="h5" component="span" className='text-bold' sx={{color: colors.beige}}>
                            Forum SESAME
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            20/06/2023 à 9h30
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1}>
                            <Box component="img" src={about} alt="Hero" sx={{ width: "40%" }} borderRadius={2}/>
                        </Stack>
                        <Typography mt={2}>
                            Découvrez nos offres commerciales adaptées à vos besoins et à la durée de votre événement. Chacune de nos formules inclut les fonctionnalités de base pour une expérience optimale.
                        </Typography>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
