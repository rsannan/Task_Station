import "./dashboard.css";
import reducer from "../../Context/reducer";
import logo from "../../assets/addtask1.png";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import CardModal from "../Modals/CardModal";
import ListModal from "../Modals/ListModal";
import { useAuthState, useAuthDispatch } from "../../Context/context";
import { DONE } from "../../Context/actions";
import Cards from "../Card/Cards";
export default function Dashboard() {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const state = useAuthState();
  const appDispatch = useAuthDispatch();
  useEffect(() => {
    async function getLists() {
      try {
        const url = "http://127.0.0.1:8000/api/lists";
        const config = {
          data: { boardId: state.boardId },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        const list = data.list.filter((obj) => obj.boardId === state.boardId);
        setLists(list);
      } catch (error) {
        console.log(error);
      }
    }
    getLists();
  }, [state]);
  function handleRemoveList(listId, name) {
    const url = "http://127.0.0.1:8000/api/lists/" + listId;
    const config = {
      data: {
        boardId: state.boardId,
        name,
      },
    };
    const req = async () => {
      await axios.delete(url, config);
    };
    req();
    appDispatch({ type: DONE });
  }
  return (
    <div className="dashcon">
      <div className="dashboard">
        <div>
          <div className="dashcard">
            <h5 className="p-2">Current Board: {state.boardName}</h5>
          </div>
        </div>
        {lists.map((list) => {
          const { name, position, _id } = list;
          return (
            <div key={_id}>
              <div className="dashcard">
                <div className="dashtitle">
                  <div className="d-flex">
                    <h5 className="ms-5">{name}</h5>
                    <button
                      className="btn btn-danger btn-sm rounded-0 ms-auto"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onClick={() => {
                        handleRemoveList(_id, name);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                  <hr />
                  <Cards listId={_id} />
                  <CardModal listId={_id} position={position} />
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <div className="dashcard">
            <ListModal />
          </div>
        </div>
      </div>
    </div>
  );
}
