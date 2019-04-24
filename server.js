const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
let fetch = require("node-fetch");

app.get("/api/get", (req, res) => {
  fetch(`https://www.lrt.lt/static/tvprog/tvprog.json`)
  .then(res => res.json())
  .then(json => {
    let liveShow = json.tvprog.items[0];
    let liveShowTitle = liveShow.title;
    let liveShowDesc = liveShow.desc;
    let liveShowStart = liveShow.time_start;
    let liveShowStop = liveShow.time_end;
    res.json({ title: liveShowTitle, desc: liveShowDesc, start: liveShowStart, end: liveShowStop});
  })
  .catch(err => {
    console.error(err);
  });  
});

app.listen(port, () => console.log(`Listening on port ${port}`));