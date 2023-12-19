import { AppBar, Button, Toolbar, Typography, Box, Container } from "@mui/material";
import { useState, useEffect } from "react";

function Header() {
    const [showTitle, setShowTitle] = useState(true);
    const [titleOpacity, setTitleOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 5;
            const isAboveThreshold = window.scrollY < threshold;
            setShowTitle(isAboveThreshold);
            setTitleOpacity(isAboveThreshold ? 1 : 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const navItems = [
        { label: "ABOUT", url: "#about" },
        { label: "PROJECTS", url: "#projects" },
        { label: "CONTACT", url: "#contact" }
    ];

    return (
        <AppBar sx={{ 
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    bgcolor: "#9ca0b0",
                    position: "sticky",
                    width: "100%",
                    borderRadius: "0px 0px 10px 10px"
                }}>
            
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: showTitle ? 'center' : 'center', // Center if title is not shown
                    alignItems: 'center'
                }}>
                    <Box
                        component="img"
                        sx={{
                            display: 'block',
                            maxWidth: 75,
                            overflow: 'hidden',
                            width: '100%',
                            transform: showTitle ? "none" : "translateX(200%)",
                            transition: "transform 0.25s ease-in-out"
                        }}
                        src="/logo512.png"
                    />
                    <Typography 
                        variant="h1" 
                        sx={{
                            textAlign: "center",
                            fontSize: 48,
                            color: "white",
                            fontFamily: "Fira Sans",
                            padding: 1,
                            fontWeight: 1000,
                            letterSpacing: "1px",
                            display: "flex",
                            opacity: titleOpacity,
                            transition: "opacity 0.25s ease-in-out",
                        }}>
                        Chase Tramel
                    </Typography>
                </Container>
            <Toolbar sx={{ display: "flex",
                        justifyContent: "center",
                        width: "85%",
                        gap: 1
                    }}>
                {navItems.map((item) => (
                    <a href={item.url}>
                        <Button 
                            variant="contained" 
                            sx={{
                                bgcolor: "white", 
                                color: "#4c4f69",
                                fontFamily: "Fira Sans",
                                fontWeight: 800,
                                '&:hover': { bgcolor: "#7287fd", color: "white" }  
                            }} 
                            key={item.label}
                        >
                            {item.label}
                        </Button>
                    </a>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
