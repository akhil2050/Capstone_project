import axios from "axios";
import {
  createMovFail,
  createMovStart,
  createMovSuccess,
  deleteMovFailure,
  deleteMovStart,
  deleteMovSuccess,
  updateMovFailure,
  updateMovStart,
  updateMovSuccess,
  getMovFailure,
  getMovStart,
  getMovSuccess,
} from "./MovActions";

export const getMovies = async (dispatch) => {
  dispatch(getMovStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(getMovSuccess(res.data));
  } catch (err) {
    dispatch(getMovFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(createMovSuccess(res.data));
  } catch (err) {
    dispatch(createMovFail());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(deleteMovSuccess(id));
  } catch (err) {
    dispatch(deleteMovFailure());
  }
};


//update
export const updateMovie = async (inp, dispatch) => {
  console.log("update movie called")
  console.log("data is in update", inp )
  dispatch(updateMovStart());
  try {
    const res = await axios.put("/movies/" + inp.movID, inp, {
      headers: {
        token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] ,
          
      },
    });
    dispatch(updateMovSuccess(res.data));
  } catch (err) {
    dispatch(updateMovFailure());
  }
};