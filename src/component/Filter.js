import { Button, Container, Grid } from '@mui/material'
import React from 'react'

const Filter = () => {
  return (
    <div>
        <Container style={{padding:"20px"}}>
            <div>
                <Grid container spacing={1} style={{display:"flex", justifyContent:"center" }}>
                    {["all", "Men", "women", "animal"].map((item)=>(
                    <Grid  item>
                        <Button  variant="contained" color="primary">
                            {item}
                        </Button>
                    </Grid>
                ))}
                </Grid>
            </div>
        </Container>
    </div>
  )
}

export default Filter