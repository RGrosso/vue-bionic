import { App } from "vue";

export interface Config {}

export default (config: Config) => ({
    install: (app: App) => {
        // TODO assign directive
    },
});
