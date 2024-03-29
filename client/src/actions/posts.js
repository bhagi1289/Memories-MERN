import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post)=> async(dispatch)=>{
    try {
        const {data} = await api.createPost(post);

        dispatch({type:CREATE, payload:data});
    } catch (error) {
        console.log("Error while posting........");
        console.log(error.message);
    }
}

export const updatePost = (id, updatedPost) => async(dispatch)=>{
    try {
        const { data } = await api.updatePost(id, updatedPost);

        dispatch({ type:UPDATE, payload:data});
        
    } catch (error) {
        console.log("Error while Updating the post........");
        console.log(error);
    }
}

export const deletePost = (id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload:id});
    } catch (error) {
        console.log("Error while deleting record...");
        console.log(error.message);
        
    }
}

export const likePost = (id)=>async(dispatch)=>{
    try {
        const { data } = await api.likePost(id);
        
        dispatch({type:LIKE, payload:data});

    } catch (error) {
        console.log("Error while updating like count...");
        console.log(error.message);
    }
}