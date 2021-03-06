import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Home from './component/pages/Home'
import About from './component/pages/About'
import NotFound from './component/pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
  <Router>

<div className="flex flex-col justify-between h-screen">
  <NavBar />
  <main>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
  </main>

  <Footer />
</div>
</Router>
    </GithubProvider>
  
  );
}

export default App;
