import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  image?: string;
  isLoggedIn?: boolean;
  account?: string;
  role?: string;
  email?: string;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.AUTH_SECRET!,
  cookieName: "hateMyLife",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
