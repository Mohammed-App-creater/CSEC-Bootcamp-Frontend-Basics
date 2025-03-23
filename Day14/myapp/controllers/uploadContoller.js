const uploadLogo = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({
    message: "Logo uploaded successfully",
    path: `/Logo/${req.file.filename}`,
  });
};


const handleError = (err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res
      .status(400)
      .json({ message: "File size should be less than 5MB" });
  }
  if (err.message) {
    return res.status(400).json({ message: err.message });
  }
  next(err);
};


module.exports = {
  uploadLogo,
  handleError,
};
