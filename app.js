const fileInput = document.getElementById('file-input');
const folderInput = document.getElementById('folder-input');
const uploadButton = document.getElementById('upload-button');
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('message');

uploadButton.addEventListener('click', handleUpload);

function handleUpload() {
    const files = fileInput.files;
    const folder = folderInput.files;

    if (files.length === 0 && folder.length === 0) {
        message.textContent = 'Please select files or a folder to upload.';
        return;
    }

    const totalFiles = files.length + folder.length;
    let uploadedFiles = 0;
    arrival/Desktop/uopFile/app.js
    const fileInput = document.getElementById('file-input');
    const folderInput = document.getElementById('folder-input');
    const uploadButton = document.getElementById('upload-button');
    const progressBar = document.getElementById('progress-bar');
    const message = document.getElementById('message');
    const fileList = document.getElementById('file-list');
    
    uploadButton.addEventListener('click', handleUpload);
    
    function handleUpload() {
        const files = fileInput.files;
        const folder = folderInput.files;
    
        if (files.length === 0 && folder.length === 0) {
            message.textContent = 'Please select files or a folder to upload.';
            return;
        }
    
        const totalFiles = files.length + folder.length;
        let uploadedFiles = 0;
    
        fileList.innerHTML = ''; // Clear the list before adding new items
    
        for (let i = 0; i < files.length; i++) {
            addFileToList(files[i].name);
            uploadFile(files[i]).then(() => {
                uploadedFiles++;
                updateProgress(uploadedFiles, totalFiles);
            });
        }
    
        for (let i = 0; i < folder.length; i++) {
            addFileToList(folder[i].name);
            uploadFile(folder[i]).then(() => {
                uploadedFiles++;
                updateProgress(uploadedFiles, totalFiles);
            });
        }
    }
    
    function uploadFile(file) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload', true);
            
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = (event.loaded / event.total) * 100;
                    progressBar.style.width = percentComplete + '%';
                }
            };
    
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            };
    
            const formData = new FormData();
            formData.append('file', file);
            xhr.send(formData);
        });
    }
    
    function updateProgress(uploaded, total) {
        if (uploaded === total) {
            message.textContent = 'Upload complete!';
        }
    }
    
    function addFileToList(fileName) {
        const listItem = document.createElement('li');
        listItem.textContent = fileName;
        fileList.appendChild(listItem);
    }
    for (let i = 0; i < files.length; i++) {
        uploadFile(files[i]).then(() => {
            uploadedFiles++;
            updateProgress(uploadedFiles, totalFiles);
        });
    }

    for (let i = 0; i < folder.length; i++) {
        uploadFile(folder[i]).then(() => {
            uploadedFiles++;
            updateProgress(uploadedFiles, totalFiles);
        });
    }
}

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);
        
        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.style.width = percentComplete + '%';
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve();
            } else {
                reject();
            }
        };

        const formData = new FormData();
        formData.append('file', file);
        xhr.send(formData);
    });
}

function updateProgress(uploaded, total) {
    if (uploaded === total) {
        message.textContent = 'Upload complete!';
    }
}