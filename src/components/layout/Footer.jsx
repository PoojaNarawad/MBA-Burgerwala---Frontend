import React from 'react';
import {AiFillInstagram,AiFillGithub} from "react-icons/ai"

export const Footer = () => {
  return (
    <footer>
        <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best 
        taste prossible.</p>
        <br/>
        <em>We give attention to genuine feedback.</em>
        <strong>All right recieved @mbaburgerwala</strong>
    </div>

    <aside>
         <h4>Follow Us</h4>
         <a href='https://www.instagram.com/'>
         <AiFillInstagram/>Instagram</a>
         <a href='https://github.com/PoojaNarawad'>
         <AiFillGithub/>Github</a>
    </aside>
    </footer>
  )
}
