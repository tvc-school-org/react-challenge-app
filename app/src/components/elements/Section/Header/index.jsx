// LessonSectionHeader
import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const Header = (props) => {

  const level = props.level || 1

  const titleStyles = classNames({
    [styles.titleOne]: level === 1,
    [styles.titleTwo]: level === 2,
    [styles.titleThree]: level === 3,
    [styles.titleFour]: level === 4,
    [styles.titleFont]: true,
  })
  const subTitleStyles = classNames({
    [styles.subTitleOne]: level === 1,
    [styles.subTitleTwo]: level === 2,
    [styles.subTitleThree]: level === 3,
    [styles.titleFont]: true,
  })
  return (
    <div className={styles.header}>
      <div className={titleStyles}>{props.title}</div>
      <div className={subTitleStyles}>{props.subTitle}</div>
      {props.children}
    </div>
  )
}

export default Header
