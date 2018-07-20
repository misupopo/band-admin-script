const defaultConfig = () => {
    return {
        appName: 'band-admin-script'
    }
};

const Config = () => {
    if (process.env.NODE_ENV === 'development') {
        return Object.assign({
            env: 'development'
        }, defaultConfig());
    } else if (process.env.NODE_ENV === 'test') {
        return Object.assign({
            env: 'test'
        }, defaultConfig());
    } else if (process.env.NODE_ENV === 'production') {
        return Object.assign({
            env: 'production'
        }, defaultConfig());
    }
    return {};
};

export const ConfigData = Config();
