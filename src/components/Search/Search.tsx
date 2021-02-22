import { useEffect, useState } from "react";
import './search.css';

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
  }, [searchKeyword, transformers, setFilteredTransformers]);

  return (
    <div className="search">
      <input type="text" id="search" name="search" placeholder="Search" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>
    </div>
  );
}