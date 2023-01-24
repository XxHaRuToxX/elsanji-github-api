"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOptions = void 0;
const constants_1 = require("./constants");
const generateOptions = (_path) => {
    let options;
    return options = {
        hostname: constants_1.constants.hostname,
        path: _path,
        headers: {
            'User-Agent': constants_1.constants.user_agent
        },
        OAUth: process.env.GITHUB_ACCESS_TOKEN
    };
};
exports.generateOptions = generateOptions;
