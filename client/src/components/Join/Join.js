import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

       <h1 className="heading">Bienvenido a Chat Bubble</h1>
       

        <div>
          <input placeholder="Escriba su nombre aquí" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Sala a la que desee acceder" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Registrese</button>
        </Link>
      </div>
    </div>
  );
}

