import axios from "axios";

const MypageURL = "http://localhost:8080/mypage";
const QnAURL = "http://localhost:8080/QnA";

class MypageService{

    getReadData(num){
        return axios.get(MypageURL + '/' + num)
    }

    insertQnAData(dto){
        return axios.post(QnAURL + '/write',dto)
    }

    getReadQnAData(){
        return axios.get(QnAURL + '/read')
    }
}

export default MypageService