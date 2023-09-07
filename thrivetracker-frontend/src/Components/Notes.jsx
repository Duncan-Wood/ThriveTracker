
export default function Notes(props) {
  console.log(props.timeTracker)
  console.log(props.notes)
  return (
    <>
      {props.notes ? (
        <div>
          <button>Add Note</button>
          <h3>{props.notes[0].title}</h3>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
