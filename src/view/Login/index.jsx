import React, { useState } from "react";
//style
import {
  Container,
  PaperContainer,
  GridCustom,
  ImputStyle,
  GridSelect,
  GridText,
  SelectStyle,
  ButtonStyle,
} from "./style";
//tradução
import { i18n } from "../../translate/i18n";
//material-ui
import { AccountCircleOutlined, Facebook, GitHub, VpnKeyOutlined } from "@material-ui/icons";
import { Icon, InputAdornment, MenuItem } from "@material-ui/core";

const I18N_STORAGE_KEY = "i18nextLng";

function Login() {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleChange = (event) => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value,
      window.location.reload(true)
    );
  };

  return (
    <Container>
      <PaperContainer elevation="5" >
        <GridCustom>
          <ButtonStyle color='#FFF' colorHover='#1a538a' backgroundColor='#1a538a' startIcon={<Facebook />}>{i18n.t("login.button.facebook")}</ButtonStyle>

          <ButtonStyle color='#FFF' colorHover='#000' backgroundColor='#000' startIcon={<GitHub />}>{i18n.t("login.button.gitHub")}</ButtonStyle>

          <ImputStyle fullWidth placeholder={i18n.t("login.input.user")} InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
          />

          <ImputStyle fullWidth placeholder={i18n.t("login.input.password")} InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyOutlined />
                </InputAdornment>
              ),
            }}
          />

          <ButtonStyle endIcon={<Icon>send</Icon>}>
            {i18n.t("login.button.start")}
          </ButtonStyle>

          <GridText>
            <span> {i18n.t("login.forgot.text")}<a href="/#"> {i18n.t("login.forgot.link")}</a></span>
            <span> {i18n.t("login.singUp.text")}<a href="/#"> {i18n.t("login.singUp.link")}</a></span>
          </GridText>
        </GridCustom>
        <GridSelect container alignItems="center">
          <SelectStyle
            id="language"
            onChange={handleChange}
            value={language}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem icon value={` - ${i18n.t("login.language.pt.init")}`}>
              {i18n.t("login.language.pt.lang")}
            </MenuItem>
            <MenuItem value={i18n.t("login.language.en.init")}>
              {i18n.t("login.language.en.lang")}
            </MenuItem>
          </SelectStyle>
        </GridSelect>
      </PaperContainer>
    </Container>
  );
}

export default Login;
