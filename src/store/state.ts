

interface IModule {
    state: {
        state: 'loading' | 'loaded' | 'unused'
    };
    [key: string]: any;
}

interface IModules {
    [key: string]: IModule;
}

export const state = ({
    modules: {} as IModules,
});
