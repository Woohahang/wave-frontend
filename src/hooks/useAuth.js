import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 사용자의 로그인 상태를 확인하고 반환합니다.
 * 
 * @returns {boolean} 로그인 상태 (true: 로그인, false: 비로그인)
*/
const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('/api/user/status');

                if (response.status === 200) {
                    setIsLoggedIn(true); // 로그인 상태
                } else {
                    setIsLoggedIn(false); // 비로그인 상태
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setIsLoggedIn(false); // 인증 실패
                } else {
                    console.error('로그인 상태 확인 중 오류 발생', error);
                }
            }
        };

        checkLoginStatus();
    }, []);

    return isLoggedIn;
};

export default useAuth;