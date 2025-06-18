import { FileText, Search, TrendingUp, Brain } from 'lucide-react';

function FeatureDisplay() {
    return (
        <section className="bg-slate-50 py-24 pb-16">
            <div className='max-w-sm sm:max-w-2xl lg:max-w-6xl mx-auto flex flex-col gap-4'>
                <h2 className='tracking-tight font-bold text-center md:text-left text-3xl lg:text-5xl lg:leading-[3.5rem]'>
                    Three Essential Features for Complete OFSTED Readiness
                </h2>
                <p className='font-semibold my-4 text-center md:text-left text-gray-700'>
                    Compliance Care delivers focused AI-powered solutions specifically designed for children's care organizations in the UK. Get inspection-ready with intelligent document analysis, realistic mock inspections, and predictive incident management.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    <div className='flex flex-col items-center text-center gap-4 p-6 bg-white rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all duration-200'>
                        <FileText className='h-12 w-12 text-pink-600 group-hover:scale-110 transition-transform duration-200' />
                        <h3 className='text-xl font-bold'>AI Document Analysis</h3>
                        <p className='text-gray-600'>Intelligent analysis of policies and procedures against OFSTED frameworks with real-time compliance scoring and gap identification.</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-4 p-6 bg-white rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all duration-200'>
                        <Search className='h-12 w-12 text-pink-600 group-hover:scale-110 transition-transform duration-200' />
                        <h3 className='text-xl font-bold'>Mock Inspection Simulator</h3>
                        <p className='text-gray-600'>Realistic OFSTED inspection simulation with scenario-based questioning and predictive grading to prepare your team.</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-4 p-6 bg-white rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all duration-200'>
                        <TrendingUp className='h-12 w-12 text-pink-600 group-hover:scale-110 transition-transform duration-200' />
                        <h3 className='text-xl font-bold'>Incident Pattern Analysis</h3>
                        <p className='text-gray-600'>AI-powered analysis of incident data to identify patterns and provide early intervention recommendations for young people.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureDisplay