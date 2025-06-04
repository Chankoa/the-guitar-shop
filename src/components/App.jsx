// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\App.js
import Banner from './Banner.jsx';
import Cart from './Cart.jsx';
import GuitarList from './GuitarList.jsx';
import '../css/App.css';

function App() {
  return (
    <>
      <Banner />
      <main>   
        <div className="conteneur">
          <section className="grid-layout has-gap grid-1-2-m">
            <Cart />
            <GuitarList />
          </section>
        </div>          
      </main>
    </>
  );
}

export default App;