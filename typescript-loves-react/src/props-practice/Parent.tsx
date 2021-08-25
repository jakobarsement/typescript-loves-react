import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      asdfghj
    </ChildAsFC>
  );
};

export default Parent;
