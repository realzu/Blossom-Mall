import React, { Component } from 'react';
import MainBanner from './MainBanner';
import Main from '../assets/css/main.module.css';
import ApiService from '../service/ApiService';
import styles from '../assets/css/Product.module.css';

//npm install react-bootstrap bootstrap

class MainPg extends Component {

    constructor(props){
        super(props)

        this.state = {
            proBests : [],
            proNews : [],
            proTags : []
        }
    }

    componentDidMount(){
        this.loadItem()
    }

    loadItem = () => { //★setState에서 []아닌가. 배열이라 여러개니
        ApiService.getProBest()
            .then(res=>{
                this.setState({proBests : res.data})
            })
            .catch(err=>{
                console.log('getProBest에러')
            });
        ApiService.getProNew()
            .then(res=>{
                this.setState({proNews : res.data})
            })
            .catch(err=>{
                console.log('getProNew에러')
            });
        ApiService.getProTag()
            .then(res=>{
                this.setState({proTags : res.data})
            })
            .catch(err=>{
                console.log('getProTag에러')
            });
    }

    ProductDetail = (p_num) => {
        window.localStorage.setItem("product", p_num); //--★하는이유가?
        this.props.history.push('/productDetail'); //해당번호로 넘어가게 다른 방법있지않나
    }

    render() {
        return (
            <div>
            <div>
            <MainBanner/>
            </div>

            <div className={Main.title}>
                <p>베스트 상품순</p>
            </div>

            <div className={styles.container}>
                {/* 1개의 제품이미지 반복문 */}
                {/* {this.state.proTags.map(proTag=><MainItem key={proTag.p_num} proTag={proTag}/>)} */}
                {this.state.proBests.map(proBest=>
                    <div onClick={()=>this.ProductDetail(proBest.p_num)} key={proBest.p_num} >
                        <ul className={styles.product_ul}>
                            <li>
                                <img src={`/images/product/${proBest.i_save}`} alt="상품사진"/>
                            </li>
                            <li className={styles.color_brand}>
                                {proBest.p_brand})
                                <span className= {styles.blink}> {proBest.hitCount> 50 ? 'Best' : 'New' }</span>
                            </li> 
                            <li className={styles.pname}>{proBest.p_name}</li>
                            <li >
                                <b>{(proBest.p_price*(1-(proBest.p_rate/100))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</b>
                                <del className={styles.color_oriprice}>{proBest.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</del>
                                <span className={styles.color_rate}><b>{proBest.p_rate}%</b></span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={Main.title}>
                <p>신상품순</p>
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

            <div className={Main.title}>
                <p>5월의 Hot 태그 - #캠퍼스룩</p>
            </div>
            <div className={styles.container}>                
                {this.state.proTags.map(proTag=>
                    <div onClick={()=>this.ProductDetail(proTag.p_num)} key={proTag.p_num}>
                        <ul className={styles.product_ul}>     
                            <li>
                                <img src={`/images/product/${proTag.i_save}`} alt="상품사진"/>
                            </li>
                            <li className={styles.color_brand}>
                                {proTag.p_brand})
                                <span className= {styles.blink}> {proTag.hitCount> 50 ? 'Best' : 'New' }</span>
                            </li> 
                            <li className={styles.pname}>{proTag.p_name}</li>
                            <li >
                                <b>{proTag.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</b>
                                <del className={styles.color_oriprice}>{proTag.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</del>
                                <span className={styles.color_rate}><b>{proTag.p_rate}%</b></span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
        );
    }
}

export default MainPg;

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