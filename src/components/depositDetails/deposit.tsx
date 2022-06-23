import { AppBar, Toolbar, Typography, Grid, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Usuario } from '../../interfaces/user';
import { verification } from '../../shared/verification'
interface Props {
    usuario: Usuario,
    setUsuario: Dispatch<SetStateAction<any>>
}

const Deposit = (props: Props) => {


    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let mensaje = {
            mensaje: data.get('mensaje')
        }

        console.log(mensaje);
        const autorizacion = verification(props.usuario);

        if(autorizacion){
            alert('ola')
        }else{
            alert('Son diferentes')
        }

    };
    const handleCancel = (event: any) => {
        event.preventDefault();

        console.log('camcelado');
       


    };

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
                <Grid alignItems="center" textAlign="center" item xs={12} md={8} >
                    <Typography style={{ marginTop: '12px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h4' >{props.usuario.nombre}</Typography>
                    <Typography variant='h6' > {'Telefono: +502' + ' ' + props.usuario.telefono}</Typography>
                    <Typography variant='h6' >{props.usuario.fecha}</Typography>

                    <Typography style={{ marginTop: '8px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h5' >Datos del banco</Typography>
                    <Typography variant='h6' >{'Cuenta:' + ' ' + props.usuario.tipoDeCuenta}</Typography>
                    <Typography variant='h6' >{'NoCuenta:' + ' ' + +props.usuario.noCuenta}</Typography>
                    <Typography variant='h6' >{props.usuario.compañia}</Typography>

                    <Typography style={{ marginTop: '8px', fontWeight: 'bold', fontFamily: 'cursive' }} variant='h5' >Monto a transferir</Typography>
                    <Typography style={{ marginTop: '8px' }} variant='h5' >{'Q' + props.usuario.monto}</Typography>

                </Grid>

                <Grid component="form" onSubmit={handleSubmit} container spacing={0} justifyContent="center"
                    alignItems="center" >
                    <Grid item xs={9} md={9}>

                        <TextField id="outlined-basic" name="mensaje" label="Deja un mensaje al conductor (Opcional)" variant="outlined" fullWidth margin="normal" />

                    </Grid>

                    <Grid item xs={9} md={4.5}>
                        <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth >
                            <Button onClick={handleCancel} endIcon={<HighlightOffIcon />}>Deposito faliido</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={9} md={4.5}>
                        <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth >
                            <Button endIcon={<CheckCircleOutlineIcon />} type="submit"
                                fullWidth variant="contained" >Deposito enviado</Button>
                        </ButtonGroup>
                    </Grid>


                </Grid>

            </Grid>
        </AppBar >
    )

}

export default Deposit;