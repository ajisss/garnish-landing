"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  plan: string;
  onClose: () => void;
}

export default function WaitlistModal({ plan, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-black/10 w-full max-w-[420px] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors text-zinc-400"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <span className="text-[22px]">🎉</span>
            </div>
            <h3 className="text-[18px] font-bold text-zinc-900 mb-2">Kamu masuk waitlist!</h3>
            <p className="text-[14px] text-zinc-400 leading-[1.7]">
              Kami akan notif kamu via email begitu Garnish {plan} siap diluncurkan.
            </p>
            <button
              onClick={onClose}
              className="btn-primary w-full !py-3 !text-[14px] mt-6"
            >
              Tutup
            </button>
          </div>
        ) : (
          <>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-900 mb-2">Garnish {plan}</p>
            <h3 className="text-[20px] font-bold text-zinc-900 mb-1.5">Join Waitlist</h3>
            <p className="text-[13px] text-zinc-400 leading-[1.7] mb-6">
              Kami akan kabarin kamu pertama kali begitu {plan} siap.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-[12px] font-medium text-zinc-500 block mb-1.5">Nama</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama kamu"
                  className="w-full px-4 py-3 rounded-[12px] border border-zinc-200 text-[14px] text-zinc-900 placeholder:text-zinc-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="text-[12px] font-medium text-zinc-500 block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@kamu.com"
                  className="w-full px-4 py-3 rounded-[12px] border border-zinc-200 text-[14px] text-zinc-900 placeholder:text-zinc-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full !py-3 !text-[14px] mt-2"
              >
                Daftarkan Saya
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
