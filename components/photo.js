import React from 'react'
import cn from 'classnames'

import styles from './photo.module.scss'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1335713613324161026/yUhaEW_R_400x400.jpg',
  alt,
  size=47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width:size, height:size }}>
      <img className={styles.img} src={src} alt={alt}/>
    </div>
  )
}
export default Photo
