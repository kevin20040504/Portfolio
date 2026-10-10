"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { button } from "@/lib/utils";

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      // Fallback for browsers that block the Clipboard API (e.g. non-HTTPS pages).
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      setState(ok ? "copied" : "failed");
    }
  }

  return (
    <button type="button" onClick={copy} className={button.secondary}>
      {state === "copied" ? <Check aria-hidden="true" className="text-emerald-400" /> : <Copy aria-hidden="true" />}
      {state === "copied" ? "Copied!" : state === "failed" ? "Couldn't copy" : "Copy email"}
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
