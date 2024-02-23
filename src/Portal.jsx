import React from 'react'
import styles from './Portal.module.css'
const Portal = ({isOpen, setIsOpen}) => {
   if(!isOpen) return null;

   return (
    <>
        <div className={styles.overlay} onClick={() => setIsOpen(false)}/>
        <div className={styles.modalWindow}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>X</button>
            <p className={styles.emoji}>✅</p>
            <p className={styles.message}>You have successfully completed the level</p>
            <button className={styles.okayBtn} onClick={() => setIsOpen(false)}>Okay</button>
        </div>
    </>
  )
}

export default Portal