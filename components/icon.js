import React from 'react'
import cn from 'classnames'
import styles from './button.module.scss'
import Button from './button'


function IconButton({ children, className, ...props }) {

  return (
    <Button
      className={cn(styles.iconButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default IconButton
