import React from "react";

export default function ImageUpload({ setImage, preview, setPreview }) {
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleImage} />

      {preview && (
        <img src={preview} alt="preview" className="preview-img" />
      )}
    </div>
  );
}