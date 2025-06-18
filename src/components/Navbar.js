"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu, X } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import WaitlistModal from './WaitlistModal'
import ContactModal from './ContactModal'

function Navbar() {
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openWaitlistModal = () => setIsWaitlistModalOpen(true);
    const closeWaitlistModal = () => setIsWaitlistModalOpen(false);
    
    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Smart autoclose after clicking a navigation link
    const handleNavClick = (href) => {
        if (href.startsWith('#')) {
            // For anchor links, close immediately and scroll
            closeMobileMenu();
        } else {
            // For other links, add a small delay for better UX
            setTimeout(() => {
                closeMobileMenu();
            }, 150);
        }
    };

    // Prevent body scroll when mobile menu is open and handle escape key
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Handle escape key to close menu
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        
        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMobileMenuOpen]);

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
                            <Link href='#' className='font-semibold hover:underline hover:underline-offset-1' onClick={openContactModal}>
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMobileMenu}
                            className='relative p-3 hover:bg-gray-100 rounded-md transition-colors z-50 min-h-[44px] min-w-[44px] flex items-center justify-center'
                            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="relative w-6 h-6">
                                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
                            </div>
                        </button>
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
            
            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[99999] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Full screen overlay */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
                
                {/* Sidebar Panel */}
                <div 
                    className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl transform transition-transform duration-300 ease-out ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ 
                        backgroundColor: '#ffffff',
                        borderLeft: '1px solid #e5e7eb'
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-menu-title"
                >
                    {/* Header Section */}
                    <div 
                        className="flex items-center justify-between p-6 border-b border-gray-200"
                        style={{ backgroundColor: '#ffffff' }}
                    >
                        <Image 
                            src="/care-complaince-logo-new.svg" 
                            alt="Compliance Care Logo" 
                            width={160} 
                            height={53}
                            className="h-10 w-auto"
                            id="mobile-menu-title"
                        />
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label="Close mobile menu"
                        >
                            <X className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    
                    {/* Navigation Content */}
                    <div 
                        className="flex flex-col h-full"
                        style={{ backgroundColor: '#ffffff' }}
                    >
                        {/* Navigation Links */}
                        <div 
                            className="flex flex-col p-6 space-y-2 flex-1"
                            style={{ backgroundColor: '#ffffff' }}
                        >
                            <Link 
                                href='#pricing' 
                                className='text-lg font-semibold text-gray-900 hover:text-pink-600 transition-colors py-4 px-3 rounded-md hover:bg-gray-50 min-h-[48px] flex items-center'
                                onClick={() => handleNavClick('#pricing')}
                            >
                                Pricing
                            </Link>
                            <Link 
                                href='#demo' 
                                className='text-lg font-semibold text-gray-900 hover:text-pink-600 transition-colors py-4 px-3 rounded-md hover:bg-gray-50 min-h-[48px] flex items-center'
                                onClick={() => handleNavClick('#demo')}
                            >
                                Demo
                            </Link>
                            <Link 
                                href='#faq' 
                                className='text-lg font-semibold text-gray-900 hover:text-pink-600 transition-colors py-4 px-3 rounded-md hover:bg-gray-50 min-h-[48px] flex items-center'
                                onClick={() => handleNavClick('#faq')}
                            >
                                FAQ
                            </Link>
                            <button 
                                className='text-lg font-semibold text-gray-900 hover:text-pink-600 transition-colors py-4 px-3 rounded-md hover:bg-gray-50 min-h-[48px] flex items-center w-full text-left'
                                onClick={() => {
                                    closeMobileMenu();
                                    openContactModal();
                                }}
                            >
                                Contact
                            </button>
                        </div>
                        
                        {/* CTA Button Section */}
                        <div 
                            className="p-6 border-t border-gray-200"
                            style={{ backgroundColor: '#ffffff' }}
                        >
                            <button 
                                onClick={() => {
                                    closeMobileMenu();
                                    openWaitlistModal();
                                }}
                                className={cn(buttonVariants({ size: "lg" }), "w-full flex items-center justify-center group min-h-[48px]")}
                            >
                                <span>Join Waitlist</span>
                                <ArrowRight className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </nav>
    )
}

export default Navbar
