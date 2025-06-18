'use client'
import { Building2, CircleCheck, Star, Clock } from "lucide-react"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"
import { useState } from 'react'
import ContactModal from '../ContactModal'
import WaitlistModal from '../WaitlistModal'

function PricingSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    const openWaitlistModal = () => setIsWaitlistModalOpen(true);
    const closeWaitlistModal = () => setIsWaitlistModalOpen(false);
    return (
        <section className="bg-[#F8F9FA]" id="pricing">
            <MaxWidthWrapper className='py-20'>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-primary/10 rounded-full px-4 py-2">
                        <p className='text-primary text-xs font-medium tracking-wide'>EARLY ADOPTER PRICING</p>
                    </div>

                    <div className="max-w-2xl text-center mt-4">
                        <h2 className="text-4xl font-bold mb-4">Get Inspection Ready Today</h2>
                        <p className="text-[#6B7989] text-lg">
                            Special launch pricing for the first 20 children's care organizations. Full platform delivery within 2 months.
                        </p>
                    </div>
                </div>

                {/* Single pricing card - Early Adopter */}
                <div className="flex justify-center my-10">
                    <div className="relative bg-white p-8 rounded-xl shadow-lg border-2 border-pink-600 max-w-lg w-full">
                        <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Star className="h-4 w-4 fill-white" />
                            Early Adopter Special
                        </div>
                        
                        <h3 className='text-3xl font-bold mb-4 text-center text-pink-600'>Compliance Care</h3>

                        <p className='font-bold mb-4 text-center'>
                            <span className='text-6xl text-gray-900'>£197</span>
                            <span className='text-lg text-[#6B7989]'>/month</span>
                        </p>

                        <p className="text-center text-sm text-gray-600 mb-6">
                            <span className="line-through text-red-500">£247/month</span> regular price - Save £50/month
                        </p>

                        <div className="bg-pink-50 border border-pink-200 w-full py-4 px-4 rounded-lg my-6">
                            <div className="text-center mb-3">
                                <p className="text-sm font-semibold text-pink-800 mb-2">
                                    🔥 Early Adopter Spots Remaining
                                </p>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    {/* Taken spots (8) */}
                                    {Array(8).fill().map((_, i) => (
                                        <div key={`taken-${i}`} className="w-4 h-4 bg-pink-600 rounded-full"></div>
                                    ))}
                                    {/* Remaining spots (12) */}
                                    {Array(12).fill().map((_, i) => (
                                        <div key={`remaining-${i}`} className="w-4 h-4 bg-gray-200 rounded-full border-2 border-pink-300 animate-pulse"></div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-pink-700 font-medium">
                                    <span>8 secured</span>
                                    <span className="font-bold text-red-600">12 remaining</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-pink-600 font-medium">
                                    Limited to first 20 customers only
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 w-full py-3 px-4 rounded-lg text-center font-medium mb-6">
                            <p className="text-sm text-red-700">
                                ⚠️ Price increases to £247/month after first 20 adopters
                            </p>
                        </div>

                        <div className="px-6 mb-6">
                            <button
                                onClick={openWaitlistModal}
                                className='flex items-center justify-center cursor-pointer px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 font-medium text-white transition-colors duration-200 ease-out text-lg w-full'
                            >
                                Secure Your Spot Now
                            </button>
                        </div>

                        <p className="font-medium mt-6 mb-4 text-center">
                            Complete OFSTED compliance platform includes:
                        </p>

                        <ul className="text-left text-[#374151] font-medium space-y-3 mb-8">
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>AI-powered document analysis against OFSTED frameworks with real-time compliance scoring</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>Mock inspection simulator with predictive grading and scenario-based questioning</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>Incident pattern analysis with early intervention recommendations</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>Role-based access with MFA for compliance officers</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>GDPR compliant with UK data hosting and 99.5% uptime SLA</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>Dedicated onboarding support and training sessions</span>
                            </li>
                            <li className="flex gap-3 items-start text-left">
                                <CircleCheck className="h-5 w-5 shrink-0 fill-green-500 text-white mt-0.5" />
                                <span>Priority access to new features and platform updates</span>
                            </li>
                        </ul>

                        <div className="bg-gray-50 border border-gray-200 w-full py-4 px-4 rounded-lg text-center">
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Success Guarantee:</strong>
                            </p>
                            <p className="text-xs text-gray-500">
                                97% document analysis accuracy • 95% mock inspection prediction accuracy • 99% customer satisfaction rating
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        Questions? <button onClick={openContactModal} className="text-pink-600 hover:underline cursor-pointer">Contact our team</button> for a personalized demo
                    </p>
                </div>

                {/* Contact Modal */}
                <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
                
                {/* Waitlist Modal */}
                <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
            </MaxWidthWrapper>
        </section>
    )
}

export default PricingSection