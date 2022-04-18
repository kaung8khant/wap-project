const domain = "http://localhost:3000";

window.onload = async function () {
  let list = await fetchSong();
  let rowbody = document.getElementById("songList");
  list.map((item, index) => {
    let ele = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.append(index + 1);
    let imgtd = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.cover;
    imgtd.append(img);
    let titletd = document.createElement("td");
    titletd.append(item.title);
    let datetd = document.createElement("td");
    datetd.append(item.released_date);

    ele.append(th);
    ele.append(imgtd);
    ele.append(titletd);
    ele.append(datetd);
    rowbody.append(ele);
  });
};

const fetchSong = async () => {
  let response = await fetch(domain + "/songs");
  return await response.json();
};
