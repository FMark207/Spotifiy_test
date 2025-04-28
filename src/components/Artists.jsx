import { useState, useRef } from "react";
import Song from "./Song";
import data from "../data.json"; 

function Artists() {
    const [activeIndex, setActiveIndex] = useState(null);
    const audioRef = useRef(null); // Reference for the audio element

    const kingVon = data.artists.find(artist => artist.name === "King Von");
    const songs = kingVon ? kingVon.songs : [];

    function handleSongClick(index, filename) {
        if (activeIndex === index) {
            // If the same song is clicked, pause it
            audioRef.current.pause();
            setActiveIndex(null);
        } else {
            // Otherwise, play the selected song
            setActiveIndex(index);
            audioRef.current.src = `/src/songs/${filename}`;
            audioRef.current.play();
        }
    }

    return (
        <>
            <audio ref={audioRef} />
            {songs.map((song, index) => (
                <Song
                    key={index}
                    name={song.title}
                    artist="King Von"
                    album={song.album}
                    length={song.duration}
                    active={index === activeIndex}
                    onClick={() => handleSongClick(index, song.filename)}
                    image={song.image}
                    filename={song.filename}
                />
            ))}
        </>
    );
}

export default Artists;