import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import siae from "../assets/images/siae.jpg";
import sesame from "../assets/images/sesame.jpg";
import care from "../assets/images/care.jpg";
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
                        <Typography variant="h5" component="span" className='text-bold' sx={{ color: colors.beige }}>
                            SIAE
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            01/06/2023 - 04/06/2023
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1}>
                            <Box component="img" src={siae} alt="Hero" sx={{ width: "60%" }} borderRadius={2} />
                        </Stack>
                        <Typography mt={2}>
                            Un mouvement des acteurs économiques à travers différentes activités pour permettre aux entreprises, visiteurs d'élargir leur réseau et d'optimiser à bon escient pour développer leur succès.
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
                        <Typography variant="h5" component="span" className='text-bold' sx={{ color: colors.beige }}>
                            Forum  de l'orientation et de métiers - SESAME
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            02/06/2023 - 03/06/2023
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1} justifyContent={"right"}>
                            <Box component="img" src={sesame} alt="Hero" sx={{ width: "60%" }} borderRadius={2} />
                        </Stack>
                        <Typography mt={2}>
                            Un événement qui a opour objectif de vulgariser les informataions à savoir sur les études supérieures et de préparer les étudiants au monde professionnel.
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
                        <Typography variant="h5" component="span" className='text-bold' sx={{ color: colors.beige }}>
                            Carrefour de la formation des métiers et de l'emploi
                        </Typography>
                        <Typography sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                            01/08/2023 - 05/08/2023
                        </Typography>
                        <Stack direction={"row"} width={"100%"} mt={1}>
                            <Box component="img" src={care} alt="Hero" sx={{ width: "60%" }} borderRadius={2} />
                        </Stack>
                        <Typography mt={2}>
                            C'est un événement qui a pour but d'aider la jeunesse malgache à trouver leurs voies en commençant par l'identification de la formation académique adéquate qui peut déboucher sur leur métier de rêve. 
                        </Typography>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
