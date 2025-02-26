import express from "express";
import "dotenv/config";
import urlRoute from "./routes/url.routes.js";
import URL from "./models/url.models.js";
import connectDB from "./db/db.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use("/api/url", urlRoute);

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});


app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
