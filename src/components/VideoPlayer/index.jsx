import { useState, useRef } from 'react'
import styles from './styles.modules.css'
const SRC =
  'https://v16-webapp.tiktok.com/eddd934eba8b8385c9b3cdd888db476b/61df54c0/video/tos/useast5/tos-useast5-pve-0068-tx/81785fcff1984f959fd0d2b1ed027054/?a=1988&br=2288&bt=1144&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=20220112162237010223082150072B9A2A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampyOmY6Zm1yOjMzZzczNEApODhpODVpODxmNzloNjw0PGcycWZucjQwbzBgLS1kMS9zc2M1MTEyYmJfYDA1NGFeNTY6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video ref={video} className={styles.video} src={SRC} controls={false} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
