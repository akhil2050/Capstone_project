import React from 'react'
import axios from "axios";
import './banner.scss';
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useState } from 'react';
import { useEffect } from 'react';

export default function Banner({ type }) {

    const [itmContent, setRandomContent] = useState({});

    useEffect(() => {
        const contentRandom = async () => {
            try {
                const res = await axios.get(`movies/scattered?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTIyN2E5OWFhYWI1NzRhNzhlMjhiNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTk0OTQzNzMsImV4cCI6MTY2MDA5OTE3M30.U8lFV8am4gzwRYf8ojabvlWrfhLfE0BHvY0Sus0fmdc"

                    },
                });

                setRandomContent(res.data[0]);
                console.log("data is", res.data);
            }
            catch (err) {
                console.log(err);

            }
        };
        contentRandom();
    }, [type]);
    return (
        <div className='Banner'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select
                        name="genre"
                        id="genre"
                    >
                        <option>Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                    </select>
                </div>
            )}
            <img src={itmContent.img} alt="banner image" />

            <div className='bannerinfo'>
                <img src={itmContent.imgTitle} alt="feature image" />
                <span className="shortdesc">{itmContent.movieDesc}</span>
                <div className="infobuttons">
                    <button className="playbtn">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="morebtn">
                        <InfoOutlined />
                        <span>More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
