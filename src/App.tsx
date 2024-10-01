import { useEffect, useState, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import { getData } from "./utils/fetch-data";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newMonsters);
  }, [monsters, searchField]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={handleSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
