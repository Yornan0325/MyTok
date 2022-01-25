import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'
import { Comment } from '../Icons/Comment'
import styles from './styles.module.css'

export default function VideoPlayerAtions ({ likes = 172, comments = 112, shares = 142, hearted = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Share />
        <strong title='shares'>{shares}</strong>
      </div>
      <div className={styles.action}>
        <Comment />
        <strong title='comments'>{comments}</strong>
      </div>
    </aside>
  )
}
