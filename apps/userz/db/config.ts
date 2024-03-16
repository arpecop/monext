import { NOW, column, defineDb, defineTable } from "astro:db";

export const Company = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    logo: column.text(),
  },
});

export const Users = defineTable({
  columns: {
    username: column.text(),
    name: column.text(),
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    password_hash: column.text(),
  },
});
const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text({ references: () => Users.columns.id, notNull: true }),
    expiresAt: column.number(),
  },
});
export const JobType = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    value: column.text({ unique: true }),
  },
});

export const JobPosting = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    companyId: column.number({ references: () => Company.columns.id }),
    description: column.text(),
    type: column.number({ references: () => JobType.columns.id }),
    location: column.text(),
    posted: column.date({ default: NOW }),
    richText: column.text({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    JobPosting,
    Company,
    JobType,
    Users,
    Sessions,
  },
});
