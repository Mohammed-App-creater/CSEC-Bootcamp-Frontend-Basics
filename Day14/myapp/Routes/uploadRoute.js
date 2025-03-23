const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer.config");
const uploadController = require("../controllers/uploadContoller");
const compressImage = require("../middleware/compresssFile");
const verifyJWT = require('../middleware/verifyJWT');


router.post("/", verifyJWT,  upload.single("logo"), compressImage, uploadController.uploadLogo);

module.exports = router;
