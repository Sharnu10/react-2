export default function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search.."
      value={query}
      onInput={(e) => setQuery(e.target.value)}
    />
  );
}
