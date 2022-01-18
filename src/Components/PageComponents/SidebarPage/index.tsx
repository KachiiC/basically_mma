// COMPONENTS
import Sidebar from 'Sections/Sidebar'
// CSS
import './SidebarPage.css'
// PROPS
import { SidebarPageProps } from './SidebarPageProps'

const SidebarPage = (props: SidebarPageProps) => (
    <div className="site-grid-system">
        <div className="main-section">
            {props.content}
        </div>
        <div className="sidebar-section">
            {Sidebar}
        </div>
    </div>
)

export default SidebarPage