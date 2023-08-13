import { createContext } from "react"

const MoviesContext = createContext({
    total: undefined,
    shown: undefined,
    saved: undefined,
    error: undefined,
    canShowMore: true,
    showMore: () => { },
    save: card => { },
    delete: card => { },
});

export default MoviesContext;