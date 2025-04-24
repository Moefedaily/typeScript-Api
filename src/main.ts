// src/main.ts
import { fetchUsers } from "./services/api";
import { displayUser, displayAllUsers } from "./util/display";

async function main() {
  try {
    console.log("Fetching users...");
    const users = await fetchUsers();
    console.log(`Successfully fetched ${users.length} users`);

    console.log("\nDisplaying first user:");
    displayUser(users[0]);

    console.log("\nDisplaying all users:");
    displayAllUsers(users);
  } catch (error) {
    console.error("Error in main:", error);
  }
}

main();
