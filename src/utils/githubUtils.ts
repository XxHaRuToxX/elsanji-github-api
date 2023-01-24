import { constants } from './constants';

export const generateOptions=(_path:string)=>{
    let options:object;
    return options = {
        hostname: constants.hostname,
        path: _path,
        headers: {
            'User-Agent': constants.user_agent
        },
        OAUth: process.env.GITHUB_ACCESS_TOKEN
    }
}
