import Completion from "../types/Completion";
import Engine from "../types/Engine";

export const fetchCompletion = async (prompt: string, engine: string) => {
    const request = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
    const apiResponse = await fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(request),
    });
    const data = await apiResponse.json();
    const response: Completion = {
        prompt: prompt,
        response: data.choices[0].text,
        time: data.created
    }
    return response;
}

export const fetchEngines = async () => {
    const response = await fetch(`https://api.openai.com/v1/engines`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        }
    });
    const engines = (await response.json()).data;
    return engines.map((engine: Engine) => engine.id); 
}