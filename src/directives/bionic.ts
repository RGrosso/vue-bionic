import { bionicText } from "@/utils/bionic-text";
import { Directive } from "vue";

export const bionic: Directive = {
    created(el: HTMLElement) {
        el.innerHTML = bionicText(el.innerHTML);
    },
};
