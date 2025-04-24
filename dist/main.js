"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const api_1 = require("./services/api");
const display_1 = require("./util/display");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching users...");
            const users = yield (0, api_1.fetchUsers)();
            console.log(`Successfully fetched ${users.length} users`);
            console.log("\nDisplaying first user:");
            (0, display_1.displayUser)(users[0]);
            console.log("\nDisplaying all users:");
            (0, display_1.displayAllUsers)(users);
        }
        catch (error) {
            console.error("Error in main:", error);
        }
    });
}
main();
