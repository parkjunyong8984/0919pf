import Se1 from './component/Section1'
import Se2 from './component/Section2'
import db from '../data/db.json'
const Ct = (props) => {
    return (
        <>
        <Se1 dbpath={db}></Se1>
        <Se2 dbpath={db}></Se2>
        </>
    )
}
export default Ct;