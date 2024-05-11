import React, { useState, useEffect, useRef } from 'react';

const SoundToggleButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('/sounds/dog-repellant.mp3')); // Use useRef to persist the Audio object

    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, [isPlaying]);
    
    return (
      <button 
        className={`button ${isPlaying ? 'sound-on' : 'sound-off'}`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Sound OFF' : 'Sound ON'}
      </button>
    );
  }
export default SoundToggleButton;
