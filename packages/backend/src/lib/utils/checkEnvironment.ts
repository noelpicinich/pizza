export default function checkEnvironment(variable: string): void {
    if (!process.env[variable]) {
        throw new Error(`Missing enviornment variable ${variable}.`);
    }
}