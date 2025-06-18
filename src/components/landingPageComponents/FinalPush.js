"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { IoIosRocket } from "react-icons/io";
import { buttonVariants } from "../ui/button";
import { useState } from "react";
import WaitlistModal from "../WaitlistModal";

function FinalPush() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <section className='pt-40 pb-32 px-5 bg-white/80' id='contact'>
            <div className='flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 gap-10 bg-slate-100/50 rounded-3xl border border-slate-200'>
                <div className="space-y-6">
                    <h2 className='relative tracking-tight font-bold text-3xl md:text-4xl'>
                        <span className='absolute top-[-20px] right-0'>
                            <IoIosRocket className='h-10 w-10 text-sky-900' />
                        </span>
                        Secure your spot in the OFSTED compliance revolution
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-700'>
                        Don't let your next OFSTED inspection catch you unprepared. Join 127+ care providers who've already secured their early access to Compliance Care. Our AI-powered platform transforms weeks of stressful preparation into days of confident readiness, ensuring your care homes consistently meet regulatory standards and achieve outstanding ratings.
                    </p>

                    <div className="w-full lg:w-1/4">
                        <button 
                            onClick={() => setIsWaitlistOpen(true)}
                            className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4")}
                        >
                            <span>Join Waitlist</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
            </div>
            
            <WaitlistModal 
                isOpen={isWaitlistOpen} 
                onClose={() => setIsWaitlistOpen(false)} 
            />
        </section>
    )
}

export default FinalPush