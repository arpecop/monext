// This file is generated by Astro DB
declare module 'astro:db' {
	export const db: import("@astrojs/db/runtime").SqliteDB;
	export const dbUrl: string;

	export const JobPosting: import("@astrojs/db/runtime").Table<
		"JobPosting",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"JobPosting","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"JobPosting","primaryKey":false,"optional":false}},"companyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"companyId","collection":"JobPosting","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Company","primaryKey":true}}}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"JobPosting","primaryKey":false,"optional":false}},"type":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"type","collection":"JobPosting","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"JobType","primaryKey":true}}}},"location":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"location","collection":"JobPosting","primaryKey":false,"optional":false}},"posted":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"posted","collection":"JobPosting","default":{"__serializedSQL":true,"sql":"CURRENT_TIMESTAMP"}}},"richText":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"richText","collection":"JobPosting","primaryKey":false,"optional":true}}}
	>;
	export const Company: import("@astrojs/db/runtime").Table<
		"Company",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Company","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Company","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Company","primaryKey":false,"optional":false}},"logo":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"logo","collection":"Company","primaryKey":false,"optional":false}}}
	>;
	export const JobType: import("@astrojs/db/runtime").Table<
		"JobType",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"JobType","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"JobType","primaryKey":false,"optional":false}},"value":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"value","collection":"JobType","primaryKey":false,"optional":false}}}
	>;
	export const Users: import("@astrojs/db/runtime").Table<
		"Users",
		{"username":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"username","collection":"Users","primaryKey":false,"optional":false}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Users","primaryKey":false,"optional":false}},"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Users","primaryKey":true}},"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"Users","primaryKey":false,"optional":false}},"password_hash":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"password_hash","collection":"Users","primaryKey":false,"optional":false}}}
	>;
	export const Sessions: import("@astrojs/db/runtime").Table<
		"Sessions",
		{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Sessions","primaryKey":true}},"userId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"userId","collection":"Sessions","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Users","primaryKey":true}}}},"expiresAt":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"expiresAt","collection":"Sessions","primaryKey":false,"optional":false}}}
	>;
}
