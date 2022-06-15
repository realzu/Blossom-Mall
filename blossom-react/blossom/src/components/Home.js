import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    
        // IP주소 변수 선언
        const [ip, setIp] = useState('');
      
        // IP주소 값을 설정합니다.
        function callback(data) {
          setIp(data);
        }
      
        // 첫번째 렌더링을 다 마친 후 실행합니다.
        useEffect(
          () => {
          axios({
                  url: '/home',
                  method: 'GET'
              }).then((res) => {
                  callback(res.data);
              })
            }, []
        );
      
        return (
          <header className="App-header">
            이 기기의 IP주소는 {ip}입니다.
          </header>
        );
      
};

export default Home;