import React from 'react';
import axios from 'axios';


const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/logout', {}, {
                withCredentials: true // 세션을 유지하기 위해 설정
            });
        } catch (error) {
            console.log('로그아웃 중 오류 발생', error);
        }
    };

    return (
        <button onClick={handleLogout}>
            로그아웃
        </button>
    );
}

export default LogoutButton;