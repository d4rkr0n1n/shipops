"use client";

import QRCode from "qrcode";
import { useEffect, useRef } from "react";

const email = "midlry.mr@gmail.com";
const mailto = `mailto:${email}`;

export default function ContactDialog({ planName }: { planName: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    void QRCode.toCanvas(canvasRef.current, mailto, {
      width: 176,
      margin: 1,
      color: { dark: "#101614", light: "#ffffff" },
    });
  }, []);

  return (
    <>
      <button className="plan-choice" type="button" onClick={() => dialogRef.current?.showModal()}>
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
        </div>
      </dialog>
    </>
  );
}
