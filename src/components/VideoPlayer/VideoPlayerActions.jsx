import { Heart } from '../Icons/Heart'
import styles from './styles.module.css'

export default function VideoPlayerAtions () {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
    </aside>
  )
}
