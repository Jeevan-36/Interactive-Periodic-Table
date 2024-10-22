import React from 'react'
import styles from './ElementProperty.module.css'
function ElementProperty({label,data}) {
  return (
    <p className={styles.DataRow}><span className={styles.Label}>{label}</span> <span className={styles.Data}>{data}</span></p>
  )
}

export default ElementProperty;