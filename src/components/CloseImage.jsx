import styles from './CloseImage.module.css'

export function CloseImage(props) {
  return (
    <div className={styles.close_image}>
      <img src={props.src} alt="" />
    </div>
  )
}
