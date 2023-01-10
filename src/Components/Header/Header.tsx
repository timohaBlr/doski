import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {
    menuHandler: ()=> void
}
const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <a href='https://github.com/'>
                <img src="../../images/default-logo.png" alt={'ss'}/>
            </a>
            Header
            <div className={s.menu} onClick={props.menuHandler}>Menu</div>
        </div>
    );
};

export default Header;