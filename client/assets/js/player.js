const play = (id) => {
  if (playlist.length > 0) {
    let index = playlist.findIndex((item) => item.id === "" + id);

    if (index > -1) {
      let current = window.sessionStorage.getItem("current");

      if (!current) {
        current = {
          index: index,
          type: "repeat",
        };
      } else {
        current = JSON.parse(current);
      }

      let item = playlist[index];
      item.type = "repeat";
      createPlayer(item);
      current = JSON.stringify(current);

      window.sessionStorage.setItem("current", current);
    }
  }
};
const next = () => {
  console.log("here");
  if (playlist.length > 0) {
    let current = JSON.parse(window.sessionStorage.getItem("current"));

    if (!current) {
      current = {
        index: 0,
        type: "repeat",
      };
    }
    let item = null;
    console.log(playlist);
    switch (current.type) {
      case "repeat":
        if (playlist.length === current.index + 1 || playlist.length === 0) {
          current.index = 0;
        } else {
          current.index = current.index + 1;
        }
        item = playlist[current.index];
        item.type = current.type;
        window.sessionStorage.setItem("current", JSON.stringify(current));
        createPlayer(item);
        break;
      case "shuffle":
        let next = Math.floor(Math.random() * playlist.length);
        while (next === current.index) {
          next = Math.floor(Math.random() * playlist.length);
        }
        console.log(next);
        current.index = next;
        item = playlist[current.index];
        item.type = current.type;
        window.sessionStorage.setItem("current", JSON.stringify(current));
        createPlayer(item);
        break;
      case "one":
        item = playlist[current.index];
        createPlayer(item);
        break;
      default:
        break;
    }
  }
};

const prev = () => {
  if (playlist.length > 0) {
    let current = JSON.parse(window.sessionStorage.getItem("current"));

    if (!current) {
      current = {
        index: 0,
        type: "repeat",
      };
    }
    let item = null;

    switch (current.type) {
      case "repeat":
        if (current.index == 0 || playlist.length === 0) {
          current.index = playlist.length - 1;
        } else {
          current.index = current.index - 1;
        }
        item = playlist[current.index];
        item.type = current.type;
        window.sessionStorage.setItem("current", JSON.stringify(current));
        createPlayer(item);
        break;
      case "shuffle":
        let next = Math.floor(Math.random() * playlist.length);
        while (next === current.index) {
          next = Math.floor(Math.random() * playlist.length);
        }
        current.index = next;
        item = playlist[current.index];
        item.type = current.type;
        window.sessionStorage.setItem("current", JSON.stringify(current));
        createPlayer(item);
        break;
      case "one":
        item = playlist[current.index];
        createPlayer(item);
        break;
      default:
        break;
    }
  }
};
const changeShuffle = () => {
  console.log("here");
  let current = JSON.parse(window.sessionStorage.getItem("current"));
  if (!current) {
    current = {
      index: 0,
      type: "repeat",
    };
  }
  let css = "";
  if (current.type === "repeat") {
    current.type = "shuffle";
    css = "fa-solid fa-shuffle shuffle-control";
  } else if (current.type === "shuffle") {
    current.type = "one";
    css = "fa-solid fa-1 shuffle-control";
  } else {
    current.type = "repeat";
    css = "fa-solid fa-repeat shuffle-control";
  }
  console.log(css);
  console.log(current);
  document.getElementById("shuffle").setAttribute("class", css);
  window.sessionStorage.setItem("current", JSON.stringify(current));
};
