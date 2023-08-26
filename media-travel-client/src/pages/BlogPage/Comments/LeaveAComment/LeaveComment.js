import React, { useContext } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './LeaveComment.css';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import axios from 'axios';
import { useAuth } from '../../../LogIn/contexts/AuthContext';
import { UserContext } from '../../../../App';
import img from '../../../../resources/img/user.svg'


const LeaveComment = ({setUpdate}) => {
    const { register, handleSubmit, reset } = useForm();
    const { currentUser } = useAuth()
    const { user } = useContext(UserContext)
   
    const onSubmit = data => {
       
        const loading = toast.loading('Uploading...Please wait!');
     

        const commentData = new FormData();
        commentData.append("user",user.eamil || currentUser.email)
        commentData.append("image", user.photoURL || currentUser.photoURL || img)
        commentData.append("postId", ' ')
        commentData.append("comment", data.comment)
        axios.post("http://localhost:5000/comment", commentData)
            .then(res => {
                toast.dismiss(loading);
                setUpdate(true);
                swal("Success!", "Your comment submitted successfully. We appreciate your contirbution.", "success");
                if(res){reset()}
            })
        
    }

    return (
        <div className="w-100">
            <h4 className="leaveCommentTitle">Leave a <span className="brnColor">comment</span></h4>
            <div class="row commentPostCard shadow">
                <Form onSubmit={handleSubmit(onSubmit)} className="commentForm">
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="d-flex commentBoxUser align-items-center"> 
                            <img src={`${user?.photoURL ? user?.photoURL : currentUser?.photoURL ? currentUser?.photoURL : img }`} alt=""/>
                            <p className="userName ms-2">{currentUser?.displayName || 'User'}</p>
                        </div>
                        <div class="rating"> 
                            <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                        </div>
                    </div>
                    <div class="comment-box ml-2">
                        <Form.Group as={Col} md={12}>
                            <Form.Label style={{ fontWeight: "bold" }}></Form.Label>
                            <Form.Control
                                style={{ height: "10rem" }}
                                type="text"
                                as="textarea"
                                {...register("comment", { required: true })}
                                placeholder="write your comment" />
                        </Form.Group>

                        <div class="comment-btns mt-2">
                            <div class="d-flex justify-content-center">
                                <button onClick={() => reset()} className="btn btn-success btn-danger me-2">Cancel</button>
                                <Button type='submit' className="btn-success">Send<FontAwesomeIcon icon={faPaperPlane} /></Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LeaveComment;