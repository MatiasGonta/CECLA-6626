import React, { useState } from 'react';

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
    } else {
      navigator.clipboard.writeText("03471 42-9165");
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
      <div className="w-fit h-fit bg-[rgb(238,238,238)] flex items-center justify-center p-5 gap-5 text-[16px] mt-6 shadow-[0px_0px_20px_rgba(0,0,0,0.055)] rounded">
        {/* Instagram */}
        <a className="group w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden duration-300 cursor-pointer active:scale-90 hover:bg-[#d62976]" href="https://www.instagram.com/cecla6626/" target="_blank">
          <i className="fa-brands fa-instagram text-white group-hover:animate-slide-in-top"></i>
        </a>

        {/* Facebook */}
        <a className="group w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden duration-300 cursor-pointer active:scale-90 hover:bg-[#0072b1]" href="https://www.facebook.com/c6626" target="_blank">
          <i className="fa-brands fa-facebook-f text-white group-hover:animate-slide-in-top"></i>
        </a>

        {/* Whatsapp */}
        <span
          className="group w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden duration-300 cursor-pointer active:scale-90 hover:bg-[#128c7e]"
          onClick={() => handleClipboard('WHATSAPP')}
        >
          <i className="fa-brands fa-whatsapp text-white group-hover:animate-slide-in-top"></i>
        </span>

        {/* Email */}
        <span
          className="group w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden duration-300 cursor-pointer active:scale-90 hover:bg-[#d62932]"
          onClick={() => handleClipboard('EMAIL')}
        >
          <i className="fa-regular fa-envelope text-white group-hover:animate-slide-in-top"></i>
        </span>
      </div>
      <div className={`fixed top-2.5 left-0 bg-white py-5 p-10 w-[375px] rounded border-r-8 shadow-md z-50 sm:w-[400px] ${clipboardStatus.status ? "flex flex-nowrap justify-between items-center animate-toast-active" : "hidden"}`}>
        <span className="text-[18px]">
          {
            clipboardStatus.name && clipboardStatus.name === 'EMAIL'
              ? '¡Email copiado en portapapeles!'
              : '¡Numero de WhatsApp copiado en portapapeles!'
          }
        </span>
        <i className="fas fa-exclamation-circle text-[30px] ml-2.5 text-cecla-purple"></i>
      </div>
    </>
  )
}

export default Socials