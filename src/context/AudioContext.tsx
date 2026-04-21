"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
  setAudioSource: (src: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    /// Initialize audio element only on the client //
    audioRef.current = new Audio("/audio/cinematic-bg.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback blocked", e));
    }
    setIsPlaying(!isPlaying);
  };

  const setAudioSource = (src: string) => {
    if (!audioRef.current) return;
    const wasPlaying = isPlaying;

    audioRef.current.src = src;
    if (wasPlaying) {
      audioRef.current.play().catch(e => console.error("Audio playback blocked", e));
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, setAudioSource }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};