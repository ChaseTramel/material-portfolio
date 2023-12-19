import { Container, Typography } from "@mui/material";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Container sx={{padding: 3, display: "flex", flexDirection: "center"}}>
            <Typography sx={{
                    textAlign: "center",
                    width: "100%",
                    fontFamily: "Fira Sans",
                    color: "#4c4f69",
                    fontSize: 18
                }}>
                K. Chase Tramel © {currentYear}
            </Typography>
        </Container>
    )
}

export default Footer;