import Completion from "../types/Completion";

export const saveCompletions = (completion: Completion): void => {
    const completions = retrieveCompletions()
    completions.push(completion);
    window.localStorage.setItem('completions', JSON.stringify(completions));
}

export const retrieveCompletions = (): Completion[] => {
    return JSON.parse(window.localStorage.getItem('completions') ?? '[]');
}

export const saveEngines = (engines: string[]): void => {
    window.sessionStorage.setItem('engines', JSON.stringify(engines));
}

export const retrieveEngines = (): string[] => {
    return JSON.parse(window.sessionStorage.getItem('engines') ?? '[]');
}
