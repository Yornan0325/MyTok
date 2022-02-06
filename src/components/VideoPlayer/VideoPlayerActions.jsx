import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'
import { Comment } from '../Icons/Comment'
import styles from './styles.module.css'

export default function VideoPlayerAtions ({ likes = 172, comments = 112, shares = 142, hearted = false }) {
  const handleLike = () => {
    window.alert('like')
  }
  const handleComment = () => {
    window.alert('comment')
  }
  const handleShare = () => {
    window.alert('share')
  }
  return (
    <aside className={styles.actions}>

      <button onClick={handleLike} className={styles.action}>
        <Heart />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share />
        <span title='shares'>{shares}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment />
        <span title='comments'>{comments}</span>
      </button>

    </aside>
  )
}
