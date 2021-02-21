import { useEffect, useState } from 'react';
import { List } from '../../components/List';
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { useHistory } from 'react-router-dom';

export function Home() {
  const [transformers, setTransformers] = useState<Array<ITransformer>>([]);

  useEffect(() => {
    const fetchTransformers = async () => {
      try {
        const response = await fetch('http://localhost:3004/transformers');
        const json = await response.json();
        setTransformers(json);
      } catch (err) {
        console.log(err); //EXPAND
      }
    };
    fetchTransformers();
  }, []);

  let history = useHistory();
  function addNewClick() {
    history.push("/add");
  }
  return (
    <>
      <Header />
      <List transformers={transformers} />
      <CustomButton
        buttonText="Add transformer"
        onClickCallback={addNewClick}
      />
    </>
  );
}
