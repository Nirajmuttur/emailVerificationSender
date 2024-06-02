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
    return res.send(`
      <html>
        <body>
          <h1>Error</h1>
          <p>User ID and secret are required to verify your email.</p>
        </body>
      </html>
    `);
  }

  try {
    const result = await account.updateVerification(
      String(userId), // userId
      String(secret) // secret
    );
    return res.send(`
      <html>
        <body>
          <h1>Email Verified</h1>
          <p>Congratulations! Your email has been successfully verified. You can now enjoy all the features of our platform.</p>
        </body>
      </html>
    `);
  } catch (error) {
    log(error); // Use log instead of console.log for Appwrite function logging
    return res.send(`
      <html>
        <body>
          <h1>Verification Failed</h1>
          <p>Oops! Something went wrong while verifying your email. Please try again later or contact support if the issue persists.</p>
        </body>
      </html>
    `);
  }
};
