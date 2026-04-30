import React, { useState } from 'react';
import styles from '../../styles/Utility/Upload.module.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Upload = ({ handle, type }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState('');

  const handleFile = async (file) => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'medilocate');
      formData.append('folder', 'division');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://api.cloudinary.com/v1_1/dicwszs3e/image/upload`);

      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          setProgress(Math.round((event.loaded / event.total) * 100));
        }
      });

      xhr.onload = () => {
        setUploading(false);

        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          setImage(res.secure_url);

          handle({
            name: file.name,
            size: file.size,
            type: file.type,
            url: res.secure_url,
          });
        } else {
          alert('Upload failed!');
        }
      };

      xhr.onerror = () => {
        setUploading(false);
        alert('Upload error!');
      };

      xhr.send(formData);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.uploadBox}>
        <input
          type="file"
          accept={type || '.png, .jpg, .jpeg'}
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />

        {!image && !uploading && (
          <div className={styles.placeholder}>
            <div className={styles.icon}>
              <CloudUploadIcon />
            </div>

          </div>
        )}
          {uploading && (
          <div className={styles.progressBox}>
            <p>Uploading... {progress}%</p>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        {image && !uploading && (
          <div className={styles.preview}>
            <img src={image} alt="preview" />
            <p>Uploaded ✓  (click on Image to re-upload)</p>
          </div>
        )}

      </label>
    </div>
  );
};

export default Upload;