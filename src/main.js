import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)

  const { userId, secret } = req.query
  if (!userId || !secret) {
    return res.status(400).json({ error: 'User ID and secret are required' });
  }

  try {
    const result = await account.updateVerification(
      String(userId), // userId
      String(secret) // secret
    );
    return res.status(200).json({
      message: "Email Verified"
    }
    )
  } catch (error: any) {
    return res.status(200).json({
      errorMessage: "Error Verifying user email",
      error: error.response
    }
    )
  }
};
