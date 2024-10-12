import React from "react";
import useAuth from '../hooks/useAuth';
import '../css/Header.css';
import logo from '../img/logo.png';
import logoutIcon from '../img/logout-icon.png';

const Header = () => {
    // 로그인 상태와 사용자 정보를 확인합니다.
    const { isLoggedIn, userData } = useAuth();

    const handleDiscordLogin = () => {
        const discordOAuthUrl = 'http://localhost:8080/oauth2/authorization/discord'; // 서버의 Discord OAuth2 URL
        window.location.href = discordOAuthUrl; // Discord 로그인 페이지로 리디렉션
    };

    const handleLogout = async () => {
        // 서버에 로그아웃 요청 보내기
        const response = await fetch('/api/logout', { method: 'POST' });

        if (response.ok) {
            // 로그아웃 성공 시 페이지 새로고침
            window.location.reload();
        } else {
            // 오류 처리 (예: alert, console log 등)
            console.error('로그아웃 실패');
        }
    };

    const handleAddToServer = () => {
        const addToServerUrl = 'https://discord.com/oauth2/authorize?client_id=1227561479801409566&permissions=8&integration_type=0&scope=bot+applications.commands';
        window.location.href = addToServerUrl; // 지정된 URL로 리디렉션
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <span className="logo-text">Wave</span>
            </div>

            <div className="button-container">
                <button className="add-button" onClick={handleAddToServer}>Add To Server</button>

                {isLoggedIn ? (
                    <>
                        <img src={userData.profileImageUrl} alt="Profile" className="profile-image" />
                        <p className="username">{userData.userName}</p>
                        <img src={logoutIcon} alt="logoutIcon" className="logout-icon" onClick={handleLogout} />
                    </>
                ) : <button className="discord-button" onClick={handleDiscordLogin}>Login with Discord</button>}
            </div>
        </header>
    )
}

export default Header;