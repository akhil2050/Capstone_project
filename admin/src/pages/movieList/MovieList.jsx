import "./movieList.css";
import React from 'react'

function MovieList() {
  return (
    <div className="widgetLg movie_wrap">
    <h3 className="widgetLgTitle">Movie List</h3>
    <button className="productAddButton">Create New</button>
    <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">MovieTitle</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Type</th>
          <th className="widgetLgTh">Genre</th>
          <th className="widgetLgTh">&nbsp;</th>
          <th className="widgetLgTh">&nbsp;</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="assets/series9.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tom &amp; jerry</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">Series</td>
          <td className="widgetLgStatus">
            Cartoon
          </td>
          <td className="widgetLgStatus"><button className="productListEdit">Edit</button> </td>
          <td className="widgetLgStatus"><button className="productListDelete">Delete</button> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="assets/series9.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tom &amp; jerry</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Series</td>
          <td className="widgetLgStatus">
          Cartoon
          </td>
          <td className="widgetLgStatus"><button className="productListEdit">Edit</button> </td>
          <td className="widgetLgStatus"><button className="productListDelete">Delete</button> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="assets/series9.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tom &amp; jerry</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Series</td>
          <td className="widgetLgStatus">
          Cartoon
          </td>
          <td className="widgetLgStatus"><button className="productListEdit">Edit</button> </td>
          <td className="widgetLgStatus"><button className="productListDelete">Delete</button> </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="assets/series9.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tom &amp; jerry</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Series</td>
          <td className="widgetLgStatus">
               Cartoon
          </td>
          <td className="widgetLgStatus"><button className="productListEdit">Edit</button> </td>
          <td className="widgetLgStatus"><button className="productListDelete">Delete</button> </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default MovieList