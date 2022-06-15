import React, { Component } from 'react';
import Main from '../assets/css/main.module.css';
import styles from '../assets/css/Product.module.css';
import axios from 'axios';


//npm install react-bootstrap bootstrap

class Cate1List extends Component {

    constructor(props){
        super(props)

        this.state = {
            proBests : [],
            proNews : [],
            proTags : [],
            cate1 : this.props.match.params.cate1
        }
    }

    componentDidMount(){
        this.loadItem()
    }

    loadItem = () => { //★setState에서 []아닌가. 배열이라 여러개니
            axios.get(`http://localhost:8080/cate1/${this.state.cate1}`)
            .then(res=>{
                this.setState({proNews : res.data})
            })
            .catch(err=>{
                console.log('getProNew에러')
            });
    }

    ProductDetail = (products) => {
        window.location.href='/productDetail/' + products;
    }

    render() {
        return (
            <div>
            <div className={Main.title}>
                <p>{this.state.cate1}</p>
            </div>
            <div className={styles.container}>                
                {this.state.proNews.map(proNew=>
                    <div onClick={()=>this.ProductDetail(proNew.p_num)} key={proNew.p_num}>
                        <ul className={styles.product_ul}>      
                            <li>
                                <img src={`/images/product/${proNew.i_save}`} alt="상품사진"/>
                            </li>
                            <li className={styles.color_brand}>
                                {proNew.p_brand})
                                <span className= {styles.blink}> {proNew.hitCount> 50 ? 'Best' : 'New' }</span>
                            </li> 
                            <li className={styles.pname}>{proNew.p_name}</li>
                            <li >
                            <b>{(proNew.p_price*(1-(proNew.p_rate/100))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</b>                                <del className={styles.color_oriprice}>{proNew.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</del>
                                <span className={styles.color_rate}><b>{proNew.p_rate}%</b></span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
        );
    }
}

export default Cate1List;

/*
const MainPg = () => {

    const [proBests,setProBests] = useState([])
    const [proNews,setProNews] = useState()
    const [proTags,setProTags] = useState()

    useEffect(()=>{
        ApiService.getProBest()
            .then(res=>{
                setProBests(res.data)
            })
            .err(err=>{
                console.log('getProBest에러')
            });
        ApiService.getProNew()
            .then(res=>{
                setProNews(res.data)
            })
            .err(err=>{
                console.log('getProNew에러')
            });
        ApiService.getProTag()
            .then(res=>{
                setProTags(res.data)
            })
            .err(err=>{
                console.log('getProTag에러')
            });
    })
    */