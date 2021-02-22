import './customButton.css';

type ICustomButtonProps = {
  buttonText: string;
  onClickCallback: Function;
}

export function CustomButton( {buttonText, onClickCallback}: ICustomButtonProps ) {
  return (
    <button className="button" onClick={() => onClickCallback()}>
      {buttonText}
    </button>
  );
}