
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App (){
    return (
        <>
        <Header />
        <ItemListContainer/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App