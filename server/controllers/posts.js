import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find({});
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).send(`No posts with id: ${id}`);

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });
        res.json(updatedPost);

    } catch (error) {
        res.status().json({ message: error.message });
    }
}
