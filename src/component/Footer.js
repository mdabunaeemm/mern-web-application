import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer>
            <AppBar position="relative">
                <Toolbar >
                    <Grid container spacing="12"  style={{display:"flex", justifyContent:"space-evenly", padding:"20px"}}>
                        <Button variant="contained" sm={12} item style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
                            <Facebook/>
                            <Typography>
                                Facebook
                            </Typography>
                        </Button>

                        <Button variant="contained" sm={12} item style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
                            <Instagram />
                            <Typography>
                                Instagram
                            </Typography>
                        </Button>

                        <Button variant="contained" sm={12} item style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
                            <LinkedIn/>
                            <Typography>
                                LinkedIn
                            </Typography>
                        </Button>
                        <Button variant="contained" sm={12} item style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
                            <Twitter/>
                            <Typography>
                                Twitter
                            </Typography>
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            </footer>
  )
}

export default Footer