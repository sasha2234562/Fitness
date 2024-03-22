import './App.css'
import Header from "./Components/Header/Header.tsx";
import Title from "./Components/Title/Title.tsx";
import Men from "./Components/Men/Men.tsx";
import Content from "./Components/Content/Content.tsx";
import './App.css'
function App() {

    return (
        <div className={'container'}>
            <Header/>
            <Title/>
            <div style={{display: 'flex', margin: '98px 170px'}}>
                <Men/>
                <Content/>
            </div>
        </div>
    )
}

export default App
