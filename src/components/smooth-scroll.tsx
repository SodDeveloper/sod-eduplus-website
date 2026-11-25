"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * Gentle inertial scrolling on the window (so position:fixed / sticky
 * elements — header, Odoo live chat — keep working).
 * Lenis already forces lerp=1 when the user prefers reduced motion.
 */
export function SmoothScroll() {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        lerp: 0.1,
        wheelMultiplier: 0.9,
        smoothWheel: true,
        // Native touch inertia on phones; do not wrap or hijack touch.
        syncTouch: false,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
        allowNestedScroll: true,
        prevent: (node) =>
          Boolean(
            node.closest(
              "[data-lenis-prevent], .o-livechat-root, .o_livechat_button, .o_livechat_root, .o-livechat-LivechatButton, iframe[src*='im_livechat'], iframe[src*='odoo']",
            ),
          ),
      }}
    />
  );
}
