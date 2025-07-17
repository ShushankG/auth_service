import express from "express";
import { serverConfig } from "./config/serverConfig.js";
import { apiRoutes } from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

function createServer() {
  app.listen(serverConfig.port, () => {
    console.log("Server started on port " + serverConfig.port);
  });
}

createServer();