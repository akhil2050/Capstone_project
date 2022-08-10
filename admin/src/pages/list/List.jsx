import "./list.css";


export default function List() {
  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        
          <button className="productAddButton">Create</button>
        
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Movie title</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">33</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">comedy</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">Series</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder="Movie Title" />
            <label>Type</label>
            <input type="text" placeholder="type" />
            <label>Genre</label>
            <input type="text" placeholder="genre" />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
