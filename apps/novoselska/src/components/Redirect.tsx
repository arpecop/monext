import { navigate } from "astro/transitions/router";
import React, { useEffect } from 'react';

export default function Redirect() {
  async function redirect() {
    const params = new URLSearchParams(location.search);

    const res = await fetch(`/api/auth/google/callback?${params}`);

    if (res.ok) {
      const user = await res.json();
      localStorage.setItem("avatar", user.picture);
      navigate("/");
    } else {
      navigate("/");
    }
  }
  useEffect(() => {
    redirect();
  }, []);

  return (
    <div className="row-span-full mx-auto flex flex-col items-center justify-center">
      dasdas
    </div>
  );
}
