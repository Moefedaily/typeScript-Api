"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayUser = displayUser;
exports.displayAllUsers = displayAllUsers;
function displayUser(user) {
    console.log(`
    User ID: ${user.id}
    Name: ${user.name}
    Email: ${user.email}
    Phone: ${user.phone}
    Website: ${user.website}
    Company: ${user.company.name}
  `);
}
function displayAllUsers(users) {
    console.log("===== ALL USERS =====");
    users.forEach((user) => displayUser(user));
}
