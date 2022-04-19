const domain = "http://localhost:3000";
let playlist = [];
let token = window.sessionStorage.getItem("token");
// token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaSIsImlhdCI6MTY1MDMzOTc0N30.DdoZf3RNEYWPBo-7smRAOiZKFb9GaA_jW0xKSsFWRYE";

window.onload = function () {
  render();
};

async function search() {
  let query = document.getElementById("search-input").value;

  let list = await fetchSong(query, {
    headers: { Authorization: "Bearer " + token },
  });
  let rowbody = document.getElementById("songList");
  removeAllChildNodes(rowbody);
  list.map((item, index) => {
    let element = createSongListRow(item, index);

    rowbody.append(element);
  });
}
async function login() {
  let etag = document.getElementById("error");
  etag.innerHTML = "";
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
  try {
    let response = await fetch(domain + "/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    let result = await response.json();
    document.getElementById("username-input").value = "";
    document.getElementById("password-input").value = "";
    if (response.status === 500 || response.status === 404) {
      throw new Error(result.error);
    } else {
      token = result.token;
      window.sessionStorage.setItem("token", token);
      render();
    }
  } catch (e) {
    let etag = document.getElementById("error");
    etag.innerHTML = e.message;
  }
}

async function logout() {
  window.sessionStorage.removeItem("token");
  token = null;
  render();
}

const render = () => {
  if (!token) {
    document.getElementById("login-bar").style.display = "flex";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("container-body").style.display = "none";
  } else {
    document.getElementById("login-bar").style.display = "none";
    document.getElementById("search-bar").style.display = "block";
    document.getElementById("container-body").style.display = "block";
    populateList();
    populateSong();

    document
      .getElementById("search-input")
      .addEventListener("keyup", function (e) {
        e.preventDefault();
        let value = document.getElementById("search-input").value;
        if (value !== "") {
          let title = document.getElementById("title");
          title.innerText = 'Search result for "' + value + '"';
        } else {
          let title = document.getElementById("title");
          let icon = document.createElement("i");
          removeAllChildNodes(title);
          icon.setAttribute("class", "fa-solid fa-fire");
          let span = document.createElement("span");
          span.innerText = " Popular Song List";
          title.append(icon);
          title.append(span);
        }
        search();
      });
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
