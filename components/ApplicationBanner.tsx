"use client";

import { FC, useState } from "react";
import { Send, X } from "lucide-react";

const ApplicationBanner: FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[92vw]">
      <div className="flex items-center bg-[#F66813] text-white rounded-full shadow-lg pl-4 sm:pl-5 pr-2 sm:pr-3 py-2.5 sm:py-3">
        <a
          href="https://airtable.com/appurItpElOdUOB2m/pagqdb4wWUWJrTv2N/form"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-semibold text-xs sm:text-base"
        >
          <Send size={18} className="mr-2 flex-shrink-0" />
          Applications open now until Sept. 11! Click here to apply.
        </a>
        <div className="w-px h-6 bg-white/40 mx-2 sm:mx-3 flex-shrink-0" />
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="text-white hover:text-white/70 transition-colors flex-shrink-0"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ApplicationBanner;
