import React, { useState, useRef } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log('Upload successful:', result);

      // Reset after successful upload
      setSelectedImage(null);
      setPreviewImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <button onClick={triggerFileInput}>Select Image</button>
      
      {previewImage && (
        <div>
          <img 
            src={previewImage} 
            alt="Preview" 
            style={{ maxWidth: '200px', maxHeight: '200px' }} 
          />
        </div>
      )}
      
      {selectedImage && (
        <button onClick={uploadImage}>Upload Image</button>
      )}
    </div>
  );
};

export default ImageUploader;