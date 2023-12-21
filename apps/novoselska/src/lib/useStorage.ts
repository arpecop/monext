import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>,
    () => void,
  ] {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(
  key: string,
  defaultValue: T,
): [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>,
    () => void,
  ] {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage,
): [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>,
    () => void,
  ] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject?.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject?.removeItem(key);
    storageObject?.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
export const useCookieStorage = (
  key: string, // The name of the cookie
  initialValue: string | null = null,
): [string | null] => {
  const [value] = useState<string | null>(() => {
    // This regular expression is used to extract the value of the cookie with the given key.
    const cookieValue = document.cookie.replace(
      new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`),
      "$1",
    );
    // If the cookie exists, its value is returned. Otherwise, the initial value is returned.
    return cookieValue ? cookieValue : initialValue;
  });

  // The value of the cookie is returned.
  return [value];
};