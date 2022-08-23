import axios from "axios";
import {
  createLstFailure,
  createLstStart,
  createLstSuccess,
  deleteLstFailure,
  deleteLstStart,
  deleteLstSuccess,
  getLstFailure,
  getLstStart,
  getLstSuccess,
  updateLstStart,
  updateLstSuccess,
  updateLstFailure


} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getLstStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(getLstSuccess(res.data));
  } catch (err) {
    dispatch(getLstFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createLstStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(createLstSuccess(res.data));
  } catch (err) {
    dispatch(createLstFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteLstStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(deleteLstSuccess(id));
  } catch (err) {
    dispatch(deleteLstFailure());
  }
};

//update

export const updateList = async (inp, id, dispatch) => {
  console.log("update list called")
  console.log("data is in list update", inp )
  dispatch(updateLstStart());
  try {
    const res = await axios.put("/lists/" + id, inp, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(updateLstSuccess(res.data));
  } catch (err) {
    dispatch(updateLstFailure());
  }
};
