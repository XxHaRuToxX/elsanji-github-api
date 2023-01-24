import { Request, Response } from 'express';
import { constants } from '../utils/constants';
import { generateOptions } from '../utils/githubUtils';
import * as https from 'https';

export const getEmojis= async function (req: Request, res:Response) {
    const user = req.params.user;
    const options = generateOptions('/emojis')
    
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

export const getUsers= async function (req: Request, res:Response) {
    const options = generateOptions('/users')
    console.log('lllllleega')
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}
export const getUsersList = async function (req: Request, res:Response) {
    const since = req.query.since;
    const per_page = req.query.per_page;
    // const options = generateOptions('/users?since=' + since + '&per_page=' + per_page)
    const options = generateOptions(`/users?since=${since}&per_page=${per_page}`)
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}
export const getUser= async function (req: Request, res:Response) {
    const user = req.params.user;
    const options = generateOptions('/users/' + user)
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

export const getAllRepos = async function (req: Request, res:Response) {
    const user = req.params.user;
    // const reponame = req.params.reponame;
    const options = generateOptions('/users/' + user + '/repos') 

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

export const getCommit= async function (req: Request, res:Response) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = generateOptions('/repos/' + user + '/' + reponame + '/commits')

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}
