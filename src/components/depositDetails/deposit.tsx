import { AppBar, Toolbar, Typography, Grid, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const deposit = () => {


    return (
        <AppBar>
            <Toolbar sx={{ backgroundColor: '#ffff', color: '#000000' }}>
                <ArrowBackIosIcon className="icon-back" />
                <Typography variant='h6' >Verificacion</Typography>
            </Toolbar>

            <Grid container spacing={0} direction="column" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#F1FFFA', color: '#000000' }}>

                <Grid style={{ marginTop: '15px' }} item xs={6} md={8}>
                    <Avatar sx={{
                        width: 120,
                        height: 120,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}>
                    </Avatar>
                </Grid>
                <Grid alignItems="center" textAlign="center" >
                    <Typography style={{ marginTop: '12px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h4' >Daniel Velásquez</Typography>
                    <Typography variant='h6' >Telefono: +502 55700128</Typography>
                    <Typography variant='h6' >06 ene 2021 - hace 2 dias</Typography>

                    <Typography style={{ marginTop: '8px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h5' >Datos del banco</Typography>
                    <Typography variant='h6' >Cuenta monetaria</Typography>
                    <Typography variant='h6' >No. 1232258745</Typography>
                    <Typography variant='h6' >Banrural</Typography>

                    <Typography style={{ marginTop: '8px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h5' >Monto a transferir</Typography>
                    <Typography style={{ marginTop: '8px' }} variant='h5' >Q500.00</Typography>

                </Grid>

                <Grid container spacing={0} justifyContent="center"
                    alignItems="center" >
                    <Grid item xs={9} md={8}>
                        <TextField id="outlined-basic" label="Deja un mensaje al conductor (Opcional)" variant="outlined" fullWidth margin="normal" />

                    </Grid>

                    <Grid item xs={9} md={8}>
                    <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth >
                        <Button endIcon={<HighlightOffIcon />}>Denegar</Button>
                        <Button endIcon={<CheckCircleOutlineIcon />} variant="contained" >Aprobar</Button>
                    </ButtonGroup>
                    </Grid>

                    

                </Grid>

            </Grid>
        </AppBar>
    )

}

export default deposit;