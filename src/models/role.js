import { mysqlTable, varchar, serial, timestamp } from "drizzle-orm/mysql-core";
export const roles = mysqlTable("roles", {
  id: serial("id",{unsigned:true}).primaryKey(),
  role: varchar("role", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

