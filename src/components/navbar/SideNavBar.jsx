"use client"
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useRouter } from 'next/navigation';

function SideNavBar() {
const router = useRouter();

  return (
    <div className='w-full'>
        
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/item/home"
            onSelect={({itemId}) => {
                router.push(itemId);
            }}


            items={[
              {
                title: 'Dashboard',
                itemId: '/home',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Products',
                itemId: '/product',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                    // elemBefore: () => <Icon name="cloud-snow" />,
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                    // elemBefore: () => <Icon name="coffee" />,
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
       
    </div>
  )
}

export default SideNavBar