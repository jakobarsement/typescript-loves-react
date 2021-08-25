interface ChildProps {
  color: string;
  onClick(): void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

//below is also valid when you want to make use of functions such as ChildAsFC.displayName
//this method also includes internal interface that allows 'children' props within
//component tags such as <ChildAsFC> this is a children prop by default</ChildAsFC>.
//the former method requires that you add "children" to the interface
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
