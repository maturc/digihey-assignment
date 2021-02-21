import { useEffect, useState } from 'react';
import { List } from '../../components/List';

export function Home() {
  //'http://localhost:3004/transformers'
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

  return (
    <>
      <List transformers={transformers} />
    </>
  );
}
