import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 사용자의 로그인 상태 및 사용자 정보를 확인하고 반환합니다.
 * 
 * @returns {Object} 사용자 로그인 상태 및 정보
 * - isLoggedIn: 로그인 상태 (true: 로그인, false: 비로그인)
 * - userData: 사용자 정보 (로그인한 경우), null (비로그인인 경우)
*/
const useAuth = () => {
    const [authData, setAuthData] = useState({ isLoggedIn: false, userData: null });

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('/api/user/status');

                if (response.status === 200) {
                    console.log("response : ", response);
                    setAuthData({
                        isLoggedIn: true, // 로그인 상태
                        userData: response.data // 사용자 정보
                    });
                } else {
                    setAuthData({ isLoggedIn: false, userData: null }); // 비로그인 상태
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setAuthData({ isLoggedIn: false, userData: null }); // 인증 실패
                } else {
                    console.error('로그인 상태 확인 중 오류 발생', error);
                }
            }
        };

        checkLoginStatus();
    }, []);

    return authData;
};

export default useAuth;