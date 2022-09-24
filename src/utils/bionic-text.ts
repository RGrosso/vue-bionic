import { getState } from "@/state";

const { separatorTags } = getState();

const formatText = (text: string) => {
    let halfLengthInt: number;
    if (text.length <= 3) {
        halfLengthInt = 1;
    } else {
        halfLengthInt = Math.floor(text.length / 2);
    }
    let result = "";
    result += separatorTags[0];
    result += text.slice(0, halfLengthInt);
    result += separatorTags[1];
    result += text.slice(halfLengthInt);
    return result;
};

const formatWord = (text: string) => {
    const splitText = text.split("-");
    if (splitText.length > 1) {
        return splitText.map((st) => formatText(st));
    }

    return [formatText(text)];
};

export const bionicText = (text: string) => {
    if (text.trim().length === 0) {
        return "";
    }

    const splitText = text.split(" ");
    const resultArray: string[] = [];

    splitText.forEach((txt) => resultArray.push(...formatWord(txt)));

    return resultArray.join(" ");
};
