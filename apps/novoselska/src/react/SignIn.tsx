import React, { useEffect, useState } from 'react';





export default function SignIn({ cookie, url }: { url: string; cookie?: { value: string } }) {
  const [_isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/auth/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cookie: cookie?.value }),
        });
        if (res.ok) {
          setIsLoggedIn(true);
        } else {
          throw new Error();
        }
      } catch (err) {
        // handle error
      }
    };
    fetchData();
  }, []);



  return (
    <button
      className={`flex items-center justify-center  h-8  mb-4 -mt-px   border rounded-md cursor-pointer  text-gray-500  font-extrabold text-xs px-2 bg-gray-100 rounded-t-none border-t-0`}
      onClick={() => {
        // go to href popup window
        window.open(url, "Google Sign In", "width=500,height=600");


      }}
    >
      <svg
        className="   w-6 h-6 pr-0.5"
        width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47" /><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4" /><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00" /><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374" /><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435" /><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626" /><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4" /></svg>

      Продължи с Google
    </button >

  );
}


