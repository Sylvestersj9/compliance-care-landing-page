import { ChevronDown, Play, FileText, Brain, TrendingUp } from 'lucide-react';

function DemoSection() {
    return (
        <section className='bg-white/80 py-20'>
            <div className="w-[90%] sm:max-w-4xl lg:max-w-6xl mx-auto flex flex-col items-center text-gray-700">
                <h1 className='font-bold text-4xl text-center mb-4'>See Compliance Care in Action</h1>
                <p className='max-w-2xl text-center text-lg font-medium text-gray-600 mb-12'>
                    Watch how our AI-powered platform transforms OFSTED compliance for children's care organizations
                </p>

                {/* demo video */}
                <div className='my-12 scroll-mt-28 w-full' id='demo'>
                    <div className='w-full lg:w-4/5 lg:mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200'>
                        <video 
                            controls
                            className="w-full h-auto"
                            poster="/dashboard-updated.svg"
                        >
                            <source src="/dashboard-demo.mp4" type="video/mp4" />
                            <source src="/dashboard-demo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='bg-white p-6 text-center'>
                            <h2 className="font-bold text-2xl text-gray-800 mb-2">
                                Platform Demo
                            </h2>
                            <p className="text-gray-600 text-center max-w-md mx-auto">
                                See document analysis, mock inspections, and incident pattern recognition in an overview
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature highlights */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl'>
                    <div className='text-center'>
                        <div className='bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <FileText className='h-8 w-8 text-pink-600' />
                        </div>
                        <h3 className='font-bold text-lg mb-2'>Document Analysis</h3>
                        <p className='text-gray-600 text-sm'>Upload policies and get instant OFSTED compliance scoring</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <Brain className='h-8 w-8 text-pink-600' />
                        </div>
                        <h3 className='font-bold text-lg mb-2'>Mock Inspections</h3>
                        <p className='text-gray-600 text-sm'>Practice with realistic scenarios and predictive grading</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
                            <TrendingUp className='h-8 w-8 text-pink-600' />
                        </div>
                        <h3 className='font-bold text-lg mb-2'>Pattern Analysis</h3>
                        <p className='text-gray-600 text-sm'>Identify incident patterns for early intervention</p>
                    </div>
                </div>

                <div className='flex items-center justify-center mb-4'>
                    <ChevronDown className='animate-bounce w-10 h-10 text-gray-600' />
                </div>

                <div className='font-medium text-center text-2xl text-gray-600 hover:text-gray-800 cursor-pointer'>
                    Ready to get inspection-ready?
                </div>
            </div>
        </section>
    )
}

export default DemoSection