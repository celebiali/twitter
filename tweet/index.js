import React from 'react'
import styles from './style.module.scss'
import Photo from '../components/photo'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import * as Icon from '../components/icons'
import IconButton from '../components/icon'

function Tweet({name,slug,datetime,text}){
  return <div className={styles.tweet}>
    <div className={styles.avatar}>
      <Photo/>
    </div>
    <div className={styles.body}>
      <header className={styles.header}><span className={styles.name}>{name}</span> <span>@{slug}</span> · <span>{formatDistanceToNowStrict(datetime)}</span></header>

      <div className={styles.content}>{text}</div>

      <footer className={styles.footer}>
        <div className={styles.footerButton}>
        <IconButton className={styles.actionButton}>
          <Icon.Reply/>
        </IconButton>
          <span>3</span>
        </div>
        <div className={styles.footerButton}>
          <IconButton className={styles.actionButton}>
            <Icon.Retweet/>
          </IconButton>
          <span>12</span>
        </div>
        <div className={styles.footerButton}>
        <IconButton className={styles.actionButton}>
          <Icon.Like/>
        </IconButton>
      </div>
        <div className={styles.footerButton}>
        <IconButton className={styles.actionButton}>
          <Icon.Share/>
        </IconButton>
      </div>
      </footer>
    </div>
  </div>
}

export default Tweet