import { Home } from "./pages";
import { Navbar } from "./components/Navbar";
import { LayoutContainer } from "./styled-components";

function App() {
    return (
        <>
            <Navbar />
            <LayoutContainer>
                <Home />
            </LayoutContainer>
        </>
    )
}

export default App