import './navigation.styles.scss'
import {Fragment} from "react"
import CrwnLogo from '../../assets'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='description'>
                        Описание
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Войти
                    </Link>
                    <Link className='nav-link' to='/sign-up'>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;