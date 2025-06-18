"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import WaitlistModal from './WaitlistModal'

function Navbar() {
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

    const openWaitlistModal = () => setIsWaitlistModalOpen(true);
    const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

    return (
        <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
            <MaxWidthWrapper>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex items-center justify-center gap-14'>
                        <Link href='/' className='flex z-40 items-center'>
                            <Image 
                                src="/care-complaince-logo-new.svg" 
                                alt="Care Complaince Logo" 
                                width={240} 
                                height={80}
                                className="h-14 w-auto"
                            />
                        </Link>

                        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
                            <Link href='#pricing' className='font-semibold hover:underline hover:underline-offset-1'>
                                Pricing
                            </Link>
                            <Link href='#demo' className='font-semibold hover:underline hover:underline-offset-1'>
                                Demo
                            </Link>
                            <Link href='#faq' className='font-semibold hover:underline hover:underline-offset-1'>
                                FAQ
                            </Link>
                            <Link href='#' className='font-semibold hover:underline hover:underline-offset-1'>
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* TODO: Add mobile menu */}
                    <div className='md:hidden'>
                        <Menu className='h-6 w-6 cursor-pointer' />
                    </div>

                    <div className='hidden md:flex items-center space-x-1.5'>
                        <button 
                            onClick={openWaitlistModal}
                            className={cn(buttonVariants({ size: "sm" }), "flex items-center justify-center group px-4")}
                        >
                            <span>Join Waitlist</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
            </MaxWidthWrapper>
            
            <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
        </nav>
    )
}

export default Navbar