import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    margin: "0 auto",
    backgroundColor: "#EEE",
  },
  Paper: {
    width: 400,
    height: 550,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 300,
  },
  textImput: {
    marginTop: 25,
  },
  button: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
  },
  buttonGit: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    color: "#FFF",
    backgroundColor: "#000",
  },
  buttonFace: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    backgroundColor: "#1a538a",
    color: "#FFF",
  },
  adjusted:{
    margin:"auto", 
    paddingTop: 15
  }
}));
export default useStyles;
