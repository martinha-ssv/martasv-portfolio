import cv from '../../assets/cv.json';
import CVSidebar from './CVSidebar';
import CVBody from './CVBody';
import CVHeader from './CVHeader';

export default function CV() {
    return (
        <div className='flex flex-col gap-4 p-4'>
            <CVHeader {...cv} />
            <div className='border-accent grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4'>
        <div className="order-1 lg:order-2">
                    <CVSidebar />
                </div>
                <div className='col-span-1'>
                    <CVBody cv={cv} />
                </div>
            </div>
        </div>
    )
}