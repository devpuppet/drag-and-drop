export class ProjectState {
    private listeners: any[] = [];
    private projects: any[] = [];
    private static instance: ProjectState;

    private constructor() {}

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, numberOfPeople: number) {
        const newProject = {
            id: Math.random().toString,
            title: title,
            description: description,
            people: numberOfPeople
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice()); // pass a copy of projects array to the function, not the original
        }
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
    }
}

export const projectState = ProjectState.getInstance();