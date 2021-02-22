import { useEffect, useState } from "react";

type ISearchProps = {
  transformers: Array<ITransformer>
  setFilteredTransformers: Function;
}

export function Search( {transformers, setFilteredTransformers}: ISearchProps ) {
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    const keyword = searchKeyword.toLowerCase();
    const filteredArray = transformers.filter((item) => item.name.toLowerCase().includes(keyword));
    setFilteredTransformers(filteredArray);
  }, [searchKeyword]);

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" name="search" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>
    </div>
  );
}