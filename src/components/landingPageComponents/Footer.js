import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='border-t border-gray-200'>
            <MaxWidthWrapper className='py-14 pb-20 flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row'>
                <div className='max-w-[20rem] flex flex-col space-y-4 items-center justify-center md:items-start md:justify-normal'>
                    <Link href='/' className='flex items-center z-40'>
                        <span className='font-bold text-2xl text-pink-600'>Compliance Care</span>
                    </Link>

                    <p className='text-gray-700 md:text-[0.875rem] font-medium text-center md:text-left'>
                        AI-powered OFSTED compliance platform for children's care organizations. Get inspection-ready with intelligent document analysis, mock inspections, and incident pattern recognition.
                    </p>

                    <small className='mb-2 block text-gray-700 select-none'>
                        Compliance Care &copy; {new Date().getFullYear()} - All rights reserved
                    </small>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-24 mt-10 md:mt-0'>
                    <div className='flex flex-col items-center md:items-start px-4'>
                        <h3 className='font-semibold text-gray-400 mb-2'>LINKS</h3>
                        <ul className='space-y-2 text-gray-600 text-sm text-center md:text-left'>
                            <li className='hover:underline hover:underline-offset-1'>
                                <a href='#'>
                                    Support
                                </a>
                            </li>
                            <li className='hover:underline hover:underline-offset-1'>
                                <Link href='#faq'>FAQ</Link>
                            </li>
                            <li className='hover:underline hover:underline-offset-1'>
                                <Link href='#pricing'>Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center md:items-start px-4'>
                        <h3 className='font-semibold text-gray-400 mb-2'>LEGAL</h3>
                        <ul className='space-y-2 text-gray-600 text-sm text-center md:text-left'>
                            <li className='hover:underline hover:underline-offset-1'>
                                <Link href='/'>Privacy Policy</Link>
                            </li>
                            <li className='hover:underline hover:underline-offset-1'>
                                <Link href='/'>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer