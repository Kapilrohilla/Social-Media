import { styled } from '@mui/system'
import { Notifications, Pets } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: 'center',
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "5px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{
                    display: {
                        "xs": "none",
                        "sm": "block"
                    }
                }}>
                    Kapil rohilla
                </Typography>
                <Pets sx={{
                    display: {
                        "xs": "block",
                        "sm": "none"
                    }
                }} />
                <Search>
                    <InputBase placeholder='search...' sx={{ width: "100%" , color: "black"}} />
                </Search>
                <Icons sx={{
                    display: {
                        "xs": "none",
                        "sm": "flex"
                    }
                }}>
                    <Badge badgeContent={4} color="error" >
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} sx={{ height: "30px", width: "30px" }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                </Icons>
                <UserBox>
                    <Avatar onClick={() => setOpen(true)} sx={{ height: "30px", width: "30px" }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                    <Typography variant="span" >John</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;