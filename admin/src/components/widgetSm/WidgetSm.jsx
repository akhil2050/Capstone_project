import "./widgetSm.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Praveen</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Sijo</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src=             
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
             
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Akhil</span>
            </div>
            <button className="widgetSmButton">
             
              View
            </button>
          </li>
       
      </ul>
    </div>
  );
}
