type SeparatorTags = [string, string];

export type Options = {
    separatorTags?: SeparatorTags;
};

const formatText = (text: string, separatorTags: SeparatorTags) => {
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

const formatWord = (text: string, separatorTags: SeparatorTags) => {
    const splitText = text.split("-");
    if (splitText.length > 1) {
        return splitText.map((st) => formatText(st, separatorTags));
    }

    return [formatText(text, separatorTags)];
};

export const bionicText = (text: string, options?: Options) => {
    const separatorTags = options?.separatorTags || ["<strong>", "</strong>"];

    if (!text?.length) {
        return "";
    }

    const splitText = text.split(" ");
    const resultArray: string[] = [];

    splitText.forEach((txt) => resultArray.push(...formatWord(txt, separatorTags)));

    return resultArray.join(" ");
};
