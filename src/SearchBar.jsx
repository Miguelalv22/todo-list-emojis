export default function SearchBar({ searchTodo }) {
    return (
        <input id="searchBar" type="search" placeholder="Search To-Do" onChange={searchTodo} />
    )
}
