import React, { useState } from "react";
import styled from "styled-components";

function Search(props) {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => setSearch(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    props.result(search);
    setSearch("");
  };

  return (
    <StyledSearch>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search yout Location"
          value={search}
          onChange={changeHandler}
        />
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  margin-bottom: 30px;

  input {
    width: 80%;
    height: 45px;
    border-radius: 10px;
    padding-left: 20px;
  }
`;

export default Search;
