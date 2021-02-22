import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TransformerForm } from "../../components/TransformerForm";

export function Details(props: any) {
  const id = props.match.params.id;
  
  const [transformer, setTransformer] = useState<ITransformer>();
  const [isLoading,   setIsLoading]   = useState<boolean>(true);
  const [isError,     setIsError]     = useState<boolean>(false);

  useEffect(() => {
    const fetchTransformers = async () => {
      try {
        const response = await fetch(`http://localhost:3004/transformers/${id}`);
        const json = await response.json();
        if(Object.keys(json).length === 0) throw new Error("404 Not Found");
        setTransformer(json);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchTransformers();
  }, [id]);
  const success = <TransformerForm initialTransformer={transformer} />
  const error = <h1>404 Not Found</h1>;
  console.log(isError)
  return (
    <>
      <Header />
      { isLoading ? <h1>Loading</h1> : isError? error : success }
    </>
  );
}