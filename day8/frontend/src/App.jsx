import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [note, setNote] = useState([]);

  function FetchNotes() {
    axios.get("http://localhost:3000/notes").then((res) => {
      setNote(res.data.notes);
    });
  }

  useEffect(() => {
    FetchNotes();
  }, []);

  function handleSubmit(e)
  {
    e.preventDefault();

    const {title,description} = e.target.elements;
    console.log(title.value,description.value)

    axios.post("http://localhost:3000/notes",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)
      FetchNotes();

    }
    )

  }

  function handleDeleteNote(noteid)
  {
    console.log(noteid)
    axios.delete("http://localhost:3000/notes/"+noteid)
    .then(res=>{
      console.log(res.data)
    })

  }

  function handleUpdate(noteId)
  {
    console.log(noteId)
    const desc = prompt("Enter Updated Description");
    console.log(desc)

    axios.patch(`http://localhost:3000/notes/${noteId}`,{
      description:desc
    })
    .then(res=>{
      console.log(res.data)
    })


  }

  return (
    <>
      <div className="Notes_creator" onSubmit={handleSubmit}>
        <form className="former">
          <input type="text" placeholder="Enter the Titlte " name="title" />
          <input type="text" placeholder="Enter the Description" name="description"  />
          <button >Create Note</button>


        </form>
      </div>

      <div className="notes">
        {note.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{
                handleDeleteNote(note._id)
              }}>Delete Note</button>

              <button  onClick={()=>{
                handleUpdate(note._id)
              }}  >Update Description</button>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
