import React from 'react';
import '../assets/css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            {/* <hr/> */}
            <div className='inner'>
                <ul>
                    <li className='footerli'>매장안내</li>
                    <li className='footerli'>이용약관</li>
                    <li className='footerli'>개인정보처리방침</li>
                </ul>
                <hr/>
                <div className='box'>
                    <p><img src='/images/Logo1234.png' width={400} alt='로고'/></p>
                    <p>블라썸(주) / 대표자 : 아무개</p>
                    <p>주소 : 서울특별시 강남구 테헤란로 124 삼원타워 4층 / 대표전화 : 1600-1234</p>
                    <p>통신판매업 신고번호 : 2022-서울강남-1234</p>
                </div>

                <div className='box'>
                    <p>사업자등록번호 123-45-67890</p>
                    <p><img src='/images/BankLogo.png' alt='로고' width={60} style={{marginRight:10}}/>채무지급보증안내</p>
                    <p>통신판매업 신고번호 : 2022-서울강남-1234</p>
                </div>

                <div className='box'>
                    <p className='top'>고객센터 1234-5678</p>
                    <p>상담업무시간 | 전화상담 : 10:00~17:30 / 전화상담 외 : 09:00 ~ 17:30</p>
                    <p>점심시간 : 12:00~13:00 (주말 및 공휴일 휴무)</p>
                    <p>물류반품 주소 : 인천시 송도동 해돋이로XXX번길 XX, 아무개건물 201호</p>
                    <p>E-mail 주소 : blossom@ssts.co.kr</p>
                    <p>Fax 번호 : 070-1234-5678</p>
                </div>

                <div className='copyright'>
                    © 2022 BLOSSOM MALL. ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
};

export default Footer;