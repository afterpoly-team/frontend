import languages from "../LanguageConstants"

export const getLanguage = (key) => {
    return languages[key];
}