// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: process.env.SERVER_PREFIX,
  });

  const listId = "74ac3b31a6";

  const body = JSON.parse(req.body);

  const { firstName, lastName, email, telephone } = body;

  const response = mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: telephone,
    },
  });

  res.status(200);
}
