'use client';

import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { useState } from 'react';
import WaitlistModal from '../WaitlistModal';

function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section className='bg-slate-50'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl">
                            AI-Powered <span className="text-pink-600">OFSTED Compliance</span> for Children's Care
                        </h1>

                        <p className="mt-8 text-balance text-lg max-w-prose text-center font-semibold lg:pr-10 md:text-wrap lg:text-left">
                            Get inspection-ready with Compliance Care's AI platform. Document analysis, mock inspections, and incident pattern recognition designed specifically for UK children's homes.
                        </p>

                        <ul className="hidden mt-8 text-left font-medium md:flex flex-col items-center sm:items-start">
                            <div className="space-y-2">
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    AI-powered document analysis against OFSTED frameworks
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Realistic mock inspection simulator with predictive grading
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Incident pattern analysis for early intervention
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    GDPR compliant with UK data hosting
                                </li>
                            </div>
                        </ul>

                        {/* CTA section */}
                        <div className="mt-8 flex flex-col items-center lg:items-start">
                            <p className="text-sm font-bold text-red-600 mb-3 uppercase tracking-wide animate-pulse">⏰ Secure your spot for the special price</p>
                            <button 
                                onClick={openModal}
                                className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center group")}
                            >
                                <span>Join Waitlist</span>
                                <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </button>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center gap-5">
                            <div className="flex -space-x-3">
                                <img src="/users/professional-woman-1.svg" alt="Care manager" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/casual-man-1.svg" alt="Support worker" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/professional-man-1.svg" alt="Operations director" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/casual-woman-1.svg" alt="Compliance officer" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/professional-woman-2.svg" alt="Quality assurance lead" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            </div>

                            <div className="flex flex-col justify-between items-center sm:items-start">
                                <div className="flex gap-1">
                                    {Array(5).fill().map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>

                                <p><span className="font-semibold">13+</span> people already secured their spots</p>
                                <p className="text-red-600 font-medium text-sm">Hurry! Only 7 spots remaining at the special price!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-full mt-14 md:mt-0 lg:col-span-1 flex items-center justify-center">
                    <div className="w-full max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto aspect-[16/10] md:aspect-[16/12] lg:aspect-[16/11] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative">
                        <Image 
                            src="/dashboard-updated.svg" 
                            alt="Compliance Care Compliance Dashboard" 
                            fill
                            sizes="(max-width: 576px) 100vw, (max-width: 768px) 768px, 896px"
                            className="object-contain rounded-3xl"
                            priority
                        />
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* Waitlist Modal */}
            <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    )
}

export default HeroSection