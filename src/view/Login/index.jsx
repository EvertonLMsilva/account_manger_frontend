import { Button, Grid, Icon, InputAdornment, Paper, TextField } from "@material-ui/core";
import { AccountCircleOutlined, Facebook, GitHub, VpnKeyOutlined } from "@material-ui/icons";
import React from "react";

import useStyles from "./style";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <Grid container className={classes.form}>

          <Button variant="contained" color="default" className={classes.buttonFace} size="small"
            startIcon={<Facebook />} >
            Continuar com o Facebook
          </Button>

          <Button variant="contained" color="inherit" className={classes.buttonGit} size="small" 
            startIcon={<GitHub />} >
            Continuar com o GitHub
          </Button>

          <Grid container spacing={1} alignItems="flex-end" className={classes.textImput}>
            <TextField id="standard-start-adornment" fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><AccountCircleOutlined /></InputAdornment>,
              }}
            />
          </Grid>

          <Grid container spacing={1} alignItems="flex-end" className={classes.textImput}>
            <TextField  id="standard-start-adornment" fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><VpnKeyOutlined /></InputAdornment>,
              }}
            />
          </Grid>

          <Button variant="outlined" color="primary" fullWidth className={classes.button} size="medium" 
            endIcon={<Icon>send</Icon>}>
            Logar
          </Button>
          <span className={classes.adjusted}>Ou <a href="/#">esqueci a senha</a></span>
          <span className={classes.adjusted}>Não tem cadastro? <a href="/#">Cadastre-se</a></span>
        </Grid>
     </Paper>
    </div>
  );
}

export default Login;
