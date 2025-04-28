import { useState } from "react"
import Song from "./Song"

function Artists() {
    const [activeIndex, setActiveIndex] = useState(null)

    const songs = [
        { name: "Armed & Dangerous", artist: "King Von", album: "Welcome To O'Block", length: "2:03" },
        { name: "Crazy Story", artist: "King Von", album: "Grandson, Vol. 1", length: "2:22" },
        { name: "Took Her To The O", artist: "King Von", album: "Levon James", length: "3:12" },
        { name: "How It Go", artist: "King Von", album: "Welcome To O'Block", length: "3:30" },
        { name: "Wayne's Story", artist: "King Von", album: "Welcome To O'Block", length: "3:22" },
        { name: "Why He Told", artist: "King Von", album: "Welcome To O'Block", length: "3:00" },
        { name: "The Code", artist: "King Von", album: "Welcome To O'Block", length: "2:51" },
        { name: "3 A.M.", artist: "King Von", album: "Levon James", length: "2:48" }
    ]

    function handleSongClick(index) {
        setActiveIndex(index)
    }

    return (
        <>
            {songs.map((song, index) => (
                <Song
                    key={index}
                    name={song.name}
                    artist={song.artist}
                    album={song.album}
                    length={song.length}
                    active={index === activeIndex}
                    onClick={() => handleSongClick(index)}
                />
            ))}
        </>
    )
}

export default Artists