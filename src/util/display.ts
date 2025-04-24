import { User } from "../interfaces/type";

export function displayUser(user: User): void {
  console.log(`
    User ID: ${user.id}
    Name: ${user.name}
    Email: ${user.email}
    Phone: ${user.phone}
    Website: ${user.website}
    Company: ${user.company.name}
  `);
}

export function displayAllUsers(users: User[]): void {
  console.log("===== ALL USERS =====");
  users.forEach((user) => displayUser(user));
}
