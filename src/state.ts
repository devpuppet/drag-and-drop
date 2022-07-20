import { Project, ProjectStatus } from '@src/models/project'
import { Listener } from '@src/models/listener'

export class ProjectState {
    private listeners: Listener[] = [];
    private projects: Project[] = [];
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
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numberOfPeople,
            ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice()); // pass a copy of projects array to the function, not the original
        }
    }

    addListener(listenerFn: Listener) {
        this.listeners.push(listenerFn);
    }
}

export const projectState = ProjectState.getInstance();