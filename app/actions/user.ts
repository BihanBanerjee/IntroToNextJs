"use server"
// ⬆️ have to give this in case of server actions.
// Trying to convert the POST endpoint that I have in the api/user route 
// to a server action
// You can actually complete delete the endpoint or the api/user/route.ts
// file and expose a server action for it.

import client from '@/db';

export async function signup(username: string, password: string) {
    try {
        await client.user.create({
            data: {
                email: username,
                password: password
            }
        });
        return true;
    } catch(e) {
        return false;
    }
}