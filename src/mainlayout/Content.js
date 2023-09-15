import Se1 from './component/Section1'
import Se2 from './component/Section2'
import db from '../data/db.json'
import Ctcss from '../scss/main/content.module.scss'
const Ct = (props) => {
    return (
        <>  
            <div className={Ctcss.main}>
                {/* <p className={Ctcss.text}>
                <span>가배는 가위를 이두식의 한자로 쓰는 말이다</span>
                <span>가위나 한가위는 순수한 우리말이며</span>
                <span>중추절<span className={Ctcss.hb}>)</span>仲秋節<span className={Ctcss.hb}>(</span> 중추가절<span className={Ctcss.hb}>)</span>仲秋佳節<span className={Ctcss.hb}>(</span> 이라고도 한다</span>
                <span>가배<span className={Ctcss.hb}>)</span>嘉俳<span className={Ctcss.hb}>(</span> 가배일<span className={Ctcss.hb}>)</span>嘉俳日<span className={Ctcss.hb}>(</span> 가위 한가위 중추<span className={Ctcss.hb}>)</span>仲秋<span className={Ctcss.hb}>(</span> </span>
                <span>뜻을 지니고 있는 연중 으뜸 명절이다</span>
                <span>또한 팔월의 한가운데 날이라는</span>
                <span>음력 팔월 보름을 일컫는 말</span>
                <span>가을의 한가운데 달이며 </span> 
                <span>추석<span className={Ctcss.hb}>]</span>秋夕<span className={Ctcss.hb}>[</span></span>
                </p> */}
                {/* <div className={Ctcss.button}><a href=""><img src="../img/but.png" alt="" /></a></div> */}
                <ul>
                    <li><img src="./img/icon.png" alt="" /><a href=""><img src="./img/img1.jpg" alt="" /></a></li>
                    <li><img src="./img/icon.png" alt="" /><a href=""><img src="./img/img2.jpg" alt="" /></a></li>
                    <li><img src="./img/icon.png" alt="" /><a href=""><img src="./img/img3.jpg" alt="" /></a></li>
                </ul>
            </div>
        </>
    )
}
export default Ct;