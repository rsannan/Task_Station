import "./sidenav.css";
import BoardModal from "../Modals/BoardModal";
import reducer from "../../Context/reducer";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { useAuthState, useAuthDispatch } from "../../Context/context";
import { useNavigate } from "react-router-dom";
import { CHANGE_BOARD, DONE } from "../../Context/actions";
const defaultState = {
  boardId: "",
};
export default function SideNav() {
  const navigate = useNavigate();
  const appState = useAuthState();
  const appDispatch = useAuthDispatch();
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    async function getUser() {
      try {
        const token = appState.token;
        const url = "http://127.0.0.1:8000/api/users/me";
        const config = {
          headers: { "x-auth-token": token },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        setUser(data.user);
      } catch (error) {}
    }
    getUser();
  }, []);
  useEffect(() => {
    getBoards();
  }, [appState]);
  async function getBoards() {
    try {
      const url = "http://127.0.0.1:8000/api/boards";
      const response = await axios.get(url);
      const data = await response.data;
      setBoards(data);
    } catch (error) {}
  }

  const userId = user._id;
  async function handleBoardDelete(userId, boardId) {
    const token = appState.token;
    const url = "http://127.0.0.1:8000/api/boards/" + boardId;
    const data = {
      user: { _id: userId },
    };
    const config = {
      headers: { "x-auth-token": token },
      data,
    };

    const response = await axios.delete(url, config);
    appDispatch({ type: DONE });
  }
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white vh-100"
    >
      <div className="position-static">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <button
              className="btn btn-outline-secondary"
              data-bs-toggle="collapse"
              href="#workBoards"
              type="button"
              aria-expanded="false"
              aria-controls="workBoards"
            >
              Work Boards
            </button>
          </a>
          <ul className="collapse multi-collapse" id="workBoards">
            <li className="my-3">
              <BoardModal />
            </li>
            {boards.map((board) => {
              const { user, name, _id } = board;
              if (user === userId) {
                return (
                  <li key={name}>
                    <div>
                      <ul className="list-inline m-0 d-flex justify-content-end">
                        <a
                          className="aname me-5"
                          onClick={() => {
                            appDispatch({
                              type: CHANGE_BOARD,
                              payload: { _id, name },
                            });
                          }}
                        >
                          {name}
                        </a>
                        <li>
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
                        <li>
                          <button
                            className="btn btn-danger btn-sm rounded-0"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            onClick={() => {
                              handleBoardDelete(userId, _id);
                              appDispatch({ type: DONE });
                            }}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
