import { Route } from "react-router-dom"
// PAGES
import Home from "."

// Pushes home to last route
const HomeRoute = (
    <Route key="home" 
        path="/"
    >
        {Home}
    </Route>
)

export default HomeRoute