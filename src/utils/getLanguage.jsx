import languages from "../LanguageConstants/IndexLanguage"

export const getLanguage = (key) => {
    return languages[key];
}