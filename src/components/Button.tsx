interface Props {
  children: string;
  color?: string; // optional property
  onClick: () => void;
  //   onClick: () => ReactNode;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
