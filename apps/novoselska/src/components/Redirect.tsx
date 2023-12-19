
import React, { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    async function redirect() {
      const params = new URLSearchParams(location.search);

      const res = await fetch(`/api/auth/google/callback?${params}`);

      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "https://dr-novoselska.com/"; // Redirect to homepage
      } else {
        throw new Error();
      }
    }

    redirect();
  }, []);

  return (
    <div className="row-span-full mx-auto flex flex-col items-center justify-center">

    </div>
  );
}
