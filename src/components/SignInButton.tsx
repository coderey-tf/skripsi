"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const SignInButton = () => {
  const { data: session } = useSession();

  // if (session && session.user) {
  //   return (
  //     <div className="flex gap-4 ml-auto">
  //       <button onClick={() => signOut()} className="text-red-600">
  //         Sign Out
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div>
      {session && (
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      )}
    </div>
  );
};
