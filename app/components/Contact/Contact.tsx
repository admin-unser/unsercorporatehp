'use client';

import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry_type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiry_type?: string;
  message?: string;
  submit?: string;
}

const inquiryTypes = [
  { value: '', label: 'お問い合わせ種別を選択' },
  { value: 'bpo', label: 'BPO事業について' },
  { value: 'development', label: 'システム開発について' },
  { value: 'consulting', label: 'コンサルティングについて' },
  { value: 'partnership', label: '協業・パートナーシップ' },
  { value: 'recruitment', label: '採用について' },
  { value: 'other', label: 'その他' },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry_type: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.inquiry_type) {
      newErrors.inquiry_type = 'お問い合わせ種別を選択してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        phone: formData.phone || '',
        inquiry_type: formData.inquiry_type,
        message: formData.message,
      });

      // Netlify Forms: 送信先は静的ファイル（__forms.html）である必要がある
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload.toString(),
      });

      // Netlifyは成功時に302リダイレクトを返すため、redirectedも成功とみなす
      if (response.ok || response.redirected) {
        router.push('/success');
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch {
      setErrors({ submit: '送信に失敗しました。お手数ですが、お電話にてご連絡ください。' });
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (fieldName: string, hasError: boolean) => `
    w-full px-5 py-4 bg-white/[0.02] border rounded-xl text-white placeholder-[#52525b] 
    focus:outline-none transition-all duration-300
    ${hasError 
      ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/[0.02]' 
      : focusedField === fieldName
        ? 'border-indigo-500/50 bg-white/[0.03]'
        : 'border-white/[0.06] hover:border-white/[0.1]'
    }
  `;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-[#030303] to-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/[0.03] via-purple-500/[0.02] to-pink-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              まずはお気軽に
            </span>
            <br />
            <span className="text-gradient-accent">
              ご相談ください
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-[#a1a1aa] max-w-xl mx-auto"
          >
            課題感のヒアリングから最適なソリューションのご提案まで、
            <br className="hidden md:block" />
            <span className="text-white/90">24時間以内</span>にご返信いたします。
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative p-8 md:p-12 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
        >
          {/* Form Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">送信完了</h3>
                <p className="text-[#a1a1aa]">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より24時間以内にご連絡いたします。
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                name="contact"
                method="POST"
                action="/success"
                encType="application/x-www-form-urlencoded"
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >
                {/* Netlify Forms用：フレームワークでは必須の隠し入力 */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                      お名前 <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('name', !!errors.name)}
                      placeholder="山田 太郎"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-2 text-xs text-red-400"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                      メールアドレス <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email', !!errors.email)}
                      placeholder="taro@example.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-2 text-xs text-red-400"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('company', false)}
                      placeholder="合同会社○○"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('phone', false)}
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiry_type" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                    お問い合わせ種別 <span className="text-indigo-400">*</span>
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('inquiry_type')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses('inquiry_type', !!errors.inquiry_type)} appearance-none cursor-pointer`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25rem',
                    }}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#0a0a0a]">
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <AnimatePresence>
                    {errors.inquiry_type && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-2 text-xs text-red-400"
                      >
                        {errors.inquiry_type}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#a1a1aa] tracking-wider uppercase mb-2">
                    お問い合わせ内容 <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`${inputClasses('message', !!errors.message)} resize-none`}
                    placeholder="ご相談内容をお聞かせください。現在の課題、目指したいゴールなど、どんなことでも構いません。"
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-2 text-xs text-red-400"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {errors.submit && (
                  <p className="text-sm text-red-400 text-center">{errors.submit}</p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="group relative w-full py-5 px-8 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        送信中...
                      </>
                    ) : (
                      <>
                        無料相談を申し込む
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-center text-xs text-[#52525b]">
                  送信いただいた情報は、プライバシーポリシーに基づき適切に管理いたします。
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
