import firebase from "../firebase/firebase";
import { useState, useEffect } from "react";
import Comment from "./Comment";

function Comments({ shelterID }) {
    const [currentComments, setCurrentComments] = useState({});
    const [commentAdded, setCommentAdded] = useState(false);

    const [formData, setFormData] = useState({ user: "", comment: "" });

    useEffect(() => {
        updateComments()
    }, [commentAdded]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await firebase.addShelterComment(shelterID, formData)
        setCommentAdded(true)
    };

    const updateComments = async () => {
        const shelterComments = await firebase.getShelterComments(shelterID)
        setCurrentComments(shelterComments)
    };

    return (
        <>
            <div className="mx-auto w-75 p-2 ">
                {!commentAdded ?
                    <div>
                        Dodaj Komentarz
                        <div className="card mb-3 bg-white">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-1">
                                        <span className="input-group-text">Komentarz </span>
                                        <textarea className="form-control bg-light"
                                                  id="comment"
                                                  name="comment"
                                                  value={formData.comment}
                                                  onChange={handleChange}
                                                  placeholder="" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-grow-1 me-1">
                                            <div className="input-group">
                                                <span className="input-group-text">Użytkownik</span>
                                                <input type="text"
                                                       className="form-control bg-light"
                                                       id="user"
                                                       name="user"
                                                       value={formData.user}
                                                       onChange={handleChange}
                                                       placeholder="" />
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary text-white">Wyślij</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <p className="card-text">Dziękujemy za dodanie komentarza!</p>
                        </div>
                    </div>}

                Komentarze
                {Object.keys(currentComments).length > 0 ?
                    Object.entries(currentComments).map(([docID, commentData]) => (
                        <Comment key={docID} commentData={commentData} />
                    ))
                    :
                    <div className="text-muted my-1">Brak komentarzy dla tego schroniska.</div>
                }
            </div>
        </>
    );
}

export default Comments;