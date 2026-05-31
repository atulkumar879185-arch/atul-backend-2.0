import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.css'

const App = () => {

  const [note, setnote] = useState([])

  const fetchnote = (async () => {
    const note = await axios.get('http://localhost:3000/detail')
    setnote(note.data.data)
  })
  useEffect(() => {
    fetchnote()
  }, [])


  const submithandler=((e)=>{
    e.preventDefault()
    const {name,course}=e.target
    console.log(name.value,course.value);
    axios.post('http://localhost:3000/detail',{
      name:name.value,
      course:course.value
    })
    .then((res)=>{
      console.log(res.data);
      fetchnote()
      // clear the input fields after submission
        name.value = ""
        course.value = ""
    } )  
  })

  const deletehandler=((noteid)=>{
    console.log(noteid)
    axios.delete('http://localhost:3000/notedelete/'+noteid)
    .then(res=>{
      console.log(res.data)
      fetchnote()
    })

  })


  const updatehandler=((e)=>{
      
  })








  return (
    <div>
      {/* form create postapi */}
      <div id='form'>
        <form onSubmit={submithandler}>
          <input type='text' name="name" placeholder='enter your name'></input>
          <input type='text' name="course" placeholder='enter your course'></input>
          <button>create note</button>
        </form>
      </div>



      {/* fetchdata */}
      <div id='createnote'>
        {note.map((e, i) => {
          return (
            <div id="card" key={i}>
              <h1>{e.name}</h1>
              <p>{e.course}</p>
              <button onClick={()=>{
                deletehandler(e._id)
              }}>delete</button>
            </div>
          )
        })}
      </div>



    </div>

  )
}

export default App
