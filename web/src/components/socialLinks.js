import {Link} from 'gatsby'
import React from 'react'
import {FaTelegramPlane, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'


const SocialLinks = () => (
  <div>
    <ul>
      <li><Link to={'https://github.com/amiralitaheri'}/><FaGithub/></li>
      <li><Link to={'https://twitter.com/amiralitaheri64'}/><FaTwitter/></li>
      <li><Link to={'http://t.me/amiralitaheri'}/><FaTelegramPlane/></li>
      <li><Link to={'https://www.instagram.com/amiralitaheri64'}/><FaInstagram/></li>
      <li><Link to={'https://www.linkedin.com/in/amiralitaheri64/'}/><FaLinkedinIn/></li>
      <li><Link to={'mailto:amiralitaheri64@gmail.com'}/><FiMail/></li>
    </ul>
  </div>
)

export default SocialLinks
