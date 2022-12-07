import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { site_map } from "../data/sitemap";


const useActiveItem = pathname => {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        site_map.map(nav_item => {
            if (nav_item.link === location.pathname)
                setActiveItem(nav_item.name)
            else if (nav_item.sublinks.includes(location.pathname))
                setActiveItem(nav_item.name)

            return [activeItem, setActiveItem];
        });
    })

    return [activeItem, setActiveItem];

}

export { useActiveItem };
