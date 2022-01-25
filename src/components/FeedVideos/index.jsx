import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'
const VIDEOS = [
  {
    id: 1,
    author: 'felipesierra556',
    description:
      'Mira el video hasta el final ✨😱😱 y Sigueme en Instagram #mariaenelcentro #parati #fyp #medellin #takisfuego',
    likes: 123,
    shares: 456,
    conments: 214,
    songTitle: '',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68c94e9a7c0736f64ca5cab3cdda5696~c5_720x720.jpeg?x-expires=1642550400&x-signature=N7KmpHLQZAGqGQV99HpVr0b2qLQ%3D',
    src: 'https://v16-webapp.tiktok.com/9f67f4dc68dec3f785970cf43f9a9594/61ef7813/video/tos/useast2a/tos-useast2a-pve-0068/51045b5516dc44c8a9c03f8de2fcbfd9/?a=1988&br=2432&bt=1216&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Thp6i5lXq&l=2022012422094501022312304605644C6D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajU5Zmg6ZjtvOjMzNzczM0ApZWc8OzRmOmVlNzhmO2dkNGcvaWFfcjRnXmdgLS1kMTZzc2BfMTAyMmFeX2E1L2M2MDE6Yw%3D%3D&vl=&vr='
  },

  {
    id: 2,
    author: 'felipesierra556',
    description:
      'Mira el video hasta el final ✨😱😱 y Sigueme en Instagram #mariaenelcentro #parati #fyp #medellin #takisfuego',
    likes: 123,
    shares: 456,
    conments: 214,
    songTitle: '',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68c94e9a7c0736f64ca5cab3cdda5696~c5_720x720.jpeg?x-expires=1642550400&x-signature=N7KmpHLQZAGqGQV99HpVr0b2qLQ%3D',
    src: 'https://v16-webapp.tiktok.com/24727e95be5397aa1dd23b44c56e829a/61ef7814/video/tos/useast2a/tos-useast2a-pve-0068/3683a38f7add48a88e127579b4df1001/?a=1988&br=2282&bt=1141&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Thp6i5lXq&l=2022012422094501022312304605644C6D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ank6PGY6ZnAzOjMzNzczM0ApZWhlZDw2MztoNztkPDM0OmdlNS9ycjRfY2tgLS1kMTZzcy5jXzI1Xy4wMTVhYDQvMi86Yw%3D%3D&vl=&vr='
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
