import { Card, Typography } from "@mui/material";



function Contact() {
    const contactInfo =  [
        {
            label: "GitHub",
            icon: "/github.png",
            url: "https://github.com/ChaseTramel"
        },
        {
            label: "LinkedIn",
            icon: "/linkedin.png",
            url: "https://www.linkedin.com/in/chasetramel/"
        },
        {
            label: "Email",
            icon: "/email.png",
            url: "mailto:hello@chasetramel.com"
        }
    ]
    
    return (
        <Card  id="contact" sx={{padding: 2, marginTop: 3, borderRadius: "10px"}}>
            <Typography variant="h2" sx={{fontSize: 40, fontFamily: "Fira Sans"}}>
                Contact
            </Typography>
        </Card>
    )
}

export default Contact;