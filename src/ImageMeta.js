import React from "react";
import addExifCommentData from "./exif/addExifCommentData";
import readExifCommentData from './exif/readExifCommentData';

function ImageMeta() {
  function handleChange({
    target: {
      files: [file]
    }
  }) {
    if (file && file.name) {
      console.log(readExifCommentData(file));
      console.log(addExifCommentData(file, "Umesh"));
      console.log(readExifCommentData(file));
    }
  }

  return (
    <input
      type="file"
      id="file"
      accept=".jpg, .png, .heif, .heic"
      onChange={handleChange}
    />
  );
}

export default ImageMeta;


/* 

function ImageMeta() {
  function handleChange({
    target: {
      files: [file]
    }
  }) {
    if (file && file.name) {
      var reader = new FileReader();
      reader.onloadend = function(e) {
          var exifObj = piexif.load(e.target.result);
          console.log(exifObj);
          for (var ifd in exifObj) {
              if (ifd == "thumbnail") {
                  continue;
              }
              console.log("-" + ifd);
              for (var tag in exifObj[ifd]) {
                  console.log("  " + piexif.TAGS[ifd][tag]["name"] + ":" + exifObj[ifd][tag]);
              }
          }
      };
      reader.readAsDataURL(file);

    }
  }

  return (
    <input
      type="file"
      id="file"
      accept=".jpg, .png, .heif, .heic"
      onChange={handleChange}
    />
  );
}

*/