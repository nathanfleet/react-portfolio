import React from 'react'
import { styles } from '../constants'

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
        <div className=" text-white font-extrabold">
            <h1 className={styles.headText}>Hi, i'm <span className="text-blue-400">Nathan</span></h1>
            <h3 className={styles.subText}>Welcome to my portfolio</h3>
        </div>
    </div>
  )
}

export default Hero
