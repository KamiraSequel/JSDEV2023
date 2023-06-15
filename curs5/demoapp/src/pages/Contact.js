import React, {useEffect} from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = `Pagina de contact`; 
  });
  return (
    <div>Contact</div>
  )
}