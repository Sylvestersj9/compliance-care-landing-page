import { InfiniteSlider } from '@/components/ui/infinite-slider';

function AsSeenOn() {
    return (
        <InfiniteSlider gap={80} duration={25} reverse>
            <img
                src='/brand-logos/product_hunt.png'
                alt='Product Hunt'
                className='h-[70px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/Ofsted-logo (1).png'
                alt='OFSTED'
                className='h-[65px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/Care_Quality_Commission_logo.svg.png'
                alt='CQC'
                className='h-[70px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/hounslow-council-logo-removebg-preview.png'
                alt='London Borough of Hounslow'
                className='h-[65px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/Lb_hillingdon_logo.svg.png'
                alt='Hillingdon London'
                className='h-[75px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/Harrow-Council-logo-transparent.avif'
                alt='Harrow Council'
                className='h-[65px] w-auto max-w-none'
            />
            <img
                src='/brand-logos/Lb_ealing_logo.svg.png'
                alt='London Borough of Ealing'
                className='h-[70px] w-auto max-w-none'
            />
        </InfiniteSlider>
    )
}

export default AsSeenOn