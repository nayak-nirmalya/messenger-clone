# Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher

Key Features:

- Real-time messaging using Pusher
- Message notifications and alerts
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with NextAuth
- Google authentication integration
- Github authentication integration
- File and image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Message read receipts
- Online/offline user status
- Typing user indicator
- Group chats and one-on-one messaging
- Message attachments and file sharing
- User profile customization and settings
- POST, GET, and DELETE routes in route handlers (app/api)
- Fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Creating and managing chat rooms and channels

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/messenger-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=

NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
PUSHER_CLUSTER=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the App

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                    |
| :------ | :--------------------------------------------- |
| `dev`   | Starts a development instance of the app       |
| `build` | Starts a building final version for production |
| `start` | Run final build production version             |
