// src/components/VideoUploader.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoUploader = ({ onVideoUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onVideoUpload(file);
  }, [onVideoUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <center>
      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the video here...</p>
      ) : (
        <button><p>Drag and drop a video file here, or click to select one</p></button>
      )}
    </div>
    </center>
  );
};

export default VideoUploader;