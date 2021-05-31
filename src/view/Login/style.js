import styled from "styled-components";
import { Button, Grid, Paper, Select, TextField } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  background: #eefeff;
`;

export const PaperContainer = styled(({ ...otherProps }) => (
  <Paper {...otherProps} />
))`
  && {
    width: 400px;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const GridCustom = styled(Grid)`
  && {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImputStyle = styled(({ ...otherProps }) => (
  <TextField {...otherProps} />
))`
  && {
    margin-top: 40px;
  }
`;

export const ButtonStyle = styled(({color, ...otherProps }) => (
  <Button
    variant="outlined"
    fullWidth
    size="medium"
    {...otherProps}
  />
))`
  && {
    width: 100%;
    margin-top: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${(props) => props.color};
    background: ${(props) => props.background_color};
  }
  :hover {
    color: ${(props) => props.color_hover};
  }
`;

export const GridText = styled(GridCustom)`
  && {
    margin-top: 25px;
  }
  span {
    padding-top: 5px;
  }
`;

export const GridSelect = styled(GridText)``;

export const SelectStyle = styled(({...otherProps})=><Select {...otherProps} />)`
  && {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
