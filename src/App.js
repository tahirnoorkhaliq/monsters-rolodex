import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = ()=>{
  console.log('render');
  const [searchField, setSearchField]=useState('');//[value to store,setvalue]
  const[title,setTitle]=useState('');
  const [monsters, setMonsters]=useState([]);
  const [filteredMonsters, setFilterMonsters]=useState(monsters);
  
  useEffect(()=>{
    console.log('useEffect');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
         .then((users)=>setMonsters(users));
  },[]
  );
 
  useEffect(()=>{
  const newFilteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilterMonsters(newFilteredMonsters);
 },[monsters,searchField]);

  const onSearchChange=(event)=>{    
    const searchFieldString=event.target.value.toLocaleLowerCase();            
    setSearchField(searchFieldString);
   };  

   const onTitleChange=(event)=>{    
    const searchFieldString=event.target.value.toLocaleLowerCase();            
    setTitle(searchFieldString);
   }; 

  return( 
          <div className="App">
          <h1 className='app-title'>{title}</h1> 
          <SearchBox className={'monster-ssearchBox'} 
          onChangeHandler={onSearchChange}
           placeholder={'Search Monster'}/> 
<br/>
           <SearchBox className={'monster-ssearchBox'} 
          onChangeHandler={onTitleChange}
           placeholder={'set Title'}/>
           <CardList monsters={filteredMonsters}/>         
          </div> 
        );
    
}

export default App;
