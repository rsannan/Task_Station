import { useEffect, useState } from "react";
import { useAuthState, useAuthDispatch } from "../../Context/context";
import axios from "axios";
import "./cards.css";
import CardDescription from "../Modals/CardDesription";
export default function Cards(props) {
  const { listId } = props;
  const appState = useAuthState();
  const [cards, setCards] = useState([]);
  const appDispatch = useAuthDispatch();
  useEffect(() => {
    async function getCards() {
      try {
        const url = "http://127.0.0.1:8000/api/cards";
        const config = {
          headers: { "x-auth-token": appState.token },
        };
        const response = await axios.get(url, config);
        const data = await response.data;

        const list = data.cards.filter((card) => {
          return card.listId === listId;
        });
        setCards(list);
      } catch (error) {
        console.log(error);
      }
    }
    getCards();
  });
  function handleCardDelete(id) {
    const url = "http://127.0.0.1:8000/api/cards/" + id;
    const config = {
      headers: { "x-auth-token": appState.token },
    };
    const req = async () => {
      await axios.delete(url, config);
    };
    req();
  }
  return (
    <>
      {cards.map((card) => {
        const { name, _id, description, dueDate } = card;
        return (
          <div key={_id} className="card">
            <ul className="list-inline m-0 justify-content-end d-flex">
              <CardDescription
                name={name}
                description={description}
                dueDate={dueDate}
              />
              <li className="hovhide">
                <button
                  className="btn btn-success btn-sm rounded-0 ms-5 "
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                >
                  <i className="fa fa-edit"></i>
                </button>
              </li>
              <li className="hovhide">
                <button
                  className="btn btn-danger btn-sm rounded-0 "
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                  onClick={() => {
                    handleCardDelete(_id);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
