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
    songTitle: 'sonido original - zzerok1',
    albumCover:
      'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3190f6359853731e3881398ec27a94f4~c5_720x720.jpeg?x-expires=1643911200&x-signature=2o08Bz1FRPPE9swrUx5TZwcTPA0%3D',
    src: 'https://v16-webapp.tiktok.com/fa4b1ab1f7e06f680df0c97f721fa89e/61fdd413/video/tos/useast2a/tos-useast2a-ve-0068c003/99b91c05bcfe438b8587fcf210288c1e/?a=1988&br=4194&bt=2097&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7ThiaPxlXq&l=2022020419331501022301604809DA9973&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am48Zjw6ZmpwOjMzNzczM0ApMzxpNWVoNGVoNzZnNWlmM2cvZGtpcjRvM2VgLS1kMTZzcy8zNGNgYi8tYjRjNS1gNGE6Yw%3D%3D&vl=&vr='
  },

  {
    id: 2,
    author: 'felipesierra556',
    description:
      'Mira el video hasta el final ✨😱😱 y Sigueme en Instagram #mariaenelcentro #parati #fyp #medellin #takisfuego',
    likes: 123,
    shares: 456,
    conments: 214,
    songTitle: 'sonido original - zzerok1',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68c94e9a7c0736f64ca5cab3cdda5696~c5_720x720.jpeg?x-expires=1642550400&x-signature=N7KmpHLQZAGqGQV99HpVr0b2qLQ%3D',
    src: 'https://v16-webapp.tiktok.com/26a6e46c94c9e34baa4f619f263205aa/61fdd3eb/video/tos/useast2a/tos-useast2a-ve-0068c002/b7185ec5cf05436085d8d623d7584009/?a=1988&br=2762&bt=1381&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7ThiaPxlXq&l=2022020419331501022301604809DA9973&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY4cjU6Zm5lOjMzNzczM0ApaDo7aDQ7OWVoNzQzPGZpO2c1a2JvcjQwLzNgLS1kMTZzczJjYV4tL2NiNmAyNTE0LWI6Yw%3D%3D&vl=&vr='
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
