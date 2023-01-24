import { Router } from 'express';
import { getCommit, getEmojis, getAllRepos, getUser, getUsers, getUsersList } from '../controllers/githubController';

const router = Router();

router.get('/emojis', getEmojis)

// router.get('/users', getUsers)

router.get('/users', getUsersList)

router.get('/users/:user/details', getUser)

router.get('/users/:user/repos', getAllRepos)

router.get('/commit/:user/:reponame', getCommit)

export {
    router as RouterGithub
};