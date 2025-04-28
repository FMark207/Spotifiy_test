import { useState, useRef } from "react";
import Song from "./Song";
import data from "../data.json";
import "./Artists.module.css";

function Artists() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const audioRef = useRef(null);

    const kingVon = data.artists.find(artist => artist.name === "King Von");
    const songs = kingVon ? kingVon.songs : [];

    const albums = [...new Set(songs.map(song => song.album))];

    function handleSongClick(index, filename) {
        if (activeIndex === index) {
            audioRef.current.pause();
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            audioRef.current.src = `/src/songs/${filename}`;
            audioRef.current.play();
        }
    }

    function handleAlbumChange(event) {
        setSelectedAlbum(event.target.value);
    }

    const filteredSongs = selectedAlbum
        ? songs.filter(song => song.album === selectedAlbum)
        : songs;

    return (
        <>
            <h2>Sort By</h2>
            <select onChange={handleAlbumChange} value={selectedAlbum}>
                <option value="">All Albums</option>
                {albums.map((album, index) => (
                    <option key={index} value={album}>
                        {album}
                    </option>
                ))}
            </select>
            <audio ref={audioRef} />
            {filteredSongs.map((song, index) => (
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