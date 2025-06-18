'use client'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

function FaqSection() {
    const faqs = [
        {
            question: "How does Compliance Care help with OFSTED compliance?",
            answer: "Compliance Care uses AI to analyze your policies and procedures against current OFSTED frameworks, providing real-time compliance scoring and identifying gaps. Our mock inspection simulator prepares your team for actual inspections with realistic scenarios and predictive grading."
        },
        {
            question: "Is my data secure and GDPR compliant?",
            answer: "Yes, absolutely. We're fully GDPR compliant with UK data hosting, AES-256 encryption, and automatic file deletion after 48 hours. All user actions are logged, and we maintain ISO 27001 certification for security management."
        },
        {
            question: "What types of documents can be analyzed?",
            answer: "Our AI can analyze PDF, DOC, DOCX, and TXT files including policies, procedures, risk assessments, and care documentation. Each document is evaluated against OFSTED's latest frameworks for children's homes and supported living accommodations."
        },
        {
            question: "How accurate is the mock inspection prediction?",
            answer: "Our mock inspection simulator achieves 95% accuracy in predicting OFSTED grades. The system uses real inspection criteria, question banks from 500+ scenarios, and adapts based on your responses to provide realistic preparation."
        },
        {
            question: "What is the early adopter program?",
            answer: "The first 20 customers get access to Compliance Care for £197/month (normally £297/month) with dedicated onboarding support, training sessions, and priority access to new features. Full platform delivery within 2 months."
        },
        {
            question: "Can I track incident patterns for multiple young people?",
            answer: "Yes, our incident pattern analysis uses anonymous profiling (YP001, YP002, etc.) to identify behavioral patterns, risk factors, and provide early intervention recommendations while protecting young people's privacy."
        },
        {
            question: "What kind of support do you provide?",
            answer: "Early adopters receive dedicated onboarding support, comprehensive training sessions, and direct access to our development team for feedback and feature requests. We aim for <2 support tickets per customer per month."
        },
    ];

    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950'>
                                            <div className='flex items-center'>
                                                <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90' />
                                                <div className='ml-2 text-zinc-950 text-xl font-semibold'>
                                                    {faq.question}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className='pl-6 pr-2 leading-relaxed text-zinc-500'>
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default FaqSection