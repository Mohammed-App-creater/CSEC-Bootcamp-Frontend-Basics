const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const compressImage = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const outputDir = path.join(__dirname, '../View/Logo');
    const compressedFilename = `compressed-${Date.now()}${path.extname(req.file.originalname)}`;
    const compressedPath = path.join(outputDir, compressedFilename);

    await sharp(req.file.path)
      .resize(49) 
      .jpeg({ quality: 70 }) 
      .toFile(compressedPath);

    fs.unlinkSync(req.file.path);

    req.file.filename = compressedFilename;
    req.file.path = compressedPath;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = compressImage;
