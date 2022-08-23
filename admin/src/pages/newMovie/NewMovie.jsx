import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./newMovie.css";
import storage from "../../firebase";
import { createMovie } from "../../context/movContext/apiCalls";
import { MovContext } from "../../context/movContext/MovContext";


export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const history = useHistory()
  const [img, setMovImg] = useState(null);
  const [imgTitle, setMovImgTitle] = useState(null);
  const [trailer, setMovTrailer] = useState(null);
  const [video, setMovVideo] = useState(null);
  const [uploaded, setMovUploaded] = useState(0);
console.log("uplad",uploaded);
  const { dispatch } = useContext(MovContext);

  const handleMovChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const dataupload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress_info =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is being completed..." + progress_info + "%");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setMovUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleMovUpload = (e) => {
    e.preventDefault();
    dataupload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: trailer, label: "movieTrailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleMovSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called")
    createMovie(movie, dispatch);
    history.push("/movies")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setMovImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setMovImgTitle(e.target.files[0])}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setMovImgSm(e.target.files[0])}
          />
        </div>  */}

        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="movieTitle"
            onChange={handleMovChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="movieDesc"
            onChange={handleMovChange}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="movieDesc"
            onChange={handleMovChange}
          />
        </div> */}
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleMovChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleMovChange}
          />
        </div>

        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleMovChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleMovChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleMovChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name=" movieTrailer"
            onChange={(e) => setMovTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setMovVideo(e.target.files[0])}
          />
        </div>
        {uploaded >= 4 ? (
          <button className="addProductButton" onClick={handleMovSubmit}>
            Create
          </button>
        ) : (
          
          <button className="addProductButton" onClick={handleMovUpload} >
            
            {uploaded < 4 && uploaded >= 1 ?  "Uploading..." : "Upload"    }
          </button>
        )}
      </form>
    </div>
  );
}
