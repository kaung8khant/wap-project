const createSongListRow = (item, index) => {
  let ele = createRow(item, index);
  //action
  let actiontd = document.createElement("td");
  let actionbtn = document.createElement("btn");
  actionbtn.setAttribute("class", "btn btn-icon");
  actionbtn.setAttribute("onclick", "addToPlayList(" + item.id + ")");
  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-plus");
  actionbtn.append(icon);
  actiontd.append(actionbtn);
  ele.append(actiontd);
  return ele;
};

const createPlayListRow = (item, index) => {
  let ele = createRow(item, index);
  //action
  let actiontd = document.createElement("td");
  let actionbtn = document.createElement("btn");
  actionbtn.setAttribute("class", "btn btn-icon");
  actionbtn.setAttribute("onclick", "play(" + item.id + ")");
  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-regular fa-circle-play");

  //action2
  let actionbtn2 = document.createElement("btn");
  actionbtn2.setAttribute("class", "btn btn-icon");
  actionbtn2.setAttribute("onclick", "removeFromList(" + item.song_id + ")");
  let icon2 = document.createElement("i");
  icon2.setAttribute("class", "fa-solid fa-xmark");

  actionbtn.append(icon);
  actionbtn2.append(icon2);
  actiontd.append(actionbtn);
  actiontd.append(actionbtn2);
  ele.append(actiontd);
  return ele;
};

const createRow = (item, index) => {
  let ele = document.createElement("tr");
  let th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.append(index + 1);

  //cover image
  let imgtd = document.createElement("td");
  let img = document.createElement("img");
  img.src = item.cover;
  img.setAttribute("class", "cover-img");
  imgtd.append(img);

  //title
  let titletd = document.createElement("td");
  titletd.append(item.title);

  //date
  let datetd = document.createElement("td");
  let date = new Date(item.release_date);
  datetd.append(date.toLocaleDateString("en-US"));

  ele.append(th);
  ele.append(imgtd);
  ele.append(titletd);
  ele.append(datetd);

  return ele;
};
const createPlayer = (item) => {
  removeAllChildNodes(document.getElementById("player"));
  let div = document.createElement("div");
  div.setAttribute("class", "player");

  //prev
  let prev = document.createElement("i");
  prev.setAttribute("class", "fa-solid fa-backward-step");
  prev.setAttribute("id", "prev");
  prev.setAttribute("onclick", "prev()");
  //next
  let next = document.createElement("i");
  next.setAttribute("class", "fa-solid fa-forward-step");
  next.setAttribute("id", "next");
  next.setAttribute("onclick", "next()");
  //img
  let img = document.createElement("img");
  img.src = item.cover;
  //p
  let p = document.createElement("p");
  p.innerText = item.title;
  //audio
  let audio = document.createElement("audio");
  audio.setAttribute("id", "htmlplayer");
  audio.setAttribute("controls", "");
  audio.setAttribute("autoplay", "");
  //source
  let source = document.createElement("source");
  source.setAttribute("type", "audio/mp3");
  source.src = "https://docs.google.com/uc?export=download&id=" + item.file;

  audio.append(source);
  //shuffle
  let shuffle = document.createElement("i");
  shuffle.setAttribute("onclick", "changeShuffle()");
  shuffle.setAttribute("id", "shuffle");
  let current = JSON.parse(window.sessionStorage.getItem("current"));
  shuffle.setAttribute("class", "fa-solid fa-repeat shuffle-control");
  if (current) {
    if (current.type === "shuffle") {
      shuffle.setAttribute("class", "fa-solid fa-shuffle shuffle-control");
    } else if (current.type === "one") {
      shuffle.setAttribute("class", "fa-solid fa-1 shuffle-control");
    }
  }

  div.append(prev);
  div.append(next);
  div.append(img);
  div.append(p);
  div.append(audio);
  div.append(shuffle);
  document.getElementById("player").append(div);
  document.getElementById("player").style.display = "block";
  let player = document.getElementById("htmlplayer");
  player.addEventListener("ended", () => {
    document.getElementById("next").click();
  });
};
