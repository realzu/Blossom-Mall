import React from 'react';
import axios from 'axios';

const FileUpload = () => {
    const fileList = []; // 업로드한 파일들을 저장하는 배열

    const onSaveFiles = (e) => {
        const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

        uploadFiles.forEach((uploadFile) => {
            fileList.push(uploadFile);
        });
    };

    const onFileUpload = () => {
        const formData = new FormData();

        fileList.forEach((file) => {
            // 파일 데이터 저장
            formData.append('multipartFiles', file); //multipartFiles가 key이름
        });

        // 객체
        const TestDTO = {
            name: '피자',
            price: 13500,
        };

        formData.append('stringTestDTO', JSON.stringify(TestDTO)); // 직렬화하여 객체 저장

        axios.post('http://localhost:8080/users/uploadFiles', formData);
    };

    return (
        <div>
            <input type="file" multiple /* 파일 여러개 선택 가능하게 하기 */ onChange={onSaveFiles} />
            <button onClick={onFileUpload}>파일 업로드</button>
        </div>
    );
};

export default FileUpload;