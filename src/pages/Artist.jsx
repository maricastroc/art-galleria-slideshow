import { NavLink, useParams } from 'react-router-dom'
import { data } from '../../data/data'
import styles from './Artist.module.css'
import { CloseImage } from '../components/CloseImage'
import { useState } from 'react'

export function Artist() {
  const id = useParams().data
  const thisData = data[id]

  const itemToSearch = thisData.name.split(' ').join('_')

  const [viewImage, setViewImage] = useState(false)

  return (
    <div className={viewImage ? styles.overlay : styles.overlay_hidden}>
      <div className={viewImage ? styles.full_image : styles.full_image_hidden}>
        <button onClick={() => setViewImage(false)}>close</button>
        <CloseImage src={thisData.images.gallery} />
      </div>
      <div className={styles.artist_container}>
        <div className={styles.artist_container_main}>
          <div className={styles.slide_images_container}>
            <div className={styles.slide_images}>
              <div className={styles.painting_image}>
                <img
                  src={thisData.images.hero.large}
                  className={styles.painting_image}
                  alt=""
                />
                <div
                  className={styles.view_image}
                  onClick={() => setViewImage(true)}
                >
                  <img src="/assets/shared/icon-view-image.svg" alt="" />
                  <p>view image</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <h1>{thisData.name}</h1>
              <p>{thisData.artist.name}</p>
            </div>
            <div className={styles.artist_image}>
              <img src={thisData.artist.image} alt="" />
            </div>
          </div>
          <div className={styles.slide_text_container}>
            <h1>{thisData.year}</h1>
            <p>{thisData.description}</p>
            <a
              href={`https://en.wikipedia.org/wiki/${itemToSearch}`}
              target="_blank"
              rel="noreferrer"
            >
              Go to source
            </a>
          </div>
        </div>
        <footer>
          <div className={styles.progress_bar}>
            <div
              className={styles.progress_value}
              style={{ width: (parseFloat(id) + 1) * 6.66 + '%' }}
            ></div>
          </div>
          <div className={styles.footer_content}>
            <div className={styles.footer_text}>
              <h1>{thisData.name}</h1>
              <p>{thisData.artist.name}</p>
            </div>
            <div className={styles.footer_controls}>
              <NavLink
                to={`/artist/${thisData.id - 1}`}
                title="Artist"
                className={
                  thisData.id === 0
                    ? styles.blocked_button
                    : styles.active_button
                }
              >
                <img
                  src="/assets/shared/icon-back-button.svg"
                  alt="Go_Back"
                  className={
                    thisData.id === 0
                      ? styles.blocked_button
                      : styles.active_button
                  }
                />
              </NavLink>
              <NavLink
                to={`/artist/${thisData.id + 1}`}
                title="Artist"
                className={
                  thisData.id === 14
                    ? styles.blocked_button
                    : styles.active_button
                }
              >
                <img
                  src="/assets/shared/icon-next-button.svg"
                  alt="Go_Forward"
                  className={
                    thisData.id === 14
                      ? styles.blocked_button
                      : styles.active_button
                  }
                />
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
