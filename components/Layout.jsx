import React from 'react'
import Navbar from './Navbar'

export default function Layout({children,...pageProps}) {
    const {grid,setGrid,dark,setDark,notes,setNotes} = pageProps;
    
    return (
        <div>
            <Navbar grid={grid} setGrid={setGrid} dark={dark} setDark={setDark} setNotes={setNotes} notes={notes}/>
            {
                children
            }
        </div>
    )
}
