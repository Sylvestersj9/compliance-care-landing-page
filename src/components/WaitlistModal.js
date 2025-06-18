import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, User, Building, Phone, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

function WaitlistModal({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        phone: '',
        role: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create email content
            const emailContent = `
🎯 NEW WAITLIST SIGNUP - Compliance Care

WAITLIST REGISTRATION DETAILS:
================================

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Phone: ${formData.phone}
Role: ${formData.role}

Submission Type: WAITLIST SIGNUP
Submitted at: ${new Date().toLocaleString()}
Source: Landing Page Waitlist Form

This person has joined the Compliance Care waitlist and is interested in early access to the platform.
            `;

            // Send email using formsubmit.co (free service)
            const response = await fetch('https://formsubmit.co/janvesylvester@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    organization: formData.organization,
                    phone: formData.phone,
                    role: formData.role,
                    _subject: '🎯 NEW WAITLIST SIGNUP - Compliance Care Platform',
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        phone: '',
                        role: ''
                    });
                    setSubmitStatus(null);
                    onClose();
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ margin: 0 }}>
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95 my-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Join the Waitlist</h3>
                        <p className="text-sm text-gray-600 mt-1">Secure your spot for early access</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <X className="h-5 w-5 text-gray-400" />
                    </button>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="p-6 text-center">
                        <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">You're on the list!</h4>
                        <p className="text-gray-600">
                            Thank you for joining our waitlist. We'll notify you as soon as Compliance Care is available.
                        </p>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-6">
                        <div className="flex items-center p-4 bg-red-50 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                            <p className="text-red-700 text-sm">
                                Something went wrong. Please try again or contact us directly.
                            </p>
                        </div>
                    </div>
                )}

                {/* Form */}
                {submitStatus !== 'success' && (
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Organization */}
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                                Organization *
                            </label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                                    placeholder="Children's home or care organization"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                                    placeholder="Optional phone number"
                                />
                            </div>
                        </div>

                        {/* Role */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                            >
                                <option value="">Select your role</option>
                                <option value="Care Manager">Care Manager</option>
                                <option value="Operations Director">Operations Director</option>
                                <option value="Compliance Officer">Compliance Officer</option>
                                <option value="Quality Assurance Lead">Quality Assurance Lead</option>
                                <option value="Support Worker">Support Worker</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                buttonVariants({ size: 'lg' }),
                                "w-full mt-6 relative overflow-hidden",
                                isSubmitting && "opacity-70 cursor-not-allowed"
                            )}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Joining Waitlist...
                                </div>
                            ) : (
                                "Secure My Spot"
                            )}
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            We'll only contact you about Compliance Care updates. No spam, ever.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

export default WaitlistModal;
