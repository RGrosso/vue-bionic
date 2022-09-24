import { ref } from "vue";
import { State } from "@/types";

const defaultState: State = { separatorTags: ["<strong>", "</strong>"] };

export const state = ref<State>({ ...defaultState });

export const setState = (newState?: Partial<State>) => {
    state.value = { ...defaultState, ...newState };
};

export const getState = () => state.value;
