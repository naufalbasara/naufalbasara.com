// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const needle = require('needle');
const token = process.env.X_TOKEN;
const endpointURL = "https://api.twitter.com/2/users/by?usernames="

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = {
    usernames: "naufalbasara", // Edit usernames to look up
    "user.fields": "created_at,description", // Edit optional query parameters here
    "expansions": "pinned_tweet_id"
  }

  // this is the HTTP header that adds bearer token authentication
  const result = await needle('get', endpointURL, params, {
      headers: {
          "User-Agent": "v2UserLookupJS",
          "authorization": `Bearer ${token}`
      }
  })

  if (result.body) {
      res.status(200).json(result.body);
      req;
  } else {
      throw new Error('Unsuccessful request')
  }
}
