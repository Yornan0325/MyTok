import SongTicker from '../SongTicker/index.jsx'
import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'
export default function VideoDescription ({ albumCover, author, description, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${author}`}>
              @{author}
            </a>
          </strong>
        </section>
        <section>
          <p className={styles.text}>{description}</p>
          <SongTicker songTitle={songTitle} />
        </section>
      </div>
      <AlbumDisk albumCover={albumCover} />
      <div />
    </footer>
  )
}
