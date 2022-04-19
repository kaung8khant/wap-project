const populateList = async () => {
  let div = document.getElementById("playlist");
  div.innerHTML = `<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th></th>
      <th scope="col">Title</th>
      <th scope="col">Release Date</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="playlistBody"></tbody>
</table>`;
  let list = await fetchPlayList();
  playlist = JSON.parse(JSON.stringify(list));
  let rowbody = document.getElementById("playlistBody");
  removeAllChildNodes(rowbody);
  list.map((item, index) => {
    let element = createPlayListRow(item, index);

    rowbody.append(element);
  });
  if (playlist.length === 0) {
    let div = document.getElementById("playlist");
    removeAllChildNodes(div);
    div.innerHTML = "<h3>No songs in the playlist!</h3>";
  }
};

const removeFromList = async (id) => {
  let response = await fetch(domain + "/playlists/songs/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });
  if (playlist.length === 0) {
    let div = document.getElementById("playlist");
    removeAllChildNodes(div);
    div.innerHTML = "<h3>No songs in the playlist!</h3>";
  }
  if (response) {
    populateList();
  }
};

const fetchPlayList = async () => {
  let response = await fetch(domain + "/playlists", {
    headers: { Authorization: "Bearer " + token },
  });
  return response.json();
};
