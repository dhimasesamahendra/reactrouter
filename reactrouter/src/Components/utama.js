import React from "react";
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';

const Utama = () => (

    
        <Routes>
            <Route path="/" element={<Beranda />}></Route>
            <Route path="/tentangsaya" element={<TentangSaya />}></Route>
            <Route path="/karya" element={<Karya />}></Route>
            <Route path="/kontak" element={<Kontak />}></Route>
        </Routes>
    
)

export default Utama;