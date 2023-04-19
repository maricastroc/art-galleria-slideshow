import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import SlideShowContext from '../../contexts/SlideShowContext'

import styles from './Painting.module.css'

export function Painting(props) {
  const { setOpen } = useContext(SlideShowContext)

  return (
    <NavLink to={`/artist/${props.id}`} title="Artist">
      <div className={styles.painting} onClick={() => setOpen(true)}>
        <div className={styles.gradient_wrapper}></div>
        <img src={props.thumbnail} alt="" />
        <div className={styles.painting_info}>
          <h1>{props.name}</h1>
          <p>{props.artist}</p>
        </div>
      </div>
    </NavLink>
  )
}
