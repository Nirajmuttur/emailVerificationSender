
# ⚡ Nodejs Appwrite Function

Appwrite function which gets executed when user clicks the link which is sent for email verification and updates the email verification.🚀

## 🧰 Usage

### GET /?userid=${userid}&secret=${secret}

- Returns a "Email Verified" message on successfull Email verification

Sample `200` Response:

message: "Email Verified"

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 15            |

## 🔒 Environment Variables

- APPWRITE_FUNCTION_PROJECT_ID

