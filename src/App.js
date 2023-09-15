import Hd from './mainlayout/Header'
import Ct from './mainlayout/Content'
import Ft from './mainlayout/Footer'
import db from './data/db.json'

function App() {
  return (
    <div className="App">
      <Hd dbpath={db}></Hd>
      <Ct></Ct>
      <Ft dbpath={db}></Ft>
    </div>
  );
}

export default App;
