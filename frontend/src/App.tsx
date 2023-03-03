import { Home } from "./pages/Home";
import { About } from './pages/About'
import { Navbar } from "./components/Navbar";
import { LayoutContainer } from "./styled-components";

function App() {
    return (
        <>
            <Navbar />
            <LayoutContainer>
                <Home />
                <About />
            </LayoutContainer>
        </>
    )
}

export default App