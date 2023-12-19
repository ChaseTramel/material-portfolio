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
            why: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien tortor, laoreet vel ex ac, consectetur lobortis mauris. Nunc faucibus orci vel euismod suscipit. Integer ullamcorper ipsum orci, ac pulvinar turpis dignissim ac. Nunc sed libero mi.",
            how: "Integer vel turpis quis est pulvinar elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lacus lorem, molestie ac ante ac, convallis semper eros. Fusce erat elit, sollicitudin id feugiat sed, interdum nec leo.",
            whatNext: "Duis dui felis, sagittis id elit sed, rutrum tincidunt purus. Nunc eget enim magna. Praesent vel eros dolor. In metus lorem, consequat vitae ex condimentum, feugiat pharetra enim. In turpis neque, ultricies molestie mi vel, rhoncus commodo mi."
        },
        {
            label: "LinkTree Clone",
            imagePath: "/linktree.png",
            url: "https://kaseylittlepaws.com/",
            why: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien tortor, laoreet vel ex ac, consectetur lobortis mauris. Nunc faucibus orci vel euismod suscipit. Integer ullamcorper ipsum orci, ac pulvinar turpis dignissim ac. Nunc sed libero mi.",
            how: "Integer vel turpis quis est pulvinar elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lacus lorem, molestie ac ante ac, convallis semper eros. Fusce erat elit, sollicitudin id feugiat sed, interdum nec leo.",
            whatNext: "Duis dui felis, sagittis id elit sed, rutrum tincidunt purus. Nunc eget enim magna. Praesent vel eros dolor. In metus lorem, consequat vitae ex condimentum, feugiat pharetra enim. In turpis neque, ultricies molestie mi vel, rhoncus commodo mi."
        
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
                alignItems: "center"
            }}>
            <Typography variant="h2" sx={{ fontSize: 40, fontFamily: "Fira Sans", alignSelf: "flex-start"}}>
                Projects
            </Typography>
            <Box
                component="img"
                sx={{
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                }}
                src={projects[activeStep].imagePath}
                alt={projects[activeStep].label}
            />
            <Typography variant="h3" sx={{ fontSize: 24, fontFamily: "Fira Sans" }}>
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
