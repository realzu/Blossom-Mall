import React,{useState} from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal"; // 추가

const Postcode = () =>{
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");    // 추가
    const [isOpen, setIsOpen] = useState(false); //추가

    const completeHandler = (data) =>{
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setIsOpen(false); //추가
    }

    // Modal 스타일
    const customStyles = {
        
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            
        },
        content: {
        //     left: "0",
            margin: "auto",
            width: "500px",
            height: "500px",
            padding: "0",
            overflow:'hidden'
        },
    };

    const postCodeStyles = {
        left: "0",
        margin: "auto",
        width: "100%",
        height: "100%",
        padding: "0",
        
    };

    const Url = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

    // 검색 클릭
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const closeModal = () =>{
        setIsOpen(false);
      }

    // 상세 주소검색 event
    const changeHandler = (e) =>{
        setDetailAddress(e.target.value);
    }

    // 추가
    const clickHandler = () =>{
        if(detailAddress===""){
            alert("상세주소를 입력해주세요.");
        } else{
            console.log(zipCode, roadAddress, detailAddress);
        } 
    }

    return(
        <div>
            <input value={zipCode} readOnly placeholder="우편번호" />
            <button onClick={toggle}>우편번호 검색</button>
            <br />
            <input value={roadAddress} readOnly placeholder="도로명 주소" />
            <br />
            <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles} onRequestClose={closeModal}>
                <DaumPostcode onComplete={completeHandler} style={postCodeStyles} scriptUrl={Url} animation={true}/>
            </Modal>
            <input type="text" onChange={changeHandler} value={detailAddress} placeholder="상세주소"/>
            <br />
            <button onClick={clickHandler}>클릭</button>
        </div>
    );
}

export default Postcode;