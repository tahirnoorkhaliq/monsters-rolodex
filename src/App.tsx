import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState(""); //[value to store,setvalue]
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    console.log("useEffect");    
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className={"monster-ssearchBox"}
        onChangeHandler={onSearchChange}
        placeholder={"Search Monster"}
      />
      <br />
      <SearchBox
        className={"monster-ssearchBox"}
        onChangeHandler={onTitleChange}
        placeholder={"set Title"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
