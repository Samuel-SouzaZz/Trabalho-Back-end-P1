import { Request, Response } from "express";
import {
  createPost,
  getAllPosts
} from "../services/postService";

export function createPostController(req: Request, res: Response): void {
    const { authorId, victimId, gossip } = req.body;
  
    if (!authorId || !victimId || !gossip ) {
      res.status(400).json({ error: "Missing fields in request body" });
      return
    }
  
    try {
      const newPost = createPost(authorId, victimId, gossip);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
}

export function getAllPostsController(req: Request, res: Response): void {
  const list = getAllPosts();
  res.status(200).json(list);
}
