import React, { useRef, useState } from 'react'
import './App.css'

function App() {
  const [filename, setFilename] = useState("")
  const [duration, setDuration] = useState(0)

  const inputRef  = useRef<HTMLInputElement>(null);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    const audioCtx = new window.AudioContext()
    const audio: AudioBuffer = await audioCtx.decodeAudioData(await file.arrayBuffer())

    setFilename(file.name)
    setDuration(audio.duration)
  }

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Playlist</h1>
        <div className="bottom">
          <button className="add-song" onClick={handleButtonClick}>Add Song</button>
        </div>
        <h2>filename: {filename} duration: {Math.round(duration)}</h2>
        <input ref={inputRef} type='file' hidden onChange={handleFileUpload}/>
      </div>
    </>
  )
}

export default App
