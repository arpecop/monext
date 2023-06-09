import { badwords } from './badwords';
import business from './data/business.json';
import jokes from './data/jokes.json';

export interface Cat {
  cat: string;
  count: number;
  slug: string;
  altcount?: number;
  althref?: string;
}
var latin = [
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "zh",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "kh",
  "ts",
  "ch",
  "sh",
  "shch",
  "u",
  "y",
  "",
  "e",
  "yu",
  "ya"
];
export function cyrillicToLatin(text: string) {
  var cyrillic = "абвгдежзийклмнопрстуфхцчшщъыьэюя";


  // Iterate over each character in the input text
  var output = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var index = cyrillic.indexOf(char.toLowerCase());
    if (index !== -1) {
      // Replace the character with the corresponding Latin character
      var latinChar = latin[index];
      // Preserve the original case of the character
      if (char.toUpperCase() === char) {
        latinChar = latinChar.toUpperCase();
      }
      output += latinChar;
    } else {
      // Preserve non-Cyrillic characters
      output += char;
    }
  }
  return output;
}
export function slugify(string: string) {
  let slug = string.replace(/\s+/g, "-");

  slug = slug.toLowerCase();

  const CYRILLIC_TO_LATIN_MAP = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "u",
    ы: "y",
    ь: "",
    э: "e",
    ю: "iu",
    я: "ia",
  } as { [key: string]: string };
  // Replace spaces with dashes
  slug = Array.from(slug)
    .map((ch) => CYRILLIC_TO_LATIN_MAP[ch.toLowerCase()] || ch)
    .join("");

  // Remove any remaining non-alphanumeric characters and replace them with a dash
  slug = slug.replace(/[^a-z0-9-]+/g, "-").replace(/[-]+/g, "-");

  return slug || "404";
}

export const catsdata: Cat[] = jokes.map((item) => {
  return {
    ...item,
    slug: slugify(item.cat),
  };
});

export const businessdata: Cat[] = business.map((item) => {
  return {
    ...item,
    slug: slugify(item.cat),
  };
});

export function profanityFilter(title: string, character: string): string {
  let tags: string[] = [];

  const words = title.replace(/[^А-Яа-я]/g, " ").split(" ");

  const filteredWords = words.map((word) => {
    return badwords.includes(word.toLowerCase())
      ? character.repeat(word.length)
      : word;
  });

  tags = filteredWords.map((word) => word);

  return tags.join(" ");
}

export function profanityRemove(title: string) {
  const filter = profanityFilter(title, "*")
    .split(" ")
    .filter((word) => !word.includes("*"))
    .join(" ");
  return filter;
}

export const formattedjoke = (joke: string): string => {
  const formatted = joke

    .replace(/([.!?])[:]/g, "$1\n\n")

    .replace(/—/g, "\n-")
    .replace(/— ([А-Я])/g, "\n- $1")
    .replace(/-([А-Я])/g, "\n- $1")

    .replace(/[ ]+- ([А-Я])/g, "\n- $1")
    .replace(/\?/g, "?\n")
    .replace(/\n+/g, "\n")

    .split("\n")
    .filter((x) => x.length > 2)
    .map((x) => x.trim())
    .join("\n");

  return formatted;
};

export const deslugify = (slug: string): string => {
  const item = [...businessdata, ...catsdata].find((x) => x.slug === slug);
  return item ? item.cat : "";
};
// SEO keywords
