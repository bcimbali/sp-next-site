'use client'

import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  background: rgba(0, 0, 0, 1);
  border-radius: 1rem;
  max-width: 1000px;
  padding: 1rem;
  width: 100%;
`;

const PauseButton = styled.div`
  align-items: center;
  background: deepskyblue;
  border: 1px solid black;
  display: flex;
  font-size: 2rem;
  height: 100px;
  justify-content: center;
  opacity: 0.8;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

const PlayButton = styled.div`
  align-items: center;
  background: deepskyblue;
  border: 1px solid black;
  display: flex;
  font-size: 2rem;
  height: 100px;
  justify-content: center;
  opacity: 0.8;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

const PlaylistContainer = styled.div`
  color: deepskyblue;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const PlaylistItem = styled.div`
  border-bottom: 1px solid deepskyblue;
  color: deepskyblue;
  display: flex;
  font-size: 2rem;
  padding: 5px 0;

  &:hover {
    background-color: rgba(0, 191, 255, 0.3);
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ $isActive }) => $isActive && css`
    background-color: rgba(0, 191, 255, 0.2);
  `}
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'alarm-clock';

  .sp-progress-bar {
    progress[value] {
      background-color: green;
      color: red;
    }
  }

  .song-slider {
    margin-top: 45px; 

    -webkit-appearance: none;
    appearance: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: #6FE19E;
      cursor: pointer;
      height: 25px;
      width: 25px;
    }

    &::-moz-range-thumb {
      /* Styles for Firefox */
      background: #6FE19E;
      border-radius: 0;
      cursor: pointer;
      height: 25px;
      width: 25px;
    }

    &::-ms-thumb {
      /* Styles for IE */
      background: #6FE19E;
      cursor: pointer;
      height: 25px;
      width: 25px;
    }

    &::-webkit-slider-runnable-track {
      /* Styles for Chrome */
      background-color: deepskyblue;
    }
    &::-moz-range-track {
      /* Styles for Firefox */
      background-color: deepskyblue;
      height: 25px;
    }
    &::-ms-track {
      /* Styles for IE */
      background-color: deepskyblue;
      height: 25px;
    }
  }
`;

const SongCurrentTime = styled.div`
  color: deepskyblue;
  font-size: 2rem;
  text-align: center;
`;

const SongDurationTime = styled.div`
  color: deepskyblue;
  font-size: 2rem;
  text-align: center;
`;

const SongTitle = styled.div`
  color: deepskyblue;
  font-size: 3rem;
  text-align: center;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

function AudioPlayer() {
  let Amplitude;
  const [songs, setSongs] = useState([]);
  const [currentSongIdx, setCurrentSongIdx] = useState(0);
    if (typeof window !== 'undefined') {
      Amplitude = require('amplitudejs');
    }

    useEffect(() => {Amplitude.init({
      songs: [
        {
          "name": "Crime Scene",
          "artist": "Super Public",
          "album": "More Than A Marathon",
          "url": "https://s3.amazonaws.com/super-public-site-assets/01+Crime+Scene.mp3",
          "cover_art_url": "",
          "key": "kjasdfijfjafsdaf"
        },
        {
          "name": "MT2",
          "artist": "Super Public",
          "album": "More Than A Marathon",
          "url": "https://s3.amazonaws.com/super-public-site-assets/mt2.mp3",
          "cover_art_url": "",
          "key": "kwerewqeqwesfsdfwv"
        },
        {
          "name": "Cloud Cover",
          "artist": "Super Public",
          "album": "More Than A Marathon",
          "url": "https://s3.amazonaws.com/super-public-site-assets/cloud-cover.mp3",
          "cover_art_url": "",
          "key": "werqweqwedsafasvcxzv"
        },
        {
          "name": "Effock",
          "artist": "Super Public",
          "album": "More Than A Marathon",
          "url": "https://s3.amazonaws.com/super-public-site-assets/effock.mp3",
          "cover_art_url": "",
          "key": "ioerjjknvkjnioqenciunw"
        },
        {
          "name": "Music is my Jam",
          "artist": "Super Public",
          "album": "Lottery of Life",
          "url": "https://s3.amazonaws.com/super-public-site-assets/music-is-my-jam.mp3",
          "cover_art_url": "",
          "key": "qwemcmndkfjfwueyritwefihdssd"
        },
        {
          "name": "Thaw",
          "artist": "Super Public",
          "album": "Lottery of Life",
          "url": "https://s3.amazonaws.com/super-public-site-assets/thaw.mp3",
          "cover_art_url": "",
          "key": "qwnvjndsywrgvyrwbvo"
        },
        {
          "name": "Why are we Whispering",
          "artist": "Super Public",
          "album": "Lottery of Life",
          "url": "https://s3.amazonaws.com/super-public-site-assets/why-are-we-whispering.mp3",
          "cover_art_url": "",
          "key": "nsvyewuwvkvheuivnwin"
        }
      ],
      callbacks: {
        song_change: function(){
          setCurrentSongIdx(Amplitude.getActiveIndex());
        }
      }
    });
    setSongs(Amplitude.getSongs());
    Amplitude.pause();
  }, []);

  return (
    <>
    {Amplitude && (
      <InnerContainer>
        <RadioWrapper>
          <SongTitle data-amplitude-song-info="name"></SongTitle>
          <ButtonsWrapper>
            <PlayButton className="amplitude-play">
              <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 26L0.25 51.9808V0.0192375L40 26Z" fill="#111111"/>
              </svg>
            </PlayButton>
            <PauseButton className="amplitude-pause">
              <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="54" fill="#111111"/>
                <rect x="17" width="12" height="54" fill="#111111"/>
              </svg>
            </PauseButton>
          </ButtonsWrapper>
          <input style={{ width: '100%' }} type="range" className="amplitude-song-slider song-slider" step=".1" />
          <TimeDisplay>
            <SongCurrentTime className="amplitude-current-time"></SongCurrentTime>
            <SongDurationTime className="amplitude-duration-time"></SongDurationTime>
          </TimeDisplay>
          <PlaylistContainer>{songs.map((song, idx) => (
            <div key={song.key}>
              <PlaylistItem $isActive={currentSongIdx === idx} onClick={() => (
                Amplitude.playSongAtIndex(idx))}
              >
                {song.name}
              </PlaylistItem>
            </div>
            )
          )}
          </PlaylistContainer>
        </RadioWrapper>
      </InnerContainer>
    )}
    </>
  )
}

export default AudioPlayer;
