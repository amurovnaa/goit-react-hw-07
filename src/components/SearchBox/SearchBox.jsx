import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";
import { useId } from "react";

export const SearchBox = ({ value, onChange }) => {
  const searchId = useId();
  const dispath = useDispatch();

  const onSearch = (filter) => {
    dispath(changeFilter(filter));
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor={searchId} className={s.paragraph}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        id={searchId}
        name="search_name"
        placeholder="Enter name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
