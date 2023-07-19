const track = {
  title: "song title",
  artists: [{ name: "artist name 1" }],
  duration: 200,
};

function getTrack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      console.log(randomNum);
      if (randomNum >= 0.2) {
        resolve(track);
      } else {
        reject(new Error("Failed to fetch track"));
      }
    }, 2000);
  });
}

getTrack()
  .then((track) => {
    console.log("Track:", track);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

async function fetchTrack() {
  try {
    const track = await getTrack();
    console.log("Track:", track);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchTrack();
