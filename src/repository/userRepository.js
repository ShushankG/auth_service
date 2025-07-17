import { db } from "../config/dbConfig.js";
import { users } from "../models/user.js";
import { eq } from "drizzle-orm";
import { userRoleMapping } from "../models/userRoleMapping.js";
import { roles } from "../models/role.js";

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
  async isAdmin(user_id) {
    let response = await db
      .select({
        role_name: roles.role,
      })
      .from(userRoleMapping)
      .innerJoin(roles, eq(userRoleMapping.role_id, roles.id))
      .where(eq(userRoleMapping.user_id, user_id));
    return response;
  }
  
}
