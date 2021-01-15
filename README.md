# Uploader

## Introduction
A library for sending files in ajax with progress bar and extensive personalization.
<br>
## Part of the capabilities of the Uploader library
● Ability to upload files.<br>
● Ability to handle various events such as when the upload is successful or failed.<br>
● Ability to add rules to restrict the uploading file.<br>
● And more ...

## Installation
How to use the library is very simple. Just add the library file to your html document and then call the init function from the Uploader object.
```
<script src="uploader.bundle.js"></script>
<script>
  Uploader.init({
    el: '#Uploader',
    target: 'upload.php',
    text: 'Upload a file',
    name: 'uploadfile',
    failResponse: '0',
    useAlert: false,
    rules: {
      size: {
        rule: 10, // max file size
          message: "File Size should be less than 10MB"
        },
        type: {
          rule: [ // allowed file mime types
            'image/png',
            'image/jpeg',
            'application/pdf'
          ],
          message: "File type is invalid"
          },
          callback: function (message) {
            // will be called when file validate was failed      
            alert(message);
          }
        },
        msg: {
          noFileSelected: "No file selected",
          uploadingStatusText: "File is uploading"
        },
        then: function () {
          // will be called when progressBar is 100%
        },
        success: {
          message: "upload was successful",
          callback: function (response, message) {
            // will be called when upload is successful
            alert(message);
          } 
        },
        failur: {
          message: "upload was failed",
          callback: function (response, message) {
            // will be called when upload is failed
            alert(message);
          }
        }
  })     
</script>
```
