
import "./VideoModal.css";
import React from "react";

function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>{video.title}</h3>
        <p>{video.description}</p>

        <div className="video-wrapper"> 
          <iframe
            src={video.url}
            width="100%"
            height="400"
            allow="autoplay"
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
