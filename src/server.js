import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

let app = express();

// Connect to mongoDB
ConnectDB();

app.get("/testdb", async (req, res) => {
  try {
    let item = {
      userId: "1710135",
      contactId: "149052",
    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello minhchinhctk41, I'm running at ${process.env.APP_HOST}: ${process.env.APP_PORT}`);
});