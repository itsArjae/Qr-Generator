import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QrGenerator from './qrgenerator'

export default function Home() {
  return (
   <div> <QrGenerator/> </div>
    
  )
}
