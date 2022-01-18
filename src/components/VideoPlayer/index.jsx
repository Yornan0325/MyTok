import clsx from 'clsx'
import { useState, useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayerAtions from './VideoPlayerActions'

export default function VideoPlayer ({ src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }
  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })
  return (
    <div className={styles.wrapper}>
      <video
        onClick={handlePlay}
        ref={video}
        className={styles.video}
        src={src}
        loop
        controls={false}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerAtions />
    </div>
  )
}