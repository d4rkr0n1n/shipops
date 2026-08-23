"use client";

import { useEffect, useRef, useState } from "react";

const email = "midlry.mr@gmail.com";
const qrMailto = `mailto:${email}`;

export default function ContactDialog({ planName }: { planName: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const templateCanvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const subject = `ShipOps ${planName} monthly plan inquiry`;
  const body = `Hi,

I'm interested in the ShipOps ${planName} monthly plan.

DevOps project requirements:
- Project scope: [Add details]
- Current setup: [Add details]
- Key challenges: [Add details]
- Expected outcomes: [Add details]
- Preferred timeline: [Add details]

Please let me know the next steps and availability.

Thanks,
[Your name]`;
  const emailTemplate = `To: ${email}\nSubject: ${subject}\n\n${body}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  useEffect(() => {
    if (!open || !canvasRef.current) return;
    const canvas = canvasRef.current;

    void import("qrcode").then(({ default: QRCode }) =>
      QRCode.toCanvas(canvas, qrMailto, {
        width: 176,
        margin: 1,
        color: { dark: "#101614", light: "#ffffff" },
      }),
    );
  }, [open, qrMailto]);

  useEffect(() => {
    if (!open || !templateCanvasRef.current) return;
    const canvas = templateCanvasRef.current;

    void import("qrcode").then(({ default: QRCode }) =>
      QRCode.toCanvas(canvas, mailto, {
        width: 220,
        margin: 2,
        errorCorrectionLevel: "L",
        color: { dark: "#101614", light: "#ffffff" },
      }),
    );
  }, [open, mailto]);

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable or denied.
    }
  }

  return (
    <>
      <button className="plan-choice" type="button" onClick={() => { setOpen(true); dialogRef.current?.showModal(); }}>
        Choose {planName} <span aria-hidden="true">↗</span>
      </button>
      <dialog className="contact-dialog" ref={dialogRef} aria-labelledby={`contact-title-${planName}`} onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}>
        <div className="contact-dialog-card">
          <button className="dialog-close" type="button" aria-label="Close dialog" onClick={() => dialogRef.current?.close()}>×</button>
          <p className="eyebrow"><span /> Let&apos;s talk</p>
          <h3 id={`contact-title-${planName}`}>Thank you for reaching out.</h3>
          <div className="contact-dialog-content">
            <div>
              <p>Please email me the details of your <strong>DevOps project requirements</strong>, including the scope, current setup, key challenges, and expected outcomes. I’ll review the information and connect with you shortly to discuss the next steps.</p>
              <p>Here&apos;s my email ID:</p>
              <a className="dialog-email" href={mailto}>{email} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="qr-wrap">
              <canvas ref={canvasRef} aria-label={`QR code to email ${email}`} role="img" />
              <span>SCAN TO EMAIL</span>
            </div>
          </div>
          <div className="email-template">
            <div className="email-template-head">
              <div>
                <span>EMAIL TEMPLATE</span>
                <strong>{planName} monthly plan</strong>
              </div>
              <div className="email-template-actions">
                <button type="button" onClick={copyTemplate} aria-live="polite">
                  {copied ? "Copied ✓" : "Copy template"}
                </button>
                <a href={mailto}>Email <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="email-template-body">
              <pre>{emailTemplate}</pre>
              <div className="qr-wrap template-qr-wrap">
                <canvas ref={templateCanvasRef} aria-label={`QR code for the ${planName} plan email template`} role="img" />
                <span>SCAN TEMPLATE</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
