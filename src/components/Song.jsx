import albumCover from "../covers/test.png"
import styles from "./Song.module.css"

function Song() {
    return (
        <div className={styles.songContainer}>
            <img src={albumCover} />
            <p className={styles.songName}>Armed & Dangerous</p>
            <p className={styles.songArtist}>King Von</p>
            <p className={styles.songAlbum}>Welcome To O'Block</p>
            <p className={styles.songLength}>2:03</p>
        </div>
    )
}

export default Song