import { App } from "vue";
import { State } from "@/types";
import { setState } from "@/state";
import { bionic } from "@/directives/bionic";

export default (config?: Partial<State>) => ({
    install: (app: App) => {
        if (config) {
            setState(config);
        }
        app.directive("bionic", bionic);
        // TODO assign directive
    },
});
