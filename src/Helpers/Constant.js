// upload bar class change
export const _uploadBarStatus = {
    uploading: {
        name: 'warning',
        text: 'Uploading file...'
    },
    successful: {
        name: 'success',
        text: 'File uploaded successfuly'
    }
};
Object.freeze(_uploadBarStatus);

// default success message
export const defaultSuccessUploadMessage = 'File uploaded successfuly';
export const defaultFailurUploadMessage = 'File was not uploaded successfuly';
