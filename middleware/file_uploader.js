import fs from "fs";
import multer from "multer";
import path from "path";
import { project_dirname } from "../index.js";

const id_generator = function* () {
  while (true) yield Date.now() + "-" + Math.round(Math.random() * 10000);
};
const generateId = (() => {
  const gen = id_generator();
  return (_) => gen.next().value;
})();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(project_dirname, "public");
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  // destination: path.join(project_dirname, "public"),
  filename: function (req, file, cb) {
    let extension = path.extname(file.originalname);
    cb(null, generateId() + extension);
  },
});

const file_uploader = multer({ storage: storage });
export default file_uploader;
