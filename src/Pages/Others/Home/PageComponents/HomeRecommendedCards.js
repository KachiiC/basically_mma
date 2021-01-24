import React from 'react'

const HomeCardComponents = () => {

    const myImages = [1,2,3,4]

    const displayImages = myImages.map((image, index) => (
        <div className="site-span-6 small-list-image-container">
            <img src="http://via.placeholder.com/540x300.png?text=Placeholder%201"
                alt="small_list_images"
                className="site-responsive-image"
            />
        </div>
    ))

    return (
        <div className="recommended-reading-container site-span-12 site-grid-system">
            <h3 className="site-span-12">Recommended Reading</h3>

            <div className="recommended-reading-feature">
                <div className="recommended-featured-image-container">
                    <img className="site-responsive-image"
                        src="http://via.placeholder.com/540x300.png?text=Placeholder%201"
                        alt="featured_reading" 
                    />
                </div>
            </div>
            <div className="other-recommended-reading site-grid-system">
                {displayImages}
            </div>
        </div>
    )
}

export default HomeCardComponents