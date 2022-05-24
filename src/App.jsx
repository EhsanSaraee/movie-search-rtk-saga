import { Home, Movie } from 'pages';
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
