import React, { useState } from 'react'
import styles from '../styles/qrgenerator.module.css'
import QRCode from 'qrcode'

export default function QrGenerator() {
  const [url,seturl] = useState('');
  const [qrcode,setQrcode] = useState('');
  
  const generateQr = () => {
    QRCode.toDataURL(url,(err,url1)=> {
      if(err) return console.log(err);

      setQrcode(url1);
      console.log(url1);
    })
  } 

  const clear = () => {
    seturl('');
    setQrcode('');
  } 
  return (
    <div className={styles.container} >
        <div className={styles.content} >
          <div className={styles.header}>
            <img src='/pictures/mylogo.png' alt="Logo"  />
          </div>
          <div className={styles.Inputs__Box} >
              <input placeholder='Enter a link' onChange={(event)=>{seturl(event.target.value)}} value={url} />
              <button onClick={generateQr} >Generate</button>
          </div>
          <div className={styles.qr__box} >
              <img src={qrcode? qrcode:"" }/>
          </div>
          <div className={styles.clear} >
             <button onClick={clear} >Clear</button>
          </div>
        </div>
    </div>
  )
}
