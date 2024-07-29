// *** Priority Imports
import "dotenv/config";
import db_connect from "./dbconnect.js";

// *** Other Imports
import express from "express";
import { admin_router } from "./routers/admin/admin_router.js";
import { api_router } from "./routers/api/api_router.js";
import cors from "cors";

// *** Environment Constants
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "http://localhost";

// *** Initializing server
const app = express();

// *** Template Engin and Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());

// *** API Routes
app.use("/admin", admin_router);
app.use("/api", api_router);

// *** Starting the server
db_connect().then((_) => {
  app.listen(PORT, (_) => {
    console.log(`Server running at ${URL}:${PORT}`);
  });
});

// *** Exporting dirname
export const project_dirname = import.meta.dirname;
