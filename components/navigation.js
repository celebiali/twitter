import React from 'react'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import {useRouter} from 'next/router'
import cn from 'classnames'
import styles from './navigation.module.scss'
import { MENU } from '../constants'

function Navigation({ flat = false}) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {

        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path
        return (
          <NavigationButton key={menu.key} notify={menu.notify} selected={selected} href={menu.path} className={cn(styles.navbutton,menu.key)}>
            {selected ? menu.iconSelected :   menu.icon}
            { showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}

    </nav>
  )
}

export default Navigation
