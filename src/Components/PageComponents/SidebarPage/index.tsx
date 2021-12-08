// COMPONENTS
import Sidebar from 'Sections/Sidebar'
// CSS
import './SidebarPage.css'
// PROPS
import { SidebarPageProps } from 'Props/Sections/SidebarProps'

const SidebarPage = (props: SidebarPageProps) => {

    const { content, header, title } = props

    const HeaderLogic = () => {
        if (header) {
            return (
                <img src={header} 
                    alt="page-header" 
                    className="page-container-image" 
                />
            )
        }
    }

    return (
        <>
            {HeaderLogic()}
            <div className="site-grid-system sidebar-page">
                <div className="site-col-8 sidebar-content">
                    <h1>{title}</h1>
                    {content}
                </div>
                <div className="site-col-4">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default SidebarPage