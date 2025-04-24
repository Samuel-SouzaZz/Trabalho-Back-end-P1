import { User } from "../models/user";

let users: User[] = [
  { id: 1, name: "Nelsinho" },
  { id: 2, name: "Soninha" },
  { id: 3, name: "Leozin" },
];

export function createUser(name: string): User {
  const newId = Math.max(...users.map(a => a.id), 0) + 1;
  const newUser: User = { id: newId, name };
  users.push(newUser);
  return newUser;
}

export function getAllUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find(a => a.id != id);
}