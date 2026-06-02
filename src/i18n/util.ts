import { labels } from "./ui";

const defaultLang = 'en'; //every time someone loads the website, they will se the english version first. they can change it to any other language. Default is english

export function useTranslations(lang: keyof typeof labels) { // this method is used to translate the string accoirding to its position and the /ui label.
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}