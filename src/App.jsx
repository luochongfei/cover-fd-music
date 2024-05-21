import { useRef } from 'react';
import MainNav from './components/MainNav';
import HambMenu from './components/HambMenu';
import ScrollWords from './components/ScrollWords';
import FooterIntro from './components/FooterIntro';
import './App.css';

function App() {
    const containerRef = useRef(null);

    return (
        <>
            {/* 顶部导航 */}
            <header className="nav">
                {/* logo */}
                <div className="logo">
                    <img src="/logo-white.svg" alt="logo" />
                </div>

                {/* 主导航 */}
                <MainNav containerRef={containerRef}></MainNav>

                {/* 汉堡菜单入口 */}
                <HambMenu></HambMenu>
            </header>

            {/* 主体 */}
            <div className="main">
                {/* 滚动文字 */}
                <section className="main-section">
                    <ScrollWords containerRef={containerRef}></ScrollWords>
                </section>
            </div>

            <footer>
                {/* 左下角说明 */}
                <FooterIntro></FooterIntro>
            </footer>
        </>
    );
}

export default App;
