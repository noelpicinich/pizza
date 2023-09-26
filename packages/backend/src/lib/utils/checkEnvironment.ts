export default function checkEnvironment(variables: string[]): void {
    const missingVariables: string[] = [];
    for (const variable of variables) {
        if (!process.env[variable]) {
            missingVariables.push(variable);
        }
    }

    if (missingVariables.length) {
        throw new Error(
            `Missing enviornment variable(s) ${missingVariables.join(', ')}.`
        );
    }
}
