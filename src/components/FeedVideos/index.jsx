import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'
const VIDEOS = [
  {
    id: 1,
    athor: 'felipesierra556',
    description:
      'Mira el video hasta el final ✨😱😱 y Sigueme en Instagram #mariaenelcentro #parati #fyp #medellin #takisfuego',
    likes: 123,
    shares: 456,
    conments: 214,
    songTitle: '',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68c94e9a7c0736f64ca5cab3cdda5696~c5_720x720.jpeg?x-expires=1642550400&x-signature=N7KmpHLQZAGqGQV99HpVr0b2qLQ%3D',
    src: 'https://v16-webapp.tiktok.com/5eb2e01d37bd1ed957f5001395e07338/61e720fb/video/tos/useast2a/tos-useast2a-pve-0068/378cfffa9e50481e8c576fe17aa8e86d/?a=1988&br=1408&bt=704&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022011814180901019204815803201CD2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anJmNGQ6ZmtqOTMzNzczM0ApaTpmaWU1OmQ2NzkzPDY0aGdyaGhpcjRnbTRgLS1kMTZzc2JgMWEuMDU1Ll4uYTJjMTU6Yw%3D%3D&vl=&vr='
  },

  {
    id: 2,
    athor: 'felipesierra556',
    description:
      'Mira el video hasta el final ✨😱😱 y Sigueme en Instagram #mariaenelcentro #parati #fyp #medellin #takisfuego',
    likes: 123,
    shares: 456,
    conments: 214,
    songTitle: '',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68c94e9a7c0736f64ca5cab3cdda5696~c5_720x720.jpeg?x-expires=1642550400&x-signature=N7KmpHLQZAGqGQV99HpVr0b2qLQ%3D',
    src: 'https://v16-webapp.tiktok.com/22728d15f0b76faa1fa3260fc46accba/61e720e4/video/tos/useast2a/tos-useast2a-pve-0068/130d6a2e5dee4d8883119f377cee78aa/?a=1988&br=5472&bt=2736&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022011814180901019204815803201CD2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2o8cmY6Zjc8OTMzNzczM0ApNDY4PDo8NGUzN2dnOTk5NWdyYy9hcjQwMWVgLS1kMTZzc14yLTE2XjFhYDBiXi9fNV86Yw%3D%3D&vl=&vr='
  }
]
export default function FeedVideos () {
  return VIDEOS.map((video) => {
    return (
      <div className={styles.item} key={video.id}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
