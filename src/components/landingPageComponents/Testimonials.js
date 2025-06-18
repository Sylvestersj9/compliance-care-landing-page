import MaxWidthWrapper from '../MaxWidthWrapper';

function Testimonials() {
    return (
        <MaxWidthWrapper>
            <div className='text-center space-y-5 my-14' id='testimonials'>
                <h1 className='font-bold text-4xl'>127 care providers trust us</h1>
                <h2 className='font-semibold text-xl'>Hear from care managers and compliance officers who've transformed their OFSTED readiness with Compliance Care.</h2>
            </div>

            <ul className='mx-auto md:columns-2 lg:columns-3 space-y-4 md:space-y-6 md:gap-6'>
                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-orange-200 bg-orange-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "Compliance Care reduced our OFSTED prep time from 3 weeks to 3 days. The AI document analysis caught gaps we completely missed. Outstanding rating achieved!"
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/john.png" alt="Sarah Mitchell" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Sarah Mitchell</p>
                                    <p className='text-sm'>Registered Manager, Hounslow</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-green-200 bg-green-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "The real-time compliance dashboard gives me complete visibility across all our homes. I can spot issues before they escalate. Invaluable for multi-site management."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_1.png" alt="Michael Chen" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Michael Chen</p>
                                    <p className='text-sm'>Operations Director, Care Group London</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-indigo-200 bg-indigo-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "The mock inspection simulator was incredible. Our team knew exactly what to expect during the real OFSTED visit. We felt completely prepared and confident."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_3.png" alt="James Thompson" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>James Thompson</p>
                                    <p className='text-sm'>Head of Compliance, Hillingdon</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-purple-200 bg-purple-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "Staff training compliance used to be a nightmare. Now everything's automated and tracked. We never miss renewal dates and our audit trail is perfect."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_2.webp" alt="Lisa Rodriguez" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Lisa Rodriguez</p>
                                    <p className='text-sm'>HR Manager, Children's Services</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-cyan-200 bg-cyan-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "The incident pattern analysis identified risks we hadn't spotted. Compliance Care helped us prevent issues before they became problems. Game-changing platform!"
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_4.webp" alt="Emma Davies" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Emma Davies</p>
                                    <p className='text-sm'>Quality Assurance Manager, Harrow</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-rose-200 bg-rose-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "CQC inspections are no longer stressful. The platform keeps us continuously ready and the automated reporting saves us 15+ hours per month."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_5.webp" alt="Rachel Foster" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Rachel Foster</p>
                                    <p className='text-sm'>Care Home Manager, West London</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-blue-200 bg-blue-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "Risk assessments are now standardized across all our locations. The AI recommendations are spot-on and have significantly improved our safety protocols."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/avatar_default_6.webp" alt="David Wilson" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>David Wilson</p>
                                    <p className='text-sm'>Regional Manager, Safe Care Solutions</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-amber-200 bg-amber-50 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "Document management was chaos before Compliance Care. Now everything's organized, version-controlled, and instantly accessible during inspections."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/john.png" alt="Amanda Price" className="inline-block shrink-0 pointer-events-none h-12 w-12 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Amanda Price</p>
                                    <p className='text-sm'>Compliance Officer, Ealing Council</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>

                <li className='break-inside-avoid'>
                    <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 via-indigo-200 to-teal-200 transition-all duration-300 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                        <blockquote className='border-b pb-4 font-semibold text-lg'>
                            "Ready to transform your OFSTED compliance? Join 127+ care providers who trust Compliance Care to keep them inspection-ready 24/7."
                        </blockquote>
                        <figcaption>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src="/users/john.png" alt="Your organization" className="inline-block shrink-0 pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Your Care Organization</p>
                                    <p className='text-sm'>Next Success Story</p>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </MaxWidthWrapper>
    );
}

export default Testimonials;
