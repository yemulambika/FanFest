import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const niches = ["Gaming", "Beauty & Fashion", "Fitness & Health", "Food & Cooking", "Comedy & Entertainment", "Education", "Music", "Tech & Reviews", "Travel", "Lifestyle & Vlogging", "Art & Design", "Other"];

const platforms = ["YouTube", "Instagram", "TikTok", "Twitch", "Podcast", "X (Twitter)", "Other"];

const followerRanges = ["Under 10K", "10K-50K", "50K-100K", "100K-500K", "500K-1M", "1M+"];

const viewRanges = ["Under 5K", "5K-25K", "25K-100K", "100K-500K", "500K+"];

const interests = ["Hosting a Panel or Talk", "Meet & Greet Booth", "Creator Collaborations", "Brand Sponsorship Opportunities", "Live Content Challenges"];

const sources = ["Instagram", "TikTok", "YouTube", "Twitter / X", "Friend or Fellow Creator", "Newsletter / Email", "Search Engine", "Other"];

function ApplyForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    handle: "",
    niche: "",
    platforms: [],
    followers: "",
    avgViews: "",
    profileLink: "",
    interests: [],
    about: "",
    experience: "",
    heardFrom: "",
    agreeTerms: false,
    agreePhotos: false,
    agreeUpdates: false
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleCheckboxGroup = (name, value) => {
    setForm(prev => {
      const current = prev[name] || [];
      const updated = current.includes(value) 
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [name]: updated };
    });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.handle) newErrors.handle = "Creator handle is required";
    if (!form.niche) newErrors.niche = "Niche is required";
    if (!form.platforms.length) newErrors.platforms = "Select at least one platform";
    if (!form.followers) newErrors.followers = "Follower range is required";
    if (!form.profileLink) newErrors.profileLink = "Profile link is required";
    if (!form.about) newErrors.about = "About section is required";
    if (!form.agreeTerms) newErrors.agreeTerms = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstError}"]`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(`${API_URL}/applications`, form);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.response?.data?.message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      handle: "",
      niche: "",
      platforms: [],
      followers: "",
      avgViews: "",
      profileLink: "",
      interests: [],
      about: "",
      experience: "",
      heardFrom: "",
      agreeTerms: false,
      agreePhotos: false,
      agreeUpdates: false
    });
    setSubmitted(false);
    setSubmitError("");
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-panel border border-panelBorder rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="heading-display text-3xl mb-4">Application Received</h2>
        <p className="text-muted mb-6">
          Thank you for applying! We've received your application and will review it within 5-7 business days.
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-2 rounded-full bg-brand-red text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-red/90 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-panel border border-panelBorder rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="heading-display text-3xl mb-2">Apply as a Creator</h1>
        <p className="text-muted">Fill in the form below and we'll review your application within 5-7 business days.</p>
      </div>

      {/* Section 1 - Personal Information */}
      <div className="mb-8">
        <div className="eyebrow mb-4">PERSONAL INFORMATION</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="e.g. Alex"
              value={form.firstName}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
            {errors.firstName && <p className="text-brand-red text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="e.g. Rivera"
              value={form.lastName}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
            {errors.lastName && <p className="text-brand-red text-xs mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="hello@yoursite.com"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
            {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="+91 9876543210"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Select your country"
              value={form.country}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
            {errors.country && <p className="text-brand-red text-xs mt-1">{errors.country}</p>}
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="e.g. Mumbai"
              value={form.city}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Creator Profile */}
      <div className="mb-8">
        <div className="eyebrow mb-4">CREATOR PROFILE</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              name="handle"
              placeholder="@yourname"
              value={form.handle}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
            />
            {errors.handle && <p className="text-brand-red text-xs mt-1">{errors.handle}</p>}
          </div>
          <div>
            <select
              name="niche"
              value={form.niche}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white focus:border-brand-red"
            >
              <option value="">Select your niche</option>
              {niches.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
            {errors.niche && <p className="text-brand-red text-xs mt-1">{errors.niche}</p>}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm font-bold text-white mb-2">Primary Platform(s) *</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {platforms.map(platform => (
              <label key={platform} className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.platforms.includes(platform)}
                  onChange={() => handleCheckboxGroup("platforms", platform)}
                  className="w-4 h-4 accent-brand-red mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-red font-bold text-sm leading-tight">{platform}</span>
              </label>
            ))}
          </div>
          {errors.platforms && <p className="text-brand-red text-xs mt-1">{errors.platforms}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <select
              name="followers"
              value={form.followers}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white focus:border-brand-red"
            >
              <option value="">Select range</option>
              {followerRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            {errors.followers && <p className="text-brand-red text-xs mt-1">{errors.followers}</p>}
          </div>
          <div>
            <select
              name="avgViews"
              value={form.avgViews}
              onChange={handleChange}
              className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white focus:border-brand-red"
            >
              <option value="">Select range</option>
              {viewRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <input
            type="text"
            name="profileLink"
            placeholder="https://..."
            value={form.profileLink}
            onChange={handleChange}
            className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red"
          />
          {errors.profileLink && <p className="text-brand-red text-xs mt-1">{errors.profileLink}</p>}
        </div>
      </div>

      {/* Section 3 - Participation Preferences */}
      <div className="mb-8">
        <div className="eyebrow mb-4">PARTICIPATION PREFERENCES</div>
        <div className="mb-4">
          <div className="text-sm font-bold text-white mb-2">Interested In (select all that apply)</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {interests.map(interest => (
              <label key={interest} className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.interests.includes(interest)}
                  onChange={() => handleCheckboxGroup("interests", interest)}
                  className="w-4 h-4 accent-brand-red mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-red font-bold text-sm leading-tight">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            name="about"
            placeholder="Share a brief intro, what kind of content you create, and why FanFest 2026 excites you..."
            value={form.about}
            onChange={handleChange}
            rows={4}
            className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red resize-none"
          />
          {errors.about && <p className="text-brand-red text-xs mt-1">{errors.about}</p>}
        </div>

        <div className="mb-4">
          <textarea
            name="experience"
            placeholder="Have you attended or participated in fan conventions or creator events before? Tell us about it."
            value={form.experience}
            onChange={handleChange}
            rows={3}
            className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white placeholder-muted focus:border-brand-red resize-none"
          />
        </div>

        <div>
          <select
            name="heardFrom"
            value={form.heardFrom}
            onChange={handleChange}
            className="w-full bg-panel border border-panelBorder rounded-lg px-4 py-2 text-white focus:border-brand-red"
          >
            <option value="">Select one</option>
            {sources.map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Consent Checkboxes */}
      <div className="border-t border-panelBorder pt-4 mb-6">
        <div className="space-y-3">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={form.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4 accent-brand-red mt-0.5 flex-shrink-0"
            />
            <span className="text-brand-red font-bold leading-tight">I agree to FanFest 2026's Terms & Conditions and Creator Code of Conduct.</span>
          </label>
          {errors.agreeTerms && <p className="text-brand-red text-xs">{errors.agreeTerms}</p>}

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreePhotos"
              checked={form.agreePhotos}
              onChange={handleChange}
              className="w-4 h-4 accent-brand-red mt-0.5 flex-shrink-0"
            />
            <span className="text-brand-red font-bold leading-tight">I consent to photos and videos of me being used in FanFest marketing materials.</span>
          </label>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreeUpdates"
              checked={form.agreeUpdates}
              onChange={handleChange}
              className="w-4 h-4 accent-brand-red mt-0.5 flex-shrink-0"
            />
            <span className="text-brand-red font-bold leading-tight">Keep me updated with FanFest news and future opportunities.</span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-3 rounded-full bg-brand-red text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-red/90 transition-colors disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Submit My Application →"}
        </button>
        
        <p className="text-muted text-xs mt-4">
          Applications close June 30, 2026. We'll respond within 5-7 business days. Limited spots available.
        </p>
        
        {submitError && <p className="text-brand-red text-xs mt-2">{submitError}</p>}
      </div>
    </form>
  );
}

export default ApplyForm;