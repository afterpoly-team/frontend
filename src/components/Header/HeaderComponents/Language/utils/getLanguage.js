import languages from "../translater"

export const getLanguage = (key) => {
    return languages[key];
}