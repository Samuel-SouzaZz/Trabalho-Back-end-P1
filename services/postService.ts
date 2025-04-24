import { Post } from "../models/post";
import { getUserById } from "./userService";

let posts: Post[] = [
    { id: 1, authorId:1, victimId:2, gossip: "Diz que é Flamenguista, mas acha que o Zico ainda é titular" },
    { id: 2, authorId:2, victimId:1, gossip: "Diz que é Botafoguense, mas não existem botafoguenses" },
    { id: 3, authorId:3, victimId:1, gossip: "Diz que é Tricolor, mas não existem tricolores com menos de 60 anos" },
];

export function createPost(
    authorId: number,
    victimId: number,
    gossip: string
  ): Post {
    const author = getUserById(authorId);
    if (!author) {
        throw new Error("Author does not exist");
    }

    const victim = getUserById(victimId);
    if (!victim) {
        throw new Error("Victim does not exist");
    }

    if (authorId === victimId) {
        throw new Error("Author and victim cannot be the same");
    }
    const newId = Math.max(...posts.map(p => p.id), 0) + 1;
    const newPost: Post = { id: newId, victimId, authorId, gossip };
    posts.push(newPost);
    return newPost;
}

export function getAllPosts(): Post[] {
  return posts;
}