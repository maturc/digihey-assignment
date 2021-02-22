import { useEffect, useState } from "react";
import { TransformerForm } from "../../components/TransformerForm";

export function Details(props: any) {
  const id = props.match.params.id;
  
  const [transformer, setTransformer] = useState<ITransformer>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransformers = async () => {
      try {
        const response = await fetch(`http://localhost:3004/transformers/${id}`);
        const json = await response.json();
        setTransformer(json);
        setIsLoading(false);
      } catch (err) {
        console.log(err); //EXPAND
      }
    };
    fetchTransformers();
  }, []);
  return (
    <>
      { isLoading ? <h1>Loading</h1> : <TransformerForm initialTransformer={transformer} /> }
    </>
  );
}