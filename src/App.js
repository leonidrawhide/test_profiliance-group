import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navbar />}>
          <Route index element={ <MainPage /> } />
          <Route path='news' element={ <NewsPage /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
