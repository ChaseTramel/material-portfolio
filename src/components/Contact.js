import { Box, Button, Card, Typography } from "@mui/material";



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
        <Card  id="contact" sx={{padding: 2, marginTop: 3, borderRadius: "10px",}}>
            <Typography variant="h2" sx={{fontSize: 40, fontFamily: "Fira Sans"}}>
                Contact
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {contactInfo.map((item, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        href={item.url}
                        startIcon={<img src={item.icon} alt={item.label} width={16} />}
                        sx={{
                            margin: "30px",
                            bgcolor: "#9ca0b0",
                            color: "white",
                            fontFamily: "Fira Sans",
                            fontWeight: 800,
                            '&:hover': { bgcolor: "#7287fd", color: "white" }
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>
        </Card>
    )
}

export default Contact;