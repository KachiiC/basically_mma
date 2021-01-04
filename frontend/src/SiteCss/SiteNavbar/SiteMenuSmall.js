import React from 'react' 
import PageData from 'Data/pagesData'

const SmallMenu = () => {

    const smallDisplayMenu = PageData.map((menu, index) => (
      
          <div className="small-menu-nav" key={index}>
            {menu.title}
          </div>
      )
    )

      return (
        <div className="small-menu-block">
            {smallDisplayMenu}
        </div>
      )
}
export default SmallMenu