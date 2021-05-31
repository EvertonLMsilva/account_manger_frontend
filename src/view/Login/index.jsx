import React, { useState, useEffect } from "react";
//style
import { Container, PaperContainer, GridCustom, ImputStyle, GridSelect, GridText, SelectStyle, ButtonStyle } from "./style";
//tradução
import { i18n } from "../../translate/i18n";
//material-ui
import { AccountCircleOutlined, Facebook, GitHub, Visibility, VisibilityOff, VpnKeyOutlined } from "@material-ui/icons";
import { Grid, Icon, IconButton, InputAdornment } from "@material-ui/core";
//state redux
import { connect } from "react-redux";
import AuthAction from "../../store/action/AuthAction";
import { AuthThunk } from "../../store/thunk/AuthThunk";
import { Alert } from "@material-ui/lab";

const I18N_STORAGE_KEY = "i18nextLng";

function Login({ alertVerify, error, sucess, userLogin }) {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const [values, setValues] = useState(false);
  const [valuesLogin, setValuesLogin] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [error]);

  const handleChangePassword = () => (setValues(!values)) ;

  const handleChangeLogin = async (event) =>{
    const { value, name } = event.target;
      setValuesLogin({...valuesLogin, [name]: value})
  }

  const handleChangeLanguage = (event) => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value,
      );
      window.location.reload()
  };

  const handleClick = () => {
    alertVerify(null);
    if (valuesLogin.email === "") {
      return alertVerify(`Campo e-mail, não pode estar vazio!`);
    } else if (valuesLogin.password === "") {
      return alertVerify("Campo senha, não pode estar vazio!");
    }
    setLoading(true);
    userLogin(valuesLogin);
    setLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick()
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const flyAlert = (message, typeAlert) => (
    <Alert elevation={6} variant="filled" severity={typeAlert}>
      {message}
    </Alert>
  );

  return (
    <Container>
      <PaperContainer elevation={5}>
         {/* Alerta sobre o login */}
         {error !== null ? (
                <Grid xs item style={{paddingTop: 5}}>
                  {flyAlert(error, "error")}
                </Grid>
              ) : sucess !== null ? (
                <Grid xs item style={{paddingTop: 5}}>
                  {flyAlert(sucess, "success")}
                </Grid>
              ) : (
                ""
              )}
        <GridCustom>
          <ButtonStyle color="#FFF" color_hover="#1a538a" background_color="#1a538a" startIcon={<Facebook />} >
            {i18n.t("login.button.facebook")}
          </ButtonStyle>

          <ButtonStyle color="#FFF" color_hover="#000" background_color="#000" startIcon={<GitHub />} >
            {i18n.t("login.button.gitHub")}
          </ButtonStyle>

          <ImputStyle fullWidth placeholder={i18n.t("login.input.user")} InputProps={{
            startAdornment: (<InputAdornment position="start"><AccountCircleOutlined /></InputAdornment>),
            }}
            name="email"
            onChange={handleChangeLogin}
            onKeyDown={handleKeyDown}
          />

          <ImputStyle fullWidth placeholder={i18n.t("login.input.password")} type={values ? "text" : "password"} InputProps={{
            startAdornment: (<InputAdornment position="start"><VpnKeyOutlined /></InputAdornment>),
            endAdornment: (<InputAdornment position="end"> <IconButton aria-label="toggle password visibility" 
              onClick={() => handleChangePassword()}>{values ? <Visibility /> : <VisibilityOff />}</IconButton></InputAdornment>),
            }}
            name="password"
            onChange={handleChangeLogin}
            onKeyDown={handleKeyDown}
          />

          <ButtonStyle endIcon={<Icon>send</Icon>} onClick={() => handleClick()} >{i18n.t("login.button.start")}</ButtonStyle>

          <GridText>
            <span>{i18n.t("login.forgot.text")}<a href="/#"> {i18n.t("login.forgot.link")}</a></span>
            <span>{i18n.t("login.singUp.text")}<a href="/#"> {i18n.t("login.singUp.link")}</a></span>
          </GridText>

        </GridCustom>
        <GridSelect >
          <SelectStyle native onChange={handleChangeLanguage} value={language}>
            <option value={i18n.t("login.language.pt.init")}> {i18n.t("login.language.pt.lang")} </option>
            <option value={i18n.t("login.language.en.init")}> {i18n.t("login.language.en.lang")} </option>
          </SelectStyle>
        </GridSelect>
      </PaperContainer>
    </Container>
  );
}

export default connect(
  state => ({
    error: state.AuthReducer.error,
    sucess: state.AuthReducer.sucess,
  }), 
  dispatch => ({
    alertVerify: (paramns) => dispatch(AuthAction.authError(paramns)),
    userLogin: ( paramns) => dispatch(AuthThunk.postAuth( paramns)),
})
)(Login);