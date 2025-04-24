import { User, Post } from "../interfaces/type";

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

export function displayPost(post: Post): void {
  console.log(`
      Post ID: ${post.id}
      Title: ${post.title}
      Body: ${post.body}
    `);
}

export function displayPostsForUser(user: User, posts: Post[]): void {
  console.log(`\n===== POSTS FOR ${user.name.toUpperCase()} =====`);

  if (posts.length === 0) {
    console.log(`No posts found for this user.`);
    return;
  }

  posts.forEach((post) => displayPost(post));
}
