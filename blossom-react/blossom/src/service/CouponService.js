import axios from "axios";


const URL = "http://localhost:8080/coupon";

class couponService{

    couponList(){
        return axios.get(URL + '/')
    }
}


export default couponService