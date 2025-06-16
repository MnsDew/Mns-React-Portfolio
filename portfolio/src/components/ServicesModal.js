import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ServicesModal.css';
import emailjs from 'emailjs-com';
import logo2nd from '../assest/2nd.png';

const ServicesModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    name: '',
    email: '',
    message: ''
  });
  const [lastLocation, setLastLocation] = useState(null);
  const [otherProjectType, setOtherProjectType] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [showProjectType, setShowProjectType] = useState(true);
  const [showBudget, setShowBudget] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setLastLocation(location.pathname);
    }
  }, [isOpen, location]);

  const handleClose = () => {
    if (lastLocation) {
      navigate(lastLocation);
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeSelect = (type) => {
    if (type === 'other') {
      setShowOtherInput(true);
    } else {
      setFormData(prev => ({ ...prev, projectType: type }));
      setShowOtherInput(false);
    }
  };

  const handleOtherProjectTypeSubmit = () => {
    if (otherProjectType.trim()) {
      setFormData(prev => ({ ...prev, projectType: otherProjectType }));
      setShowOtherInput(false);
      handleNext();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID2,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
          handleClose();
        },
        () => {
          alert('Failed to send message. Try again.');
        }
      )
      .finally(() => setLoading(false));
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.projectType) return;
    if (currentStep === 2 && !formData.budget) return;
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const projectTypes = [
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'mobile', label: 'Mobile App', icon: '📱' },
    { id: 'design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'other', label: 'Other', icon: '✨' }
  ];

  const budgetRanges = [
    { id: 'small', label: 'Small Project ', icon: '💰' },
    { id: 'medium', label: 'Medium Project ', icon: '💎' },
    { id: 'large', label: 'Large Project ', icon: '🏆' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="modal-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center w-full">
              <h2 className="modal-title">Let's Build Something Amazing</h2>
              <img src={logo2nd} alt="Logo" style={{ maxWidth: '120px', margin: '0 auto 1.5rem auto', display: 'block' }} />
              <div className="modal-progress-bar-bg">
                <div
                  className="modal-progress-bar-fill"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    className="step-enter"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-section flex flex-col items-center">
                      <div className="flex items-center justify-center w-full">
                        <div className="question-title">What type of project do you need?</div>
                        <button type="button" aria-label="Toggle" onClick={() => setShowProjectType(v => !v)} style={{marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer'}}>
                          <span style={{fontSize: '1.5rem', display: 'inline-block', transform: showProjectType ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s'}}>▼</span>
                        </button>
                      </div>
                      {showProjectType && (
                        <div className="options-grid">
                          {projectTypes.map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              className={`option-card ${formData.projectType === type.id ? 'selected' : ''}`}
                              onClick={() => handleProjectTypeSelect(type.id)}
                            >
                              <span className="icon">{type.icon}</span>
                              <span className="text-white">{type.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                      {showOtherInput && showProjectType && (
                        <div className="other-popover-backdrop">
                          <div className="other-popover">
                            <button
                              type="button"
                              onClick={() => setShowOtherInput(false)}
                              className="other-popover-close"
                              aria-label="Close"
                            >
                              ×
                            </button>
                            <div className="other-popover-title">Please specify your project type</div>
                            <input
                              type="text"
                              value={otherProjectType}
                              onChange={(e) => setOtherProjectType(e.target.value)}
                              placeholder="Tell us about your project"
                              className="modal-input w-full"
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={handleOtherProjectTypeSubmit}
                              className="modal-button w-full"
                              disabled={!otherProjectType.trim()}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    className="step-enter"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-section flex flex-col items-center">
                      <div className="flex items-center justify-center w-full">
                        <div className="question-title">What's your budget range?</div>
                        <button type="button" aria-label="Toggle" onClick={() => setShowBudget(v => !v)} style={{marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer'}}>
                          <span style={{fontSize: '1.5rem', display: 'inline-block', transform: showBudget ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s'}}>▼</span>
                        </button>
                      </div>
                      {showBudget && (
                        <div className="options-grid">
                          {budgetRanges.map((range) => (
                            <button
                              key={range.id}
                              type="button"
                              className={`option-card ${formData.budget === range.id ? 'selected' : ''}`}
                              onClick={() => setFormData(prev => ({ ...prev, budget: range.id }))}
                            >
                              <span className="icon">{range.icon}</span>
                              <span className="budget-label">
                                <span className="label">{range.label}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    className="step-enter"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-section">
                      <label className="modal-label">Tell us more about your project</label>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name || ''}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="modal-input w-full"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          className="modal-input w-full"
                          required
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your project in detail..."
                          className="modal-input w-full h-32 resize-none"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <input type="hidden" name="projectType" value={formData.projectType || ''} />
              <input type="hidden" name="budget" value={formData.budget || ''} />
              <input type="hidden" name="email" value={formData.email || ''} />
              <div className="modal-actions">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="back-button"
                  >
                    Back
                  </button>
                )}
                {currentStep === 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next-button" style={{marginRight: '1rem'}}
                    disabled={!formData.projectType}
                  >
                    Next
                  </button>
                )}
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.budget) handleNext();
                    }}
                    className="next-button"
                    disabled={!formData.budget}
                  >
                    Next
                  </button>
                )}
                {currentStep === 3 && (
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                  >
                    {loading ? 'Sending...' : 'Submit Project'}
                  </button>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="nav-button cancel-btn"
                  style={{ minWidth: 120 }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesModal; 