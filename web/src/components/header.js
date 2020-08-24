import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger'/>
      </button>
      {
        (typeof window !== 'undefined' ? window.location.pathname === '/' : true) ?
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              <li>
                <a href='#works'>Works</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <Link to='/blog/'>Blog</Link>
              </li>
            </ul>
          </nav> :
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/blog/'>Blog</Link>
              </li>
            </ul>
          </nav>
      }
    </div>
  </div>
)

export default Header
