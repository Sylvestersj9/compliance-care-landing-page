import MaxWidthWrapper from '../MaxWidthWrapper'
import { Check, Star, X } from 'lucide-react';

function BeforeAfter() {
    return (
        <section className='bg-white/80'>
            <MaxWidthWrapper className='pb-10 pt-20'>
                <div className='max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-5'>
                    <div className="flex items-center justify-center gap-1.5">
                        <X className='w-8 h-8 sm:w-6 sm:h-6 text-red-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center'>
                            Why traditional OFSTED prep fails you
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                        <Check className='w-8 h-8 sm:w-6 sm:h-6 text-green-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center text-balance'>
                            How Compliance Care transforms your compliance
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:max-w-6xl lg:mx-auto items-stretch justify-center lg:gap-8 my-16">
                    <div className='flex w-full lg:flex-1 flex-col items-center bg-primary-foreground rounded-2xl shadow-md py-16 px-8'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start w-full max-w-md">
                            <div className="space-y-4 tracking-wide text-lg">
                                <h3 className='font-bold text-xl mb-6 text-center sm:text-left'>Before Compliance Care</h3>

                                <li className="flex gap-2 items-start text-left">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                                    <span>Scrambling through endless paperwork before inspections</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                                    <span>No idea what inspectors will actually focus on</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                                    <span>Missing critical compliance gaps until it's too late</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                                    <span>Stressed staff and sleepless nights before visits</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                                    <span>Reactive approach - fixing problems after they're found</span>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className='flex w-full lg:flex-1 flex-col items-center bg-primary/10 rounded-2xl shadow-md py-16 px-8'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start w-full max-w-md">
                            <div className="space-y-4 tracking-wide text-lg">
                                <h3 className='font-bold text-xl mb-6 text-center sm:text-left'>After Compliance Care</h3>

                                <li className="flex gap-2 items-start text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                                    <span>AI instantly identifies compliance gaps before inspections</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                                    <span>Practice mock inspections with predictive grading</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                                    <span>Spot incident patterns early for proactive intervention</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                                    <span>Confident, prepared team ready for any inspection</span>
                                </li>
                                <li className="flex gap-2 items-start text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                                    <span>Always inspection-ready with continuous monitoring</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* user testimonial */}
                <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
                    <div className="mx-auto flex items-center justify-center gap-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <div className='text-center font-semibold text-balance text-gray-800'>
                        "Compliance Care transformed our entire approach to compliance. <span className='bg-yellow-200'>We went from dreading inspections to feeling completely confident</span> and prepared. The AI spotted gaps we never would have found ourselves."
                    </div>

                    <div className='flex mx-auto items-center justify-center gap-4 my-6'>
                        <img src="/users/professional-woman-2.svg" alt="Sarah Mitchell, Care Manager" className="inline-block pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>Sarah Mitchell</p>
                            <p className='text-sm'>Care Manager, Willowbrook Children's Home</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default BeforeAfter