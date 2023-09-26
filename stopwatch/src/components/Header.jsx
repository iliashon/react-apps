import style from './Header.module.css'

export default function Header () {
    return (
        <header className={style.header}>
            <h1 className={style.logo}>web-initial</h1>
        </header>
    )
}