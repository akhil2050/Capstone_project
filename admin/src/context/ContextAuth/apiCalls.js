import axios from "axios";
import { loginFailureAdm, loginStartAdm, loginSuccessAdm } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStartAdm());
  try {
    const res = await axios.post("auth/login", user);
    const isAdminFlag = res.data.split(" ")[2];
    console.log(isAdminFlag)
    if (res.data && isAdminFlag=="true") 
       dispatch(loginSuccessAdm(res.data));
    else
    dispatch(loginFailureAdm());
  } catch (err) {
    dispatch(loginFailureAdm());
  }
};
