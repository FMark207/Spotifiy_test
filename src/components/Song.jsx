import albumCover from "../covers/test.png"
import styles from "./Song.module.css"

function Song(props) {
    return (
        <div className={styles.songContainer}>
            <img src={albumCover} />
            <p className={styles.songName}>{props.name}</p>
            <p className={styles.songArtist}>{props.artist}</p>
            <p className={styles.songAlbum}>{props.album}</p>
            <p className={styles.songLength}>{props.length}</p>
        </div>
    )
}

export default Song