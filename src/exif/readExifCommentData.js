import { piexif } from "piexifjs";

function readExifCommentData(file) {
    var data;
    var reader = new FileReader();
    reader.onloadend = function(e) {
        var exifObj = piexif.load(e.target.result);
        console.log("DATA : ", exifObj["Exif"][piexif.ExifIFD.UserComment]);
        data = exifObj["Exif"][piexif.ExifIFD.UserComment];
    };
    reader.readAsDataURL(file);
    return data
};

export default readExifCommentData;