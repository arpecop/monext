import { j as jsxRuntimeExports } from './jsx-runtime.yvPK8VcC.js';
import { r as reactExports } from './index.BtG4q7Xn.js';

const useCookieStorage = (key, initialValue = null) => {
  const [value] = reactExports.useState(() => {
    const cookieValue = document.cookie.replace(
      new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`),
      "$1"
    );
    return cookieValue ? cookieValue : initialValue;
  });
  return [value];
};

function Redirect() {
  const [cookieValue] = useCookieStorage("ref");
  console.log(decodeURIComponent(cookieValue || ""));
  reactExports.useEffect(() => {
    async function redirect() {
      const params = new URLSearchParams(location.search);
      const res = await fetch(`/api/auth/callback?${params}`);
      if (res.ok) {
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = decodeURIComponent(cookieValue || "");
      } else {
        throw new Error();
      }
    }
    redirect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row-span-full mx-auto flex flex-col items-center justify-center" });
}

export { Redirect as default };
