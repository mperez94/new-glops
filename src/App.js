
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App (){
    return (
        <>
        <Header />
        <Main/>
        <ItemListContainer/>
        <Footer/>
        </>
    )
}

export default App