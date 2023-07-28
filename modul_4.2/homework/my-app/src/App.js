import "./App.css";
import React from "react";

const DetailNews = (props) => {
  const { image, title, date } = props;
  const publicationDate = new Date(date);

  // Check if the news item is published after June 6, 2023
  const isNewPost = publicationDate > new Date("2023-06-06");

  return (
    <div className="eachNews">
      <img src={image} alt="img" />
      <div className="description">
        <div>{title}</div>
        <div className="text-grey">{date}</div>
        {isNewPost && <span className="badge-new">New</span>}
      </div>
    </div>
  );
};

function App() {
  const data = [
    {
      image: "https://picsum.photos/id/237/150/",
      title: "Gunung Anak Krakatau Naik Status dari Waspada ke Siaga",
      date: "June, 29 2019",
    },
    {
      image: "https://picsum.photos/id/137/150/",
      title: "Sederet Fakta Pelonggaran Covid Besar-besaran di Singapura",
      date: "April, 19 2019",
    },
    {
      image: "https://picsum.photos/id/500/150",
      title: "Launching Rumah Tipe Baru Grand Wisata Bekasi, Ada Promo DP Rp0",
      date: "March, 1 2019",
    },
    {
      image: "https://picsum.photos/id/999/150",
      title: "Puluhan Pilot Australia Menerbangkan Pesawat Drone Bersenjata Inggris di Timur Tengah",
      date: "April, 19 2029",
    },
  ];

  // Split the data into "New" news items and older news items
  const newPosts = data.filter((item) => new Date(item.date) > new Date("2023-06-06"));
  const oldPosts = data.filter((item) => new Date(item.date) <= new Date("2023-06-06"));

  return (
    <div className="state-props-1">
      <h3>Recent Posts</h3>
      <div className="news-container">
        {/* Render "New" news items first */}
        {newPosts.map((element, index) => (
          <DetailNews image={element.image} title={element.title} date={element.date} key={index} />
        ))}
        {/* Render older news items */}
        {oldPosts.map((element, index) => (
          <DetailNews image={element.image} title={element.title} date={element.date} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
