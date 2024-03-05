"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export function UserButton() {
  const { signOut } = useAuth();
  const { isLoaded, user } = useUser();

  if (!isLoaded || !user) {
    return (
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        ...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {user.firstName?.charAt(0)}
        {user.lastName?.charAt(0)}
      </div>
      <button
        onClick={() => {
          void signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}
