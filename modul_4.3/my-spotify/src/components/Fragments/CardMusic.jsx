import React from "react";
import data from "./DataPlaylist";

export default function CardMusic() {
  // menampilkan data dengan playcount terbanyak
  const mostPopuler = data.sort((a, b) => b.play_count - a.play_count);

  return (
    <>
      <div className="playlists">
        <div className="text">
          <h2>Most Played Song</h2>
          <p>Show all</p>
        </div>
        {/* Menampilkan data dengan conditional rendering */}
        <div className="list">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <p>{item.play_count}</p>
              {/* Conditional rendering */}
              {item.play_count > 300 ? <p>This song is very popular!</p> : mostPopuler ? <p>This song is popular!</p> : <p>This song is getting attention!</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
