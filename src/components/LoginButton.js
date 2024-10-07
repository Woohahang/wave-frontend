import React from 'react';

const LoginButton = () => {

    const handleDiscordLogin = () => {
        const discordOAuthUrl = 'http://localhost:8080/oauth2/authorization/discord'; // 서버의 Discord OAuth2 URL
        window.location.href = discordOAuthUrl; // Discord 로그인 페이지로 리디렉션
    };

    return (
        <button onClick={handleDiscordLogin}>
            Discord로 로그인하기
        </button>
    );
};

export default LoginButton;