const domain = "http://localhost:3000/";

const fetchSong = async () => {
  let response = await fetch(domain + "/");
  return await response.json();
};
