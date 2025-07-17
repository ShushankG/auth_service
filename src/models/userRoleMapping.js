import { bigint, mysqlTable,timestamp} from "drizzle-orm/mysql-core";
import { users } from "./user.js";
import { roles } from "./role.js";
export const userRoleMapping= mysqlTable("user_role_mappings",{
    user_id: bigint('user_id',{unsigned:true}).notNull().references(()=>users.id,{onDelete:'cascade'}),
    role_id: bigint('role_id',{unsigned:true}).notNull().references(()=>roles.id,{onDelete:'cascade'}),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
    
})
