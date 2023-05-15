import React from 'react'
import { styles } from '../constants'
import resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
        <div className="text-white font-extrabold">
            <h1 className={styles.headText}>Hi, i'm <span className="text-blue-400">Nathan</span></h1>
            <h3 className={styles.subText}>Welcome to my portfolio</h3>
            <div className="flex items-center justify-center mt-10">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        My Resume
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
