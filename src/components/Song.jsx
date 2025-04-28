import albumCover from "../covers/test.png"
import styles from "./Song.module.css"

function Song(props) {
    return (
        <div className={styles.songContainer} onClick={props.onClick}>
            <img src={albumCover} />
            <p className={styles.songName} style={{ color: props.active ? "#1DD05D" : "#f3f3f3" }}>
                {props.name}
            </p>
            <p className={styles.songArtist} style={{ color: props.active ? "#1CB351" : "#c2c2c2" }}>
                {props.artist}
            </p>
            <p className={styles.songAlbum} style={{ color: props.active ? "#1DD05D" : "#f3f3f3" }}>
                {props.album}
            </p>
            <p className={styles.songLength} style={{ color: props.active ? "#1CB351" : "#c2c2c2" }}>
                {props.length}
            </p>
        </div>
    )
}

export default Song
