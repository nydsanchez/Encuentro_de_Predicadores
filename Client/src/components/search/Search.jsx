import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";
import PropTypes from "prop-types";

import styles from "./Search.module.css";

const Search = ({ entity }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(search("entity", id));
  };
  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder={`Buscar por ${entity} id`}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

Search.propTypes = {
  entity: PropTypes.string.isRequired,
};

export default Search;
