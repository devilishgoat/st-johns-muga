"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
exports.default = new pg_1.Pool({
    max: 20,
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 30000
});
