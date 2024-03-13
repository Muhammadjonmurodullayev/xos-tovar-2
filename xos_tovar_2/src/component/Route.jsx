import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./User.css"
import User from "./User"
import App from "./App"
import Category from './Category'
const Routee=() => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<User/>} />
                    <Route path="/App" element={<App />} />
                    <Route path="/Category/:id" element={<Category />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routee
