import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { uploadFile } from '../data';

export const UploadPhotoPage = () => {
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  const beginUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', selectedFile);

    await uploadFile('/upload', formData);
    alert('Successfully uploaded photo');
    history.push('/');
  };

  return (
    <div className="centered-container">
      <h1>Upload a new Photo</h1>
      <label>
        Title
        <input
          type="text"
          name="title"
          placeholder="Enter a title for the new photo"
          className="full-width space-after"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <input
        type="file"
        name="selectedFile"
        className="full width space-after"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        }}
      />
      <button className="full-width" onClick={beginUpload}>
        Upload
      </button>
    </div>
  );
};
