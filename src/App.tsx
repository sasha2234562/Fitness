import './App.css';
import Header from "@/app/Header/Header";
import Title from '@/app/Title/Title';
import Men from "@/app/Men/Men";
import Content from "@/app/Content/Content";
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
