import styled, { css } from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const StyledHeader = styled.header`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 400px;

  @media (max-width: 480px) {
    bottom: 20px;
    top: auto;
  }
`;


const BackgroundVideo = styled.video`
  bottom: 0;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  right: 0;
  width: 100vw;
  z-index: -1;
`;

const Logo = styled.svg`
  @keyframes example {
    0%   {fill: red;}
    25%  {fill: yellow;}
    50%  {fill: blue;}
    85% {fill: green;}
    100% {fill: red;}
  }

  ${({ showAnimation }) => showAnimation && css`
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  `}
`;

const PageSection = styled.section`
  align-items: center;
  color: ${({ textColor }) => textColor};
  display: flex;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 100;
  text-transform: uppercase;
  min-height: 100vh;

  ${({ fullWidth }) => fullWidth && css`
    justify-content: center;
    padding: 0 20px;
    width: 100vw;
  `}

  @media (max-width: 768px) {
    font-weight: 300;
  }
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Paragraph = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  div {
    margin-bottom: 40px;
  }

  a {
    font-size: 3rem;
    border-bottom: 1px dashed transparent;
    transition: all 0.5s;

    :hover {
      border-color: ${({ textColor }) => textColor};
      letter-spacing: 10px;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;

      :hover {
        letter-spacing: 3px;
      }
    }
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .sp-progress-bar {
    progress[value] {
      background-color: green;
      color: red;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
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

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  :active {
    opacity: 0.3;
  }
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

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  :active {
    opacity: 0.3;
  }
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const PlaylistContainer = styled.div`
  color: deepskyblue;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlaylistItem = styled.div`
  color: deepskyblue;
  font-size: 2rem;
  border-bottom: 1px dashed deepskyblue;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

function Layout({ children, logoColor, videoName, nextPage, showAnimation, textColor = "black", audioPlayerColor = 'bada55' }) {
let Amplitude;
const [songs, setSongs] = useState([]);
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
        "cover_art_url": ""
      },
      {
        "name": "MT2",
        "artist": "Super Public",
        "album": "More Than A Marathon",
        "url": "https://s3.amazonaws.com/super-public-site-assets/mt2.mp3",
        "cover_art_url": ""
      },
      {
        "name": "Cloud Cover",
        "artist": "Super Public",
        "album": "More Than A Marathon",
        "url": "https://s3.amazonaws.com/super-public-site-assets/cloud-cover.mp3",
        "cover_art_url": ""
      },
      {
        "name": "Effock",
        "artist": "Super Public",
        "album": "More Than A Marathon",
        "url": "https://s3.amazonaws.com/super-public-site-assets/effock.mp3",
        "cover_art_url": ""
      }
    ],
    playlists: {
      "more_than_a_marathon": {
        songs: [0, 1],
        title: 'More Than A Marathon'
      },
    }
  });
  setSongs(Amplitude.getSongs());
}, []);

  return (
  <Container>
    <Head>
      <title>Super Public</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300&display=swap" rel="stylesheet" />
    </Head>

    <BackgroundVideo poster={`https://s3.amazonaws.com/super-public-site-assets/drive-loop.jpg`} muted playsInline="playsinline" autoPlay="autoplay" loop="loop" id="myVideo" disablePictureInPicture >
      {/* <source src={`https://s3.amazonaws.com/super-public-site-assets/drive-loop.webm`} type="video/webm" />
      <source src={`https://s3.amazonaws.com/super-public-site-assets/drive-loop.mp4`} type="video/mp4" /> */}
    </BackgroundVideo>

    {/* <BackgroundVideo poster={`https://res.cloudinary.com/bcimbali/video/upload/v1/Videos/${videoName}.jpg`} muted playsInline="playsinline" autoPlay="autoplay" loop="loop" id="myVideo" disablePictureInPicture >
      <source src={`https://res.cloudinary.com/bcimbali/video/upload/v1/Videos/${videoName}.webm`} type="video/webm" />
      <source src={`https://res.cloudinary.com/bcimbali/video/upload/v1/Videos/${videoName}.mp4`} type="video/mp4" />
    </BackgroundVideo> */}

    <PageSection>
      <StyledHeader>
        <Link href={`/${nextPage}`}>
        <Logo fill={logoColor} showAnimation={showAnimation} version="1.0" xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox="0 0 372.000000 170.000000" preserveAspectRatio="none"> <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)" className="new-logo" stroke="none"> <path d="M2034 1677 c-22 -4 -134 -7 -249 -7 -189 1 -216 -1 -257 -19 -25 -10 -49 -24 -52 -30 -12 -19 -27 -12 -24 12 4 28 -22 31 -190 22 l-123 -7 6 -225 5 -226 -25 -33 c-25 -33 -28 -34 -101 -34 -66 0 -78 3 -99 25 l-25 24 0 225 c0 180 -3 227 -14 239 -18 18 -154 12 -175 -8 -12 -12 -18 -12 -42 0 -32 17 -30 17 -274 12 -211 -5 -255 -14 -308 -61 -40 -36 -77 -112 -77 -159 0 -59 42 -157 79 -186 l34 -26 228 0 c209 0 228 -1 248 -19 12 -11 21 -31 21 -47 0 -41 -49 -59 -175 -64 -147 -5 -220 17 -227 69 -3 19 -10 21 -96 24 -73 2 -93 0 -98 -12 -10 -25 15 -92 50 -136 58 -73 118 -92 305 -94 l96 -1 1 -35 c1 -19 5 -219 8 -445 5 -316 9 -413 19 -423 10 -10 32 -11 93 -5 l79 8 3 137 3 137 35 -21 c34 -20 46 -21 233 -16 109 3 206 10 217 16 14 7 39 5 94 -9 63 -15 89 -17 174 -9 66 7 110 16 132 29 l33 20 6 -30 c4 -16 12 -29 18 -30 31 -3 178 2 225 7 47 6 52 9 52 30 0 29 4 30 40 4 52 -37 159 -52 318 -44 120 6 147 10 168 26 24 19 27 19 92 4 58 -15 85 -15 207 -6 183 15 347 15 374 1 24 -13 425 -12 451 1 8 4 32 15 53 24 81 36 131 162 86 219 -4 6 -47 10 -96 9 l-88 0 -17 -36 c-10 -20 -25 -39 -35 -42 -10 -3 -71 -6 -135 -8 -109 -3 -119 -1 -139 19 -25 24 -33 77 -32 200 2 136 31 158 210 156 127 -1 149 -16 155 -103 l3 -35 66 -3 c36 -2 77 2 91 7 26 10 26 11 21 93 -3 56 -11 91 -22 108 -24 34 -120 71 -207 79 -75 7 -317 -2 -391 -14 l-43 -8 0 32 c0 39 -13 45 -106 45 -110 1 -108 8 -99 -216 4 -104 8 -196 9 -206 1 -11 -8 -18 -24 -20 -33 -5 -50 -28 -50 -72 0 -48 -15 -60 -76 -60 -93 0 -92 -5 -96 287 l-4 252 62 -6 c34 -3 74 -3 89 1 l27 7 -7 213 c-8 237 -2 269 53 283 82 21 152 -5 170 -65 l12 -39 97 -1 c54 -1 103 2 109 6 8 5 10 36 5 107 -11 158 -27 171 -211 178 -127 5 -194 -8 -226 -44 l-19 -21 -5 33 -5 34 -105 2 c-322 7 -562 7 -596 0z m493 -41 c9 -8 23 -134 23 -203 0 -47 -4 -75 -12 -80 -7 -4 -107 -9 -223 -10 -238 -3 -235 -2 -235 -83 0 -90 47 -120 200 -129 l105 -6 7 -50 c4 -27 5 -52 2 -55 -7 -7 -288 -2 -337 6 -34 6 -38 9 -32 28 35 108 36 124 32 296 -4 180 -13 228 -50 259 -10 7 -17 19 -17 27 0 11 49 12 267 9 146 -3 268 -7 270 -9z m176 -3 c4 -2 7 -18 7 -34 0 -45 25 -47 68 -7 65 62 85 65 277 43 97 -11 115 -35 115 -150 l0 -65 -69 0 -69 0 -19 38 c-24 49 -71 72 -147 72 -70 0 -123 -27 -132 -68 -3 -15 -8 -34 -11 -42 -2 -8 -4 -106 -4 -217 l2 -203 -43 0 c-24 0 -53 3 -65 6 l-23 6 24 29 c25 30 41 106 34 164 -3 27 -7 30 -38 30 -34 1 -35 2 -38 43 -3 40 -2 43 28 48 47 10 60 37 60 124 0 64 -5 83 -30 129 -17 30 -30 58 -30 64 0 9 85 1 103 -10z m-1449 -95 c5 -72 10 -502 7 -565 -1 -8 -16 -13 -41 -13 -37 0 -40 2 -40 28 0 15 -3 38 -7 50 -6 23 -7 23 -42 -17 -35 -40 -39 -42 -119 -51 -46 -5 -98 -7 -115 -4 -58 9 -118 27 -114 33 27 50 47 110 47 141 0 72 -22 141 -58 178 -30 32 -33 41 -30 86 3 50 4 51 36 52 18 1 35 4 39 7 10 11 -27 83 -58 113 -15 15 -26 31 -23 36 3 4 34 8 70 8 l64 0 1 -87 c0 -49 1 -142 0 -208 0 -143 9 -177 53 -205 41 -24 139 -27 192 -5 58 24 63 49 57 291 -6 233 -9 219 53 223 19 1 22 -6 28 -91z m168 35 l3 -58 20 21 c11 12 30 33 43 47 28 32 140 49 294 44 132 -4 151 -15 136 -80 -5 -24 -7 -124 -3 -237 4 -137 3 -191 -4 -180 -6 8 -11 31 -11 51 0 22 -6 39 -13 42 -11 4 -12 18 -5 69 9 64 3 149 -13 180 -5 9 -25 26 -45 39 -31 19 -48 22 -133 20 -218 -3 -251 -29 -251 -198 0 -180 12 -195 155 -203 l90 -5 0 -60 0 -60 -53 1 c-64 2 -107 19 -150 58 -18 17 -37 31 -43 31 -7 0 -10 -54 -10 -162 l2 -163 -46 0 c-42 0 -45 2 -47 28 -6 87 -4 143 3 148 5 3 9 158 9 345 l0 339 35 0 34 0 3 -57z m-820 34 c47 -1 90 -6 94 -10 5 -4 8 -31 9 -60 0 -52 0 -52 -30 -51 -17 1 -48 13 -69 28 -37 25 -46 26 -161 26 -141 0 -213 -17 -244 -57 -23 -29 -28 -85 -8 -101 7 -6 104 -13 222 -17 149 -4 222 -11 253 -21 l42 -16 2 -86 c1 -48 2 -122 4 -164 2 -75 1 -77 -26 -88 -39 -16 -451 -17 -508 -1 -32 9 -52 24 -82 62 -22 28 -40 62 -40 75 0 23 3 24 65 24 61 0 65 -1 71 -25 11 -46 72 -68 188 -67 148 1 203 10 237 40 26 21 30 31 27 66 -3 35 -8 43 -41 62 -24 13 -58 22 -94 23 -31 1 -59 3 -62 6 -4 2 -70 -1 -148 -7 -165 -13 -193 -6 -222 51 -29 57 -42 132 -30 175 12 43 62 103 98 119 26 10 292 26 341 19 14 -1 64 -4 112 -5z m722 -33 c3 -26 6 -169 6 -319 0 -230 -2 -274 -15 -285 -13 -11 -15 -7 -15 26 0 22 -1 171 -3 332 -1 209 1 292 9 292 6 0 14 -21 18 -46z m1288 -20 c20 -57 23 -165 6 -182 -7 -7 -20 -12 -30 -12 -16 0 -18 11 -18 126 0 139 11 158 42 68z m-628 9 c39 -78 54 -381 21 -460 -19 -49 -29 -53 -47 -20 -10 16 -13 82 -13 247 0 257 6 295 39 233z m-1211 -41 c17 -29 17 -32 2 -38 -21 -8 -31 3 -39 44 -7 42 11 39 37 -6z m-230 -12 c16 0 36 -10 49 -25 17 -20 31 -25 70 -25 l48 0 0 -51 c0 -45 -2 -50 -17 -44 -46 19 -100 25 -248 26 -183 2 -218 7 -223 32 -4 20 21 52 53 70 24 13 155 26 205 21 19 -2 47 -4 63 -4z m1282 -30 c10 -8 21 -26 27 -40 11 -30 12 -190 0 -202 -4 -4 -43 -11 -85 -14 l-77 -7 0 -33 0 -34 -70 0 c-99 0 -135 17 -143 66 -10 60 -8 150 4 199 9 37 17 46 50 59 21 9 57 15 79 14 22 -1 42 1 45 4 12 11 154 1 170 -12z m723 -194 c5 -41 -11 -51 -86 -51 l-67 0 -5 -40 -5 -40 -95 3 c-125 5 -160 21 -177 82 -9 30 -10 47 -2 55 8 8 373 25 424 20 6 -1 11 -14 13 -29z m-1775 -16 c10 -16 20 -58 24 -93 5 -53 2 -70 -17 -106 -16 -33 -24 -41 -31 -30 -11 17 -12 259 -1 259 4 0 16 -13 25 -30z m1672 -80 c0 -8 -8 -16 -17 -18 -13 -2 -18 3 -18 18 0 15 5 20 18 18 9 -2 17 -10 17 -18z m99 -53 c12 -91 2 -113 -58 -122 -24 -4 -49 -4 -55 0 -6 3 -11 30 -11 59 0 41 5 57 21 72 12 10 25 29 30 42 7 18 15 23 37 20 25 -3 28 -7 36 -71z m76 28 c0 -43 -16 -95 -30 -95 -10 0 -20 53 -20 101 0 35 3 39 25 39 23 0 25 -4 25 -45z m-780 15 c0 -33 -122 -40 -128 -7 -3 15 5 17 62 17 36 0 66 -4 66 -10z m39 -122 c1 -46 0 -47 -31 -50 -18 -2 -54 -1 -80 0 l-48 4 0 59 c0 54 2 59 23 60 54 1 82 9 101 29 l21 21 7 -38 c4 -21 7 -59 7 -85z m55 -4 c10 -25 7 -34 -9 -34 -9 0 -15 9 -15 25 0 28 15 34 24 9z m-436 -46 c20 -19 37 -24 108 -27 92 -3 109 -15 39 -25 -24 -4 -47 -11 -49 -15 -3 -4 -5 -77 -5 -162 0 -215 0 -218 -12 -276 -7 -38 -16 -54 -30 -58 -27 -9 -120 -9 -146 -1 -36 11 -51 62 -55 176 l-3 105 50 3 c28 2 54 7 60 13 5 5 8 69 6 149 -1 77 1 140 5 140 4 0 18 -10 32 -22z m737 -30 c127 -3 150 -5 153 -19 2 -13 -8 -15 -70 -12 -40 1 -87 5 -104 7 -56 8 -245 -12 -269 -28 -27 -18 -35 -12 -35 26 0 20 5 28 18 28 10 0 27 6 37 14 15 11 27 11 69 0 28 -7 118 -14 201 -16z m319 -22 c4 -19 7 -143 7 -276 l1 -241 25 -10 c32 -12 139 -12 163 1 10 5 26 32 36 60 10 27 24 50 31 50 13 0 14 -11 17 -150 l1 -65 -85 -8 c-94 -9 -249 -2 -262 11 -4 4 -1 30 8 56 14 41 16 79 12 240 -6 211 -13 243 -67 289 -56 46 -31 71 75 76 29 1 32 -2 38 -33z m439 7 c3 -15 -1 -39 -8 -54 -17 -33 -35 -205 -29 -280 l5 -56 -46 -1 c-29 -2 -47 2 -49 10 -3 7 -7 99 -10 205 l-6 192 27 4 c16 2 47 5 69 6 38 1 42 -1 47 -26z m-2229 11 c19 -7 21 -24 3 -24 -7 0 -29 -11 -50 -25 -36 -25 -37 -25 -37 -5 0 12 13 28 33 40 37 23 31 22 51 14z m1116 -65 c0 -38 4 -69 9 -69 5 0 22 11 38 24 30 25 62 38 103 41 14 2 68 8 120 15 75 9 110 9 167 0 l72 -13 1 -249 c0 -138 5 -271 11 -296 11 -50 4 -61 -41 -63 -327 -11 -360 -7 -421 48 -44 40 -56 37 -61 -17 -3 -31 -7 -35 -34 -38 l-31 -3 -6 68 c-4 37 -7 184 -7 325 0 244 -1 258 -19 268 -11 5 -29 10 -41 10 -12 0 -19 3 -16 8 2 4 38 8 80 9 l76 2 0 -70z m-1238 -1 c1 -18 2 -42 3 -53 1 -24 35 -22 49 3 5 10 22 29 37 45 l27 27 186 0 c102 0 189 -1 193 -2 3 -2 5 -84 4 -183 -1 -99 3 -223 10 -275 19 -161 29 -142 -86 -158 -80 -11 -121 -12 -207 -3 -59 6 -114 14 -122 17 -8 3 -26 23 -41 45 -44 67 -50 51 -50 -132 l0 -164 -52 -3 -53 -3 0 38 c-1 21 -5 58 -11 83 -9 45 -30 728 -22 743 2 4 33 7 69 7 l64 0 2 -32z m622 6 c9 -25 7 -84 -4 -84 -5 0 -12 16 -16 35 -3 19 -10 38 -15 41 -5 3 -7 10 -4 15 10 14 32 11 39 -7z m433 -89 c1 -55 4 -160 7 -233 3 -73 2 -170 -1 -216 -6 -81 -7 -84 -32 -89 -33 -7 -44 4 -43 42 1 42 -13 47 -49 17 -16 -14 -49 -31 -72 -37 -44 -12 -260 -9 -273 3 -4 4 3 30 15 57 24 57 32 161 19 255 -11 79 -5 106 26 106 23 0 24 -2 29 -112 2 -62 10 -127 16 -144 17 -45 58 -64 138 -65 81 -1 120 12 132 43 5 13 10 122 10 243 2 233 3 238 51 233 25 -3 25 -4 27 -103z m77 78 c7 -41 7 -478 0 -551 -4 -39 -11 -62 -19 -62 -9 0 -14 57 -19 223 -3 122 -9 266 -12 320 l-6 97 25 0 c20 0 27 -6 31 -27z m1787 16 c30 -7 62 -21 76 -35 21 -22 24 -31 21 -96 l-3 -73 -55 0 c-51 0 -55 2 -58 25 -7 62 -13 71 -60 92 -41 19 -59 20 -165 15 -176 -9 -197 -31 -197 -203 0 -116 14 -167 53 -200 29 -24 35 -25 146 -23 135 3 166 11 186 49 12 23 22 28 70 33 77 8 85 3 85 -48 0 -77 -15 -102 -76 -124 -48 -18 -79 -21 -275 -22 -202 0 -224 1 -240 18 -16 15 -19 41 -23 173 -3 85 -8 212 -12 282 l-7 128 24 9 c34 14 447 13 510 0z m-2336 -89 c10 -28 15 -93 16 -213 2 -146 0 -179 -16 -215 -11 -26 -21 -40 -27 -34 -5 5 -13 49 -18 98 -11 102 -13 427 -3 437 9 9 31 -24 48 -73z m1218 35 c27 -37 37 -113 40 -295 2 -139 -1 -170 -15 -195 l-16 -30 -12 30 c-6 17 -14 62 -16 100 -7 123 -11 415 -5 415 3 0 14 -12 24 -25z m568 -167 c3 -149 0 -291 -7 -297 -14 -15 -19 33 -19 202 0 172 5 227 19 227 2 0 6 -60 7 -132z m-76 -178 c8 -25 -2 -93 -21 -137 -14 -35 -38 -43 -48 -17 -8 21 -8 159 1 167 3 4 19 7 34 7 19 0 30 -6 34 -20z m52 -152 c12 -17 20 -35 17 -40 -6 -9 -68 -11 -77 -2 -6 7 23 74 32 74 3 0 16 -15 28 -32z"/> <path d="M2190 1549 c-51 -8 -71 -22 -96 -69 -34 -63 -23 -75 72 -83 98 -9 242 -9 283 -1 28 6 31 10 31 43 -1 87 -52 121 -175 118 -44 -1 -96 -5 -115 -8z m246 -52 c26 -31 31 -62 12 -69 -7 -3 -84 -6 -170 -7 l-158 -2 0 29 c0 59 50 78 208 77 79 0 85 -2 108 -28z"/> <path d="M1985 808 c-33 -5 -68 -17 -77 -26 -35 -34 -52 -248 -25 -302 7 -14 33 -36 57 -50 41 -23 55 -25 153 -24 59 1 127 7 152 14 76 21 99 98 75 259 -10 71 -27 95 -85 122 -45 21 -146 23 -250 7z m246 -33 c44 -23 59 -63 64 -171 4 -107 -5 -138 -44 -153 -51 -20 -183 -29 -245 -16 -95 20 -104 40 -97 230 2 51 8 85 17 94 27 29 257 40 305 16z"/> <path d="M730 798 c-64 -27 -70 -33 -81 -72 -10 -37 -9 -84 7 -211 2 -22 13 -51 23 -65 25 -35 116 -50 229 -38 129 14 161 24 174 56 17 43 13 244 -6 280 -29 56 -47 62 -191 61 -71 0 -141 -5 -155 -11z m263 -24 c51 -9 65 -38 73 -155 5 -73 3 -102 -9 -130 l-15 -36 -118 -7 c-118 -7 -195 1 -217 23 -13 13 -25 100 -26 187 -1 91 15 107 116 115 120 9 155 9 196 3z"/> <path d="M2816 1241 c-9 -14 -4 -124 5 -136 10 -14 195 -13 207 0 6 6 7 38 3 75 l-6 65 -102 3 c-58 1 -104 -1 -107 -7z m183 -27 c3 -3 6 -23 6 -44 1 -44 -9 -50 -87 -50 -70 0 -78 6 -78 55 0 25 5 46 13 49 14 6 139 -2 146 -10z"/> </g> </Logo>
        </Link>
      </StyledHeader>
    </PageSection>

        <PageSection textColor={textColor}>
          <InnerContainer>
            <Paragraph>
            A sheet music book for Prince’s “Purple Rain” spotted in the back of Cimbalik’s Chevrolet during a session at a mutual friend’s studio was the genesis of Super Public. Intrigued by each other’s knowledge and skill, it was only a matter of days before a TR-707 drum machine and Juno 6 analog synthesizer were passed back and forth, crafting patterns and textures over the course of the following month. As the songs matured, it became clear that both artists drew inspiration from the geography and industry of Southeastern Michigan. An afternoon spent on Belle Isle watching sheets of ice flow from Lake St. Clair down the Detroit River typified a prelude to a particularly fruitful late night recording session. Cimbalik and Thornburgh have since relocated, to Albuquerque and Chicago, respectively, continuing to write, produce and perform.
            </Paragraph>
          </InnerContainer>
        </PageSection>
        <PageSection fullWidth>

          {Amplitude && (
            <InnerContainer>
              <RadioWrapper>
                <SongTitle data-amplitude-song-info="name"></SongTitle>
                <ButtonsWrapper>
                  <PlayButton className="amplitude-play">PLAY</PlayButton>
                  <PauseButton className="amplitude-pause">PAUSE</PauseButton>
                </ButtonsWrapper>
                <progress style={{ width: '100%' }} className="amplitude-song-played-progress sp-progress-bar"></progress>
                <TimeDisplay>
                  <SongCurrentTime className="amplitude-current-time"></SongCurrentTime>
                  <SongDurationTime className="amplitude-duration-time"></SongDurationTime>
                </TimeDisplay>
                <PlaylistContainer>{songs.map((song, idx) => (
                    <PlaylistItem key={song.name} onClick={() => (
                      Amplitude.playSongAtIndex(idx))}
                    >
                      {song.name}
                    </PlaylistItem>
                  )
                )}
                </PlaylistContainer>
              </RadioWrapper>
            </InnerContainer>)
          }

        </PageSection>
        <PageSection textColor={textColor}>
          <InnerContainer>
            <LinksContainer textColor={textColor}>
            <div>
              <a target="_blank" href="http://chambrayrecords.com/cham009">Lottery of Life</a>
            </div>
            <div>
              <a target="_blank" href="http://chambrayrecords.com/cham002">More Than a Marathon</a>
            </div>
            <div>
              <a target="_blank" href="http://chambrayrecords.com/cham007">Music Is My Jam</a>
            </div>
            </LinksContainer>
          </InnerContainer>
        </PageSection>
    {children}
  </Container>
  )
}

export default Layout