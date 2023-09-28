import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Trainers = ({trainers, setTrainers}) => {
  const [name, setName] = useState('');

  const submit = async(event) => {
    event.preventDefault();
    const newTrainer = {name};
    const {data} = await axios.post('/api/trainers', newTrainer);
    console.log(newTrainer);
    console.log(data);
    setTrainers([...trainers, data])
  }

    return (
      <div>
        <h1>All the Trainers</h1>
        {
          trainers.map((trainer) => {
            return(
                <div key={trainer.id}>
                    <Link to={`/trainers/${trainer.id}`}> <h3 >{trainer.name}</h3></Link>
                </div>
             
            )
          })
        }
        <form onSubmit={submit}>
          <label>
            Add Trainer:
            <input type="text" onChange={ev => setName(ev.target.value)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  export default Trainers