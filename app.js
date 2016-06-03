(function(window, $) {
    "use strict";
    var img = $("#preImg");
    window.uploader = WebUploader.create({
        swf: 'webupload/Uploader.swf',
        server: 'fileupload.php',
        pick: { id: '#bt1', innerHTML: "bt1" },
        resize: false,
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });
    uploader.on('fileQueued', function(file) {
        $("#bt1").css("display", "none");
    });

    uploader.on('uploadProgress', function(file, percentage) {
        console.debug("进度" + percentage);
    });

    $("#ctlBtn").click(function() {
        uploader.upload();
    });


    uploader.on('uploadSuccess', function(file) {
        console.debug("uploadSuccess");
    });

    uploader.on('uploadError', function(file) {
        console.debug("uploadError");
    });

    uploader.on('uploadComplete', function(file) {
        console.debug("uploadComplete");
    });

window.testFc=function(){
    var start = new Date().getTime();
    console.log(start);
    var id = setInterval(function() {
        if (!flash.exec) {
            clearInterval(id);
        } else {
            console.log(new Date().getTime() - start);
        }
    }, 100);
}
    


}(window, jQuery))


$("#bt1show").click(function() {
    $("#bt1").css("display", "block");
});
$("#ajaxnew").click(function() {
    var uploader2 = WebUploader.create({
        swf: 'webupload/Uploader.swf',
        server: 'fileupload.php',
        pick: { id: '#bt2', innerHTML: "bt2" },
        resize: false,
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });
});

$("#ajaxadd").click(function() {
    uploader.addButton({ id: "#bt3", innerHTML: "bt3" });
});
