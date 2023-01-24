"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getCommit = exports.getAllRepos = exports.getUser = exports.getUsersList = exports.getUsers = exports.getEmojis = void 0;
const constants_1 = require("../utils/constants");
const githubUtils_1 = require("../utils/githubUtils");
const https = __importStar(require("https"));
const getEmojis = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.params.user;
        const options = (0, githubUtils_1.generateOptions)('/emojis');
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getEmojis = getEmojis;
const getUsers = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = (0, githubUtils_1.generateOptions)('/users');
        console.log('lllllleega');
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getUsers = getUsers;
const getUsersList = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const since = req.query.since;
        const per_page = req.query.per_page;
        // const options = generateOptions('/users?since=' + since + '&per_page=' + per_page)
        const options = (0, githubUtils_1.generateOptions)(`/users?since=${since}&per_page=${per_page}`);
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getUsersList = getUsersList;
const getUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.params.user;
        const options = (0, githubUtils_1.generateOptions)('/users/' + user);
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getUser = getUser;
const getAllRepos = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.params.user;
        // const reponame = req.params.reponame;
        const options = (0, githubUtils_1.generateOptions)('/users/' + user + '/repos');
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getAllRepos = getAllRepos;
const getCommit = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.params.user;
        const reponame = req.params.reponame;
        const options = (0, githubUtils_1.generateOptions)('/repos/' + user + '/' + reponame + '/commits');
        https.get(options, function (apiResponse) {
            apiResponse.pipe(res);
        }).on('error', (e) => {
            console.log(e);
            res.status(500).send(constants_1.constants.error_message);
        });
    });
};
exports.getCommit = getCommit;
