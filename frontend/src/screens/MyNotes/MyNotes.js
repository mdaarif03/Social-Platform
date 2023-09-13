import { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/noteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/errorMessage";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const [notes, setNotes] =useState([]);

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  // console.log(notes);

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title={`Welcome Back ${userInfo?.name}...`}>
      {/* {console.log(notes)} */}
      <Link to="/createnote">
        <Button style={{ margin: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {notes &&
        notes
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((note) => (


            <Accordion defaultActiveKey={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 20,
                  }}
                >
                  <Accordion.Header
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                  {note.title}
                  </Accordion.Header>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category-{note.category}</Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>

                    <ReactMarkdown>{note.content}</ReactMarkdown>

                    <footer className="blockquote-footer">
                      Created On{" "}
                      <cite title="Source Title">
                        {note.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
            // </Accordion>
          ))}
    </MainScreen>
  );
};

export default MyNotes;
