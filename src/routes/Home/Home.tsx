import { useEffect, useState } from 'react';
import { List } from '../../components/List';
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { useHistory } from 'react-router-dom';
import { Search } from '../../components/Search';

export function Home() {
  const [transformers,         setTransformers]         = useState<Array<ITransformer>>([]);
  const [filteredTransformers, setFilteredTransformers] = useState<Array<ITransformer>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [update, setUpdate] = useState<number>(0);

  useEffect(() => {
    const fetchTransformers = async () => {
      try {
        const response = await fetch('http://localhost:3004/transformers');
        const json = await response.json();
        setTransformers(json);
        setFilteredTransformers(json);
        setIsLoading(false);
      } catch (err) {
        console.log(err); //EXPAND
      }
    };
    fetchTransformers();
  }, [update]);

  let history = useHistory();
  function addNewClick() {
    history.push("/add");
  }
  return (
    <>
      <Header />
      <Search transformers={transformers} setFilteredTransformers={setFilteredTransformers} />
      { isLoading ? <h1>Loading</h1> : <List transformers={filteredTransformers} update={update} setUpdate={setUpdate} /> }
      <CustomButton
        buttonText="Add transformer"
        onClickCallback={addNewClick}
      />
    </>
  );
}
