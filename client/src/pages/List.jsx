import SearchBar from "../components/List/SearchBar";
import gisements from "../mocks/gisements.json";

export default function List() {
  return (
    <>
      <div className="font-sans text-black bg-white flex flex-col items-center justify-center">
        <SearchBar gisements={gisements} />
      </div>
    </>
  );
}
