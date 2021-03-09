import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MenuIcon from '@material-ui/icons/Menu';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default function Navbar({grid,setGrid,dark,setDark,notes,setNotes}) {

    const img ="https://images.unsplash.com/photo-1503467913725-8484b65b0715?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";


    const handleStyle = () =>{
        console.log("Teting")
        if(grid){
            setGrid(false);
        }
        else{
            setGrid(true);
        }
        console.log(grid)
    }


    const darkTheme = () =>{
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
          
    }
    const lightTheme = () =>{
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
      
        }  
        
        
    // Change Theme when components loaded

    React.useEffect(() =>{
        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme")==="dark"){
                darkTheme();
            }
            else{
                lightTheme();
            }
        }
    },[])



    

    const handleTheme = () =>{
        if(localStorage.getItem("theme")==="dark"){
            setDark(false);
            localStorage.setItem('theme',"light");
            lightTheme();
        }
        else{
            setDark(true);
            localStorage.setItem('theme',"dark");
            darkTheme();
        }
        console.log(dark)
    }

    


    const [key,setKey] = React.useState('');

    const tempNotes = [...notes];


    const handleSearch = (e) =>{

       

        setKey(e.target.value);

        if(key.length>0){
            setNotes(notes.filter((item)=>item.title.includes(key)));
        }
        else{
            return setNotes(tempNotes);
        }

    }
    return (
        <nav>
            <div className="navbar__wrapper">
            <div className="navbar__left">
                <IconButton><MenuIcon/></IconButton>
                <a href="#"><span>Keep</span></a>
            </div>
<div className="navbar__middle">
    <div className="navbar__searchbox">
        <SearchIcon/>
        <input type="text" name="key" id="key" placeholder="Search" value={key} onChange={handleSearch}/>
    </div>
</div>
<div className="navbar__right">
    <div className="controls">
        <IconButton><RefreshIcon/></IconButton>
        <IconButton onClick={handleStyle}>{grid?<ViewCompactIcon/>:<ViewStreamIcon/>}</IconButton>
        <IconButton onClick={handleTheme}>{dark?<Brightness2Icon className="dark-light"/>:<WbSunnyIcon className="light-dark"/>}</IconButton>

    </div>
    <Avatar src={img}/>
</div>
            </div>
        </nav>
    )
}

