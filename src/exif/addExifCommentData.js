import { piexif } from "piexifjs";

function addExifCommentData(file, data) {
    var exif = {};
    exif[piexif.ExifIFD.UserComment] = data;

    var exifObj = {"0th": {}, "Exif":exif, "GPS": {}};
    var exifbytes = piexif.dump(exifObj);

    var reader = new FileReader();
    reader.onload = function(e) {
        var inserted = piexif.insert(exifbytes, e.target.result);

        var image = new Image();
        image.src = inserted;

        let down = document.getElementById("donwload");
        down.appendChild(image);
        
    };
    reader.readAsDataURL(file);
}


export default addExifCommentData;