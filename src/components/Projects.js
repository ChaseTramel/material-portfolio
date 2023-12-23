import { useState } from "react";
import { Button, Card, MobileStepper, Typography, Box } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



function Projects() {
    const projects = [
        {
            label: "Christmas Magic",
            imagePath: "/magic.gif",
            url: "https://github.com/ChaseTramel/second-life-scripts/tree/main/Christmas-Magic-Scripts",
            why: "To create a fun and interactive magical Christmas effects for my character in the game Second Life.",
            how: "Linden Scripting Language (LSL), Firestorm Preprocessor, Git & GitHub.",
            whatNext: "I would like to add more effects and make the scripts more efficient."
        },
        {
            label: "LinkTree Clone",
            imagePath: "/linktree.png",
            url: "https://kaseylittlepaws.com/",
            why: "To advertise my freelance scripting services in the game Second Life.",
            how: "React, PrimeReact, Git & GitHub, Netlify.",
            whatNext: "I'd like to make the buttons their own components. I'm thinking about starting a blog on the site, but that may be better suited as a separate project."
        
        }
    ];

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = projects.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    }

    return (
        <Card id="projects" sx={{
                padding: 2,
                marginTop: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "flex-start"
            }}>
            <Typography variant="h2" sx={{ fontSize: 40, fontFamily: "Fira Sans"}}>
                Projects
            </Typography>
            <Box
                component="img"
                sx={{
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                    alignSelf: 'center'
                }}
                src={projects[activeStep].imagePath}
                alt={projects[activeStep].label}
            />
            <Typography variant="h3" sx={{ fontSize: 24, fontFamily: "Fira Sans", alignSelf: "center" }}>
                <a href={projects[activeStep].url}>{projects[activeStep].label}</a>
            </Typography>
            <div>
                <Typography variant="h4" sx={{ fontSize: 20, fontFamily: "Fira Sans" }}>
                    WHY?
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "Fira Sans", color: "#4C4F69"}}>
                    {projects[activeStep].why}
                </Typography>
            </div>
            <div>
                <Typography variant="h4" sx={{ fontSize: 20, fontFamily: "Fira Sans" }}>
                    HOW?
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "Fira Sans", color: "#4C4F69"}}>
                    {projects[activeStep].how}
                </Typography>
            </div>
            <div>
                <Typography variant="h4" sx={{ fontSize: 20, fontFamily: "Fira Sans" }}>
                    WHAT NEXT?
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "Fira Sans", color: "#4C4F69"}}>
                    {projects[activeStep].whatNext}
                </Typography>
            </div>
            <MobileStepper
                sx={{alignSelf: "center"}}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </Card>
    );
}

export default Projects;
