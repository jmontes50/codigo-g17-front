import { useRef, useState, useEffect, Fragment } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../app/auth/authSlice";
import { addMessage } from "../services/dbService";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const inputMessage = useRef();

  const user = useSelector(selectUser);

  const handleMessage = async () => {
    try {
      const newMessage = {
        uid: user.uid,
        name: user.user,
        message: inputMessage.current.value,
        photo: user.photo,
      };
      const messageSend = await addMessage(newMessage);
      console.log(messageSend);
    } catch (error) {
      console.log(error);
    }
  };

  const anotherMessage = (msg) => (
    <div className="align-self-start d-flex mb-3">
      <img
        className="rounded-circle mx-2"
        src={msg.photo}
        alt={msg.name}
        style={{ height: "50px" }}
      />
      <div className="border border-info rounded p-2">
        <small className="text-secondary">{msg.name}</small>
        <br />
        {msg.message}
      </div>
    </div>
  );

  const myMessage = (msg) => (
    <div className="align-self-end d-flex mb-3 text-end" style={{maxWidth:'300px'}}>
      <div className="border border-info bg-info p-2 text-dark bg-opacity-75 rounded">
        <small className="text-secondary">{msg.name}</small>
        <br />
        {msg.message}
      </div>
      <img
        className="rounded-circle mx-2"
        src={msg.photo}
        alt={msg.name}
        style={{ height: "50px" }}
      />
    </div>
  );

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("timestamp", "asc"));
    onSnapshot(q, (querySnapshot) => {
      console.log({ querySnapshot });
      const chatsObtained = [];
      // se llama forEach pero no es el forEach que conocemos, es un metodo con ese nombre que viene de la respuesta de firestore
      querySnapshot.forEach((doc) => {
        chatsObtained.push(doc.data());
      });
      setChats(chatsObtained);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Chat</h1>
        </div>
        <div className="col-12 col-md-6 bg-gray"></div>
        <div className="col-12 col-md-6 border border-secondary-subtle rounded p-4">
          <div>
            <h5 className="pb-3">{user.user}</h5>
          </div>
          {/* area chat */}
          <div className="d-flex flex-column p-2">
            <div className="d-flex flex-column overflow-y-scroll border" style={{maxHeight:'52vh'}}>
              {chats.map((ch, i) => (
                <Fragment key={i}>
                  {/*  */}
                  {user.uid === ch.uid ? (myMessage(ch)) : (anotherMessage(ch))}
                </Fragment>
              ))}
             
            </div>
            {/* input */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu mensaje"
                ref={inputMessage}
              />
              <button
                className="input-group-text btn btn-info"
                onClick={handleMessage}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      "
    </div>
  );
}
