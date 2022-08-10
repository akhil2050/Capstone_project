
import "./newList.css";

export default function NewList() {
  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
             
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type">
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              
              style={{ height: "280px" }}
            >
              
                <option >
                  movieTitle
                </option>
             
            </select>
          </div>
        </div>
        <button className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
