// COMPONENTS
import PageHeader from './components/PageHeader'
import Sidebar from 'Sections/Sidebar'
// CSS
import './SidebarPage.css'
// PROPS
import { SidebarPageProps } from './SidebarProps'

const SidebarPage = (props: SidebarPageProps) => {

    const { content, header, title } = props

    return (
        <>
            {PageHeader(header)}
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