import './SearchBar.css';

export default function SearchBar({ searchTodo }) {
    return (
        <div className="SearchBar">
            <input id="searchBar" type="search" placeholder="Search To-Do" onChange={searchTodo} />
            <span></span>
        </div>
    )
}
