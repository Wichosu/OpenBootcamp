import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

//? Estilo para usuario logueado
const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: 'white'
};

//? Estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  fontWeight: 'bold'
}
// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={loginAction}>Login</button>
  )
}

const LogoutButton = ({logoutAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={logoutAction}>Logout</button>
  )
}

//? (Expresion true) && expresion =>  se renderiza la expresion
//? (Expresion false) && expresion => No se renderiza la expresion


const OptionalRender = () => {

  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  const updateAccess = () => {
    setAccess(!access);
  }

  const loginAction = () => {
    setAccess(true);
  }

  const logoutAction = () => {
    setAccess(false)
  }

  let optionalButton;

  // if(access){
  //   optionalButton = <button onClick={updateAccess}>Logout</button>
  // } else{
  //   optionalButton = <button onClick={updateAccess}>Login</button>
  // }

  if(access){
    optionalButton = <LogoutButton propStyle={loggedStyle} logoutAction={logoutAction}></LogoutButton>
  } else{
    optionalButton = <LoginButton propStyle={unloggedStyle} loginAction={loginAction}></LoginButton>
  }

  //Unread messages
  let addMessages = () => {
    return (
      setNMessages(nMessages + 1)
    )
  }

  return (
    <div>
      {/* Optional button */}
      { optionalButton }
      {/* N Messages unread */}
      {/* { nMessages > 0 && nMessages === 1 && <p>You have { nMessages } new messages...</p>}
      { nMessages === 0 && <p>There are no messages</p>} */}
      {/* Ternary operator */}
      { access ? (
        <div>
          { nMessages > 0 ?
            <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p>
            :
            <p>You have no messages</p>
          }
          <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new Message'}</button>
        </div>)
        :
        null
      }
    </div>
  );
}

export default OptionalRender;
