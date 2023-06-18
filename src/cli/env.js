const keys = Object.keys(process.env);

const parseEnv = () => {
    keys.forEach(key => {
        if (key.includes('RSS_')){
            process.stdout.write(`${key}=${process.env[key]}\n`)
        }
    })
};

parseEnv();