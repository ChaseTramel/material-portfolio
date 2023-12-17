import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Header() {
    const navItems = [
        { label: "ABOUT", url: "#about" },
        { label: "PROJECTS", url: "#projects" },
        { label: "CONTACT", url: "#contact" }
    ];

    return (
        <AppBar sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", bgcolor: "#acb0be" }}>
            <Typography 
                variant="h1" 
                sx={{
                    textAlign: "center",
                    fontSize: 48,
                    color: "#7287fd",
                    fontFamily: "Fira Sans",
                    padding: 1,
                }}>
                Chase Tramel
            </Typography>
            <Toolbar sx={{ display: "flex", justifyContent: "center", width: "85%", gap: 1 }}>
                {navItems.map((item) => (
                    <Button 
                        variant="contained" 
                        sx={{
                            bgcolor: "white", 
                            color: "#4c4f69",
                            fontFamily: "Fira Sans",
                            fontWeight: 800,
                            '&:hover': { bgcolor: "#7287fd", color: "white" }  // Corrected hover syntax
                        }} 
                        key={item.label}
                    >
                        {item.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
