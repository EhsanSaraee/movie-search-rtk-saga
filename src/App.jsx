import Home from 'pages/Home';
import Movie from 'pages/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
