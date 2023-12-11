import React, { useState } from 'react';
import styles from './Socials.module.css';

interface SocialsInterface { }

const Socials: React.FC<SocialsInterface> = () => {
  const [clipboardStatus, setclipboardStatus] = useState<{ status: boolean; name: 'WHATSAPP' | 'EMAIL'; }>({
    status: false,
    name: 'WHATSAPP',
  });

  const handleClipboard = (type: 'WHATSAPP' | 'EMAIL') => {
    setclipboardStatus({
      status: true,
      name: type
    });

    if (type === 'EMAIL') {
      navigator.clipboard.writeText("cecla6626@yahoo.com.ar");
      console.log(navigator.clipboard)
    } else {
      navigator.clipboard.writeText("03471 42-9165");
      console.log(navigator.clipboard)
    }

    setTimeout(() => {
      setclipboardStatus((prevClipboardStatus) => ({
        status: false,
        name: prevClipboardStatus.name,
      }));
    }, 3000);
  }

  return (
    <>
      <div className={styles.card}>
        <a className={styles.socialContainer} href="https://www.instagram.com/cecla6626/" target="_blank">
          <i className={`fa-brands fa-instagram ${styles.socialIcon}`}></i>
        </a>
        <a className={styles.socialContainer} href="https://www.facebook.com/c6626" target="_blank">
          <i className={`fa-brands fa-facebook-f ${styles.socialIcon}`}></i>
        </a>
        <span
          className={styles.socialContainer}
          onClick={() => handleClipboard('WHATSAPP')}
        >
          <i className={`fa-brands fa-whatsapp ${styles.socialIcon}`}></i>
        </span>
        <span
          className={styles.socialContainer}
          onClick={() => handleClipboard('EMAIL')}
        >
          <i className={`fa-regular fa-envelope ${styles.socialIcon}`}></i>
        </span>
      </div>
      <div className={`${styles.toastContainer} ${clipboardStatus.status ? styles.toastShow : styles.toastHidden}`}>
        <span className={styles.toastText}>
          {
            clipboardStatus.name && clipboardStatus.name === 'EMAIL'
              ? '¡Email copiado en portapapeles!'
              : '¡Numero de WhatsApp copiado en portapapeles!'
          }
        </span>
        <i className={`fas fa-exclamation-circle ${styles.toastIcon}`}></i>
      </div>
    </>
  )
}

export default Socials