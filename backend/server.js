const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require("./middilweres/errorHandlare");

dotenv.config();

connectDB();
const app = express();
// const express = require("express");
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// -----------------------------Deployment----------------

const __dirname1 = path.resolve()
if (process.env.NODE_ENV==="production") {
  app.use(express.static(path.join(__dirname1,"/frontend/build")));

  app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
  });

}else{
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// -----------------------------Deployment----------------

  app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${5000}`));  