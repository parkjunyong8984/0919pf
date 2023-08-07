import Hdcss from '../scss/main/header.module.scss'

const Hd = (props) => {


    return (
        <div>
            <header>
                <div className={`d-flex justify-content-between`}>
                    <a href="" className="d-block"><img src="" alt="logo" /></a>
                    <ul className="" id={Hdcss.gnb}>
                        <li className="">
                            <a href="" className="d-block">menu</a>
                            <ul>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                            </ul>
                        </li>
                        <li className="">
                            <a href="" className="d-block"></a>
                            <ul>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                            </ul>
                        </li>
                        <li className="">
                            <a href="" className="d-block"></a>
                            <ul>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                            </ul>
                        </li>
                        <li className="">
                            <a href="" className="d-block"></a>
                            <ul>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                                <li><a href="" className="d-block">SubMenu</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default Hd;