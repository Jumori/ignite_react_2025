import styles from './Header.module.css'

import appLogo from '../assets/app-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="Foguete" />
    </header>
  )
}
