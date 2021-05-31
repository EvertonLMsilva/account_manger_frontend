const {AuthTypes} = require("../types/AuthType");

const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  sucess: null,
};

const AuthState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //envia de login
    case AuthTypes.POST_AUTHENTICATE:
      return state;
    //verifica a confirmação do token com a api
    case AuthTypes.VERYFY_AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
      };
    //erros de requisições
    case AuthTypes.ERROR_AUTHENTICATE:
      localStorage.removeItem("token");
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
       //sucesso de requisições
    case AuthTypes.SUCESS_MESSAGE:
      return {
        ...state,
        sucess: action.payload,
      };

    default:
      return state;
  }
};
export default AuthState;
