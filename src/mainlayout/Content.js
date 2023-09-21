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
                    <li>
                        <div className={Ctcss.dt}><p>추석 전통 음식에 대한 종류와 의의</p></div>
                        <img src="./img/icon.png" alt="" />
                        <div className='d-flex'>
                        <a href="">
                            <img src="./img/img1.jpg" alt="" />
                        </a>
                        <span>약과는 유밀과(油蜜果)의 하나로 정월에 많이 만들어 먹었으며 통과의례나 명절, 잔치, 제향(祭享) 때의 필수 음식이었다
                              
                            </span>
                            </div>
                    </li>
                    <li>
                        <div className={Ctcss.dt}><p>추석 전통 놀이의 방법과 의의</p></div>
                        <img src="./img/icon.png" alt="" />
                        <div className='d-flex'>
                        <a href=""><img src="./img/img2.jpg" alt="" /></a>
                        <span>강강술래놀이는 원무를 하는 외에 여러 놀이가 첨가되어 다양하게 전개되는 수도 있다. 손을 잡고 일렬로 서서 맨 앞에 있는 사람이 다음 사람의 팔 밑으로 꿰어 가는
                             고사리꺾기가 있다.
                        </span>
                        </div>
                    </li>
                    <li>
                        <div className={Ctcss.dt}><p>추석 간에 차례와 성묘의 진행 절차와 유의점</p></div>
                        <img src="./img/icon.png" alt="" />
                        <div className='d-flex'>
                        <a href=""><img src="./img/img3.jpg" alt="" /></a>
                        <span>추석에는 설차례와 달리 흰 떡국 대신에 햅쌀로 밥을 짓고 술을 빚으며, 송편을 만들어 차례를 지낸다. 
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Ct;