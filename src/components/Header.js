import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Header() {
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 5; // hides title at this threshold
            setShowTitle(window.scrollY < threshold);
        }
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
            {showTitle && (
                <Typography 
                    variant="h1" 
                    sx={{
                        textAlign: "center",
                        fontSize: 48,
                        color: "white",
                        fontFamily: "Fira Sans",
                        padding: 1,
                        fontWeight: 1000,
                        letterSpacing: "1px"
                    }}>
                    Chase Tramel
                </Typography>
            )}
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
