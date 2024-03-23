import './App.css';
import Header from "@/Components/Header/Header";
import Title from './Components/Title/Title';
import Men from "@/Components/Men/Men";
import Content from "@/Components/Content/Content";
function App() {

    return (
        <div className={'container'}>
            <Header/>
            <Title/>
            <div className={'contentWrapper'}>
                <Men/>
                <Content/>
            </div>
        </div>
    )
}

export default App
