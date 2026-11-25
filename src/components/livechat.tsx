import Script from "next/script";

/** SOD Odoo Live Chat widget (odoo.soderp.com, channel 1). Replaces phone contact on the site. */
export function LiveChat() {
  return (
    <>
      <Script id="odoo-livechat-loader" src="https://odoo.soderp.com/im_livechat/loader/1" strategy="afterInteractive" />
      <Script id="odoo-livechat-embed" src="https://odoo.soderp.com/im_livechat/assets_embed.js" strategy="afterInteractive" />
    </>
  );
}
