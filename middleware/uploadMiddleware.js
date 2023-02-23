import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

cloudinary.config({
  cloud_name: "dfre3w1wc",
  api_key: "581696524138893",
  api_secret: "K1_PLDD6PgQ5RkQ33rBPeCGjYK8",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "photos",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

export default uploadCloud;
