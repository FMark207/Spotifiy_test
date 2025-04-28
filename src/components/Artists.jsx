import { useState } from "react"
import Song from "./Song"
import data from "../data.json" 
function Artists() {
    const [activeIndex, setActiveIndex] = useState(null)

    const kingVon = data.artists.find(artist => artist.name === "King Von")
    const songs = kingVon ? kingVon.songs : []

    function handleSongClick(index) {
        setActiveIndex(index)
    }

    return (
        <>
            {songs.map((song, index) => (
                <Song
                    key={index}
                    name={song.title}
                    artist="King Von"
                    album={song.album}
                    length={song.duration}
                    active={index === activeIndex}
                    onClick={() => handleSongClick(index)}
                    image={song.image}
                    filename={song.filename}
                />
            ))}
        </>
    )
}

export default Artists