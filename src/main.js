import { Client, Account } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(String(process.env.APPWRITE_FUNCTION_PROJECT_ID))
  const account = new Account(client)
  const { userId, secret } = req.query
  if (!userId || !secret) {
    return return res.json({ error: 'User ID and secret are required' });
  }

  try {
    const result = await account.updateVerification(
      String(userId), // userId
      String(secret) // secret
    );
    return return res.json({
      message: "Email Verified"
    })
  } catch (error) {
    log(error); // Use log instead of console.log for Appwrite function logging
    return res.json({
      errorMessage: "Error Verifying user email",
      error: error.response
    })
  }
};
