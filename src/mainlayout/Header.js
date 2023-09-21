import Hdcss from '../scss/main/header.module.scss'

const Hd = (props) => {


    return (
        <div className={Hdcss.header}>
            <header className={Hdcss.container}>
                <div className={`d-flex justify-content-between`}>
                    {/* <div className="">
                        <ul>
                            <li><a href="">언어</a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div> */}
                    <div className="">
                        <a href=""><img src="./img/logo3.png" alt="" /></a>
                    </div>
                    <ul className={`d-flex`}>
                            <li className=""><a href="" className="d-block">차례</a></li>
                            <li className=""><a href="" className="d-block">소개</a></li>
                            <li className=""><a href="" className="d-block">전통놀이</a></li>
                            <li className=""><a href="" className="d-block">체험장소</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default Hd;