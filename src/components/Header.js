import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = () => {
    return (
        <header>
            <h1>Wave</h1>
            <nav>
                <LoginButton />
                <LogoutButton />
                <Link to="/">홈</Link> {/* 홈 링크 */}
                <Link to="/user">유저 페이지</Link> {/* 유저 페이지 링크 */}
                <Link to="/test">테스트</Link> {/* 유저 페이지 링크 */}
            </nav>
        </header>
    );
};

export default Header;