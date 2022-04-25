import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './src/features/home/Home';
import { Search } from './src/features/search/Search';
import { Item } from './src/features/search/Item';
import { Wrapper } from './src/features/wrapper/Wrapper';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="/search/:id" element={<Item />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
