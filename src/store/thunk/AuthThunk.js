import api from "../../data/api";
import AuthAction from "../action/AuthAction";

const AuthThunk = {
  postAuth: (data) => (dispatch) => {
    api
      .post("/auth/authenticate", data)
      .then( (dataUser) => {
        console.log("status", dataUser);
        localStorage.setItem("token", dataUser.data.token);
        dispatch(AuthAction.authSucess("Login aceito!!"));
        window.location.pathname = `/${dataUser.data.role}`;
      })
      .catch((error) => {
        localStorage.removeItem("token");
        
        if (error.message === "Network Error") {
          return dispatch(AuthAction.authError("Erro ao conectar o servidor"));
        }
        
        const status = error.response.status;
        console.log("errrro", error.response.status);
        
        if (status === 400) {
          return dispatch(AuthAction.authError("E-mail ou senha incorreto!!"));
        }

        dispatch(AuthAction.authError(error.message));
      });
  },

  postTokenVerify: () => (dispatch) => {
    const params = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        authorization: params,
      },
    };
    api("/auth/isme", options)
      .then((dataUser) => {
        dispatch(AuthAction.useData(dataUser.data));
      })
      .catch(() => {
        // localStorage.removeItem("token");
        // window.location.pathname = "/auth";
      });
  },
};
export { AuthThunk };
