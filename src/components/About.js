import { Accordion, AccordionDetails, AccordionSummary, Button, Card, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function About() {
    const longAbout = [
        "I enjoy creating cool stuff that looks great and works even better. I'm passionate about web development because I can work with great teams to build products that truly impact people’s lives.",
        "My life experience has developed me into a tech generalist with strong programming and design skills. I love discovering new and creative ways to solve problems with technology.",
        "I'm on the lookout for new opportunities to collaborate and grow, especially if they involve refining my React and UI design skills. I live in Central Florida, and I’m only able to accept jobs that are fully remote or based in the Orlando area. ",
        "If you're interested in collaborating with me on a project, feel free to shoot me an email."
    ]

    return (
        <Card  id="about" sx={{padding: 2, marginTop: 3, borderRadius: "10px"}}>
            <Typography variant="h2" sx={{fontSize: 40, fontFamily: "Fira Sans"}}>
                About
            </Typography>
            <Accordion sx={{padding: 2, marginTop: 3, bgcolor: "#ccd0da"}}>
                <AccordionSummary sx={{fontFamily: "Fira Sans"}} expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{color: "#4c4f69", fontSize: 20}}>
                        I’m Chase Tramel, a web developer and designer. I love creating interesting and useful things with the web.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            color: "#4c4f69",
                            fontFamily: "Fira Sans"
                        }}>
                    {longAbout.map((item) => (
                        <Typography sx={{fontSize: 20}}>
                            {item}
                        </Typography>
                    ))}
                    <Button 
                        variant="contained" 
                        href="#contact"
                        sx={{
                            bgcolor: "white", 
                            color: "#4c4f69",
                            fontFamily: "Fira Sans",
                            fontWeight: 800,
                            '&:hover': { bgcolor: "#7287fd", color: "white" }  
                        }}>
                            Contact
                        </Button>
                </AccordionDetails>
            </Accordion>
        </Card>
    )
};

export default About;