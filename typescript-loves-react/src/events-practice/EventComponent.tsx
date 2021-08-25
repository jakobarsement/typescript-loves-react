const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('dragging');
  };

  return (
    <div>
      <h3>Events</h3>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
