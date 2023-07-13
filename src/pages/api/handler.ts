// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from "@octokit/core";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const octokit = new Octokit({
    auth: `${process.env.API_KEY}`
  })
  octokit.request(
    "https://api.github.com/users/naufalbasara", 
    {
      headers: {
        authorization: `token ${process.env.API_KEY}`
      }
    }
  ).then((response) => {
    const data = {name:null, total_repos:null}
    data.name = response.data['login'];
    data.total_repos = response.data['total_private_repos'] + response.data['public_repos'];
    res.status(200).json(data);
    req;
  })
}
