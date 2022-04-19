const populateSong = async () => {
  let list = await fetchSong();
  let rowbody = document.getElementById("songList");
  removeAllChildNodes(rowbody);
  list.map((item, index) => {
    let element = createSongListRow(item, index);
    rowbody.append(element);
  });
};

const addToPlayList = async (id) => {
  try {
    let response = await fetch(domain + "/playlists/songs/" + id, {
      method: "PUT",
      headers: { Authorization: "Bearer " + token },
    });
    let result = await response.json();
    if (response.status === 500 || response.status === 404) {
      throw new Error(result.error);
    } else {
      populateList();
    }
  } catch (error) {
    alert(error);
  }
};

const fetchSong = async (query = null) => {
  let route = query ? "/songs?s=" + query : "/songs";
  let response = await fetch(domain + route, {
    headers: { Authorization: "Bearer " + token },
  });
  return await response.json();
};
