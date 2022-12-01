import React, {useContext} from 'react'
import { SidebarContext } from '../../context/SidebarContext/GlobalProvider';

export default function CollectionActivity({ activity }) {
    const {showSidebar} = useContext(SidebarContext);
    return (
        <div className={`w-full flex justify-center ease-in-out duration-300 ${showSidebar? "md:translate-x-[100px]": "md:translate-x-[0px]" }`}>
            <div className='w-full px-4 md:px-0 md:w-4/6 border-b border-dashed border-[#767779] border-opacity-30 py-5'>
                <div className='w-full flex'>
                    <div className='logo w-[20%]'>
                        <img className='absolute z-10' src="/images/collection/activity/lock.svg" alt="lock" />
                        <img src={activity.image} alt={activity.name} />
                    </div>

                    <div className='w-[80%] flex flex-col md:flex-row justify-between md:items-center'>
                        <div className='basic-info'>
                            <div className="name">
                                <span className='font-gilroy font-semibold text-dark-text'>
                                    {activity.name}
                                </span>
                            </div>

                            <div className="details mt-3 flex items-center">
                                <span className='font-gilroy font-medium text-sm text-[#807373]'>
                                    {activity.action} for <span className='text-dark-text'>
                                        {activity.price} ETH
                                    </span> - {activity.time}
                                </span>
                                <img className='ml-3' src='/images/collection/activity/arrow-right.svg' alt='arrow-right' />
                            </div>
                        </div>

                        <div className='transfer-details mt-3 md:mt-0'>
                            <div className='flex items-center'>
                                <span className='font-gilroy font-semibold text-sm text-[#807373]'>
                                    By
                                </span>

                                <img className='ml-3' src={activity.by_icon} alt={activity.by} />

                                <span className='font-gilroy font-medium text-sm text-dark-text ml-3'>
                                    {activity.by}
                                </span>
                            </div>

                            <div className='flex items-center mt-3'>
                                <span className='font-gilroy font-semibold text-sm text-[#807373]'>
                                    To
                                </span>

                                <img className='ml-3' src={activity.to_icon} alt={activity.to} />

                                <span className='font-gilroy font-medium text-sm text-dark-text ml-3'>
                                    {activity.to}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}
