import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import useAuth from '../hooks/useAuth';

const HeaderTest = () => {
    // 로그인 상태와 사용자 정보를 확인합니다.
    const { isLoggedIn, userData } = useAuth();

    return (
        <div>
            <nav>
                {isLoggedIn ? (
                    <>
                        <p>안녕하세요, {userData.userName}님!</p>
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}

            </nav>
        </div>
    )
}

export default HeaderTest;