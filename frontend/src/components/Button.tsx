interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  }
  
  export const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {
    return (
      <button type={type} onClick={onClick} className="button">
        {text}
      </button>
    );
  };