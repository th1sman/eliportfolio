import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Consulting } from "./components/Consulting"
import { Dinners } from "./pages/Dinners"
import { Footer } from "./components/Footer";
import { LayoutContainer } from "./styled-components";

function App() {
    return (
        <>
            <Navbar />
            <LayoutContainer>
                <About />
                <Dinners />
            </LayoutContainer>
        </>
    )
}

export default App