const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

const header = {
  setHeaders: (res, path) => {
    if (path.endsWidth(".html")) {
      res.setHeader("Cache-Control", "no-cache");
    } else if (
      path.endsWidth(".js") ||
      path.endsWidth(".css") ||
      path.endsWidth(".webp")
    ) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    } else {
      res.setHeader("Cache-Control", "no-store");
    }
  },
};

app.use(express.static(path.join(__dirname, "../build"), header));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
