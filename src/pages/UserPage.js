import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {


        // 사용자 정보 API 호출
        // fetch('/api/user')
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error('사용자 정보를 가져오는 데 실패했습니다.');
        //     })
        //     .then(data => setUser(data))
        //     .catch(error => console.error(error));


        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`, // 인증 헤더 추가
                    },
                });

                if (response.status === 200) {
                    setUser(response.data); // 사용자 정보를 상태에 설정
                }
            } catch (error) {
                console.error('사용자 정보를 가져오는 데 실패했습니다:', error);
                // 오류 처리 (예: 로그인 페이지로 리다이렉트)
            }
        };

        fetchUser(); // fetchUser 함수 호출
    }, []);


    return (
        <div>
            {user ? (
                <h2>환영합니다, {user.userName} 님!</h2>
            ) : (
                <h2>환영합니다! !</h2>
            )}
        </div>
    );
};

export default UserPage;