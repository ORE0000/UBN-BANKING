"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
  
    const session = cookies().get("appwrite-session");
  
    // Log session value for debugging
    console.log('Session retrieved from cookies:', session?.value);
  
    if (!session || !session.value) {
      // Optionally log an error if session is missing
      console.error('No session found');
      throw new Error("No session found. Please log in.");
    }
  
    client.setSession(session.value);
  
    return {
      get account() {
        return new Account(client);
      },
    };
  }
  

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}