# Firebase Authentication with Next.js and Tailwind CSS

This project demonstrates an authentication system built with Firebase, Next.js, and Tailwind CSS. It includes features such as email/password authentication, Google Sign-In, user sign-up, login, and logout functionalities.

## Features

- **Email/Password Authentication**: Users can sign up and log in using their email and password.
- **Google Sign-In**: Users can authenticate using their Google accounts.
- **User Sign-Up**: New users can create an account.
- **User Login**: Returning users can log in.
- **Logout**: Authenticated users can log out.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Firebase**: A platform developed by Google for creating mobile and web applications, used here for authentication.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **Firebase Project**: Set up a Firebase project and enable Authentication with Email/Password and Google.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up Firebase**

    - Create a `.env.local` file in the root of your project and add your Firebase configuration.

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
