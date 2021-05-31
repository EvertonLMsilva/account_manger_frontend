import { AuthTypes } from "../types/AuthType";

const AuthAction = {
  authLogin: () => ({
    type: AuthTypes.POST_AUTHENTICATE,
  }),
  verifyToken: (data) => ({
    type: AuthTypes.VERYFY_AUTHENTICATE,
    payload: data,
  }),
  useData: (data) => ({
    type: AuthTypes.DATA_USER,
    payload: data,
  }),
  updateResp: (mesg, data) => ({
    type: AuthTypes.UPDATE_MESSAGE,
    payload: mesg,
    theme: data

  }),
  authSucess: (data) => ({
    type: AuthTypes.SUCESS_MESSAGE,
    payload: data,
  }),
  authError: (data) => ({
    type: AuthTypes.ERROR_AUTHENTICATE,
    payload: data,
  }),
};

export default AuthAction;
