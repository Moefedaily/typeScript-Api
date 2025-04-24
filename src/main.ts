import { fetchUsers, fetchPostsByUserId } from "./services/api";
import {
  displayUser,
  displayAllUsers,
  displayPostsForUser,
} from "./util/display";

async function main() {
  try {
    console.log("Fetching users...");
    const users = await fetchUsers();
    console.log(`We fetched ${users.length} users`);

    // console.log("\nDisplaying first user:");
    // displayUser(users[0]);

    console.log("\nDisplaying all users:");
    displayAllUsers(users);

    for (const user of users) {
      const posts = await fetchPostsByUserId(user.id);
      displayPostsForUser(user, posts);
    }
  } catch (error) {
    console.error("Error in main:", error);
  }
}

main();
