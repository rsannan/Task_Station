import { useEffect, useState } from "react";
import { useAuthState } from "../../Context/context";
import axios from "axios";
export default function Cards(props) {
  const { listId } = props;
  const appState = useAuthState();
  const [cards, setCards] = useState([]);
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
          card.listId === listId;
        });
        console.log(list);
        setCards(list);
      } catch (error) {
        console.log(error);
      }
    }
    getCards();
  }, []);
  return (
    <>
      {cards.map((card) => {
        const { name, _id } = card;
        return (
          <div key={_id}>
            <ul className="list-inline m-0">
              <a className="list-inline-item">{name}</a>
              <li className="list-inline-item">
                <button
                  className="btn btn-success btn-sm rounded-0"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                >
                  <i className="fa fa-edit"></i>
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  className="btn btn-danger btn-sm rounded-0"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                  onClick={() => {
                    handleBoardDelete(userId, _id);
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
