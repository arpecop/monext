
import React, { useEffect } from 'react';
import { useCookieStorage } from '~/lib/useStorage';


export default function Redirect() {
  const [cookieValue] = useCookieStorage("ref");
  console.log(decodeURIComponent(cookieValue || ""));
  useEffect(() => {
    async function redirect() {
      const params = new URLSearchParams(location.search);

      const res = await fetch(`/api/auth/google/callback?${params}`);

      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = decodeURIComponent(cookieValue || "")
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
