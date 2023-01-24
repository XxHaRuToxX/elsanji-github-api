"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterGithub = void 0;
const express_1 = require("express");
const githubController_1 = require("../controllers/githubController");
const router = (0, express_1.Router)();
exports.RouterGithub = router;
router.get('/emojis', githubController_1.getEmojis);
// router.get('/users', getUsers)
router.get('/users', githubController_1.getUsersList);
router.get('/users/:user/details', githubController_1.getUser);
router.get('/users/:user/repos', githubController_1.getAllRepos);
router.get('/commit/:user/:reponame', githubController_1.getCommit);
