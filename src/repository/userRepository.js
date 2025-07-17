import { db } from "../config/dbConfig.js";
import { users } from "../models/user.js";
import { eq } from "drizzle-orm";

export class userRepository {
  async create(user) {
    let response = await db.insert(users).values({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    let insertedUser = await db
      .select()
      .from(users)
      .where(eq(users.id, response[0].insertId));

    return insertedUser;
  }

  async getUserByEmail(user) {
    let response = await db
      .select()
      .from(users)
      .where(eq(users.email, user.email));
    return response;
  }
}
