import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/test'); // Spring Boot의 GET 요청
                setMessage(response.data); // 서버 응답 데이터를 상태에 저장
            } catch (error) {
                console.error('실패했습니다:', error);
                setMessage('데이터를 가져오는 데 실패했습니다.'); // 에러 메시지를 상태에 저장
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []);

    return (
        <div>
            <h2>테스트 페이지입니다.</h2>
            {message && <p>{message}</p>} {/* 서버 응답 메시지 표시 */}
        </div>
    );
};

export default Test;
