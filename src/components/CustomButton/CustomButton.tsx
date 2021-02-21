type ICustomButtonProps = {
  buttonText: string;
  onClickCallback: Function;
}

export function CustomButton( {buttonText, onClickCallback}: ICustomButtonProps ) {
  return (
    <button onClick={() => onClickCallback()}>
      {buttonText}
    </button>
  );
}