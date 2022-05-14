import Completion from "../types/Completion";

export const saveCompletions = (completion: Completion): void => {
    const completions = retrieveCompletions();
    if (completions.length === 0) {
        completions.push(completion)
        window.localStorage.setItem('completions', JSON.stringify(completions));
        return;    
    }
    window.localStorage.setItem('completions', JSON.stringify([completion]));
}

export const retrieveCompletions = (): Completion[] => {
    return JSON.parse(window.localStorage.getItem('completions') ?? '[]');
}
