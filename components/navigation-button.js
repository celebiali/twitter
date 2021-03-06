import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation-button.module.scss'

// TODO: selected durumunda ikonlar dolgulu olacak
function NavigationButton({ href, notify, selected, children, className, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected,className)}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavigationButton
