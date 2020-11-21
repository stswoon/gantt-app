export const State = {
    setResources: (resources) => {
        localStorage.setItem('resources', resources);
    },

    getResources: (resources) => {
        return localStorage.getItem('resources') || [];
    }
}
