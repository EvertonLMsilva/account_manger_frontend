import React from 'react';

import useStyles  from "./style";

function Login() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          Olá mundo!
      </div>
  )
}

export default Login;