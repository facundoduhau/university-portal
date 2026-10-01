import {
    integer,
    numeric,
    pgTable,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const cars = pgTable("cars", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    make: varchar("make", { length: 100 }).notNull(),
    year: integer("year").notNull(),
    model: varchar("model", { length: 100 }).notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
