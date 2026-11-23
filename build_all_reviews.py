#!/usr/bin/env python3
import re
import os
import json
import urllib.parse
import base64
import mimetypes

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
BASE64_ASSETS = {}

if os.path.exists(PUBLIC_DIR):
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for fname in files:
            fpath = os.path.join(root, fname)
            if os.path.isfile(fpath):
                mime, _ = mimetypes.guess_type(fpath)
                if not mime:
                    if fname.endswith('.svg'): mime = 'image/svg+xml'
                    elif fname.endswith('.png'): mime = 'image/png'
                    elif fname.endswith('.jpg') or fname.endswith('.jpeg'): mime = 'image/jpeg'
                    else: mime = 'application/octet-stream'
                try:
                    with open(fpath, 'rb') as fp:
                        b64_str = base64.b64encode(fp.read()).decode('utf-8')
                        data_uri = f'data:{mime};base64,{b64_str}'
                        rel_from_public = os.path.relpath(fpath, PUBLIC_DIR)
                        
                        BASE64_ASSETS[fname] = data_uri
                        BASE64_ASSETS[urllib.parse.unquote(fname)] = data_uri
                        BASE64_ASSETS[urllib.parse.quote(fname)] = data_uri
                        
                        BASE64_ASSETS[rel_from_public] = data_uri
                        BASE64_ASSETS['/' + rel_from_public] = data_uri
                        BASE64_ASSETS[urllib.parse.unquote(rel_from_public)] = data_uri
                        BASE64_ASSETS['/' + urllib.parse.unquote(rel_from_public)] = data_uri
                except Exception as e:
                    pass

# ── Complete Client Review CSS ──
REVIEW_CSS = """
/* ─── Client Review System & Spacing Styles ─── */
.reveal {
  opacity: 1 !important;
  transform: none !important;
}
html, body {
  overflow-x: clip !important;
}

/* ─── Interactive Navbar Dropdowns & Smooth Hover Menus ─── */
.sn-nav-item {
  position: relative !important;
}
.sn-dropdown-menu {
  position: absolute !important;
  top: 100% !important;
  left: 0 !important;
  padding-top: 10px !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transform: translateY(6px) scale(0.97) !important;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
  pointer-events: none !important;
  z-index: 100 !important;
}
.sn-nav-item:hover .sn-dropdown-menu,
.sn-nav-item:focus-within .sn-dropdown-menu {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) scale(1) !important;
  pointer-events: auto !important;
}
.sn-nav-item:hover svg.lucide-chevron-down {
  transform: rotate(180deg) !important;
  color: #008BF8 !important;
}
.sn-nav-item:hover a,
.sn-nav-item:hover button {
  color: #0f172a !important;
}

/* ─── Global 3D Hover Depth on Cards & Buttons ─── */
.card-3d, .card-3d-master, .card-3d-dark {
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.26s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.26s ease !important;
}
.card-3d:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 4px 0 #cbd5e1, 0 16px 36px -6px rgba(15, 23, 42, 0.16), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
  border-color: rgba(0, 139, 248, 0.45) !important;
}
.card-3d-dark:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 4px 0 #0f1d3b, 0 20px 40px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(0, 139, 248, 0.6) !important;
}
.btn-gradient:hover {
  transform: translateY(-2px) !important;
  filter: brightness(1.08) !important;
  box-shadow: 0 6px 20px rgba(0, 139, 248, 0.45) !important;
}

body.sn-wireframe-mode .sn-design-slot {
  filter: grayscale(100%) contrast(1.06);
}
body.sn-wireframe-mode .sn-design-slot section,
body.sn-wireframe-mode .sn-design-slot .card-3d,
body.sn-wireframe-mode .sn-design-slot .card-3d-master,
body.sn-wireframe-mode .sn-design-slot .card-3d-dark,
body.sn-wireframe-mode .sn-design-slot .card-3d-dark-active,
body.sn-wireframe-mode .sn-design-slot .well-recessed,
body.sn-wireframe-mode .sn-design-slot .well-recessed-dark {
  outline: 1.5px dashed rgba(100, 116, 139, 0.55) !important;
  outline-offset: -2px;
}

/* Sticky Review Topbar */
.sn-topbar {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: #f8fafc;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
}
.sn-topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.sn-topbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.sn-badge {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 999px;
  background: linear-gradient(100deg, #fa0f9c, #7c3aed, #008bf8);
  color: #ffffff;
}
.sn-progress {
  font-size: 11.5px;
  font-family: var(--font-mono), monospace;
  color: #cbd5e1;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.sn-topbar-right {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.sn-input {
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  width: 155px;
  outline: none;
}
.sn-input::placeholder { color: #94a3b8; }
.sn-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}
.sn-btn:hover { background: rgba(255, 255, 255, 0.16); }
.sn-btn.is-active {
  background: #008bf8;
  border-color: #38bdf8;
  color: #ffffff;
}
.sn-btn-primary {
  background: linear-gradient(100deg, #fa0f9c 0%, #c026d3 45%, #008bf8 100%);
  border: none;
  color: #ffffff;
  font-weight: 700;
}
.sn-btn-primary:hover {
  filter: brightness(1.08);
  background: linear-gradient(100deg, #fa0f9c 0%, #c026d3 45%, #008bf8 100%);
}

.sn-jumpbar {
  background: rgba(2, 6, 23, 0.75);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 5px 16px;
}
.sn-jumpbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;
}
.sn-jumplink {
  font-size: 11.5px;
  font-weight: 600;
  color: #cbd5e1;
  text-decoration: none;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
}
.sn-jumplink:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

/* ── Content & Review Spacing ── */
.sn-block-anchor {
  scroll-margin-top: calc(var(--sn-sticky-top, 112px) + 78px);
  position: relative;
}
header[data-sn-fixed="1"] {
  position: fixed !important;
  top: var(--sn-sticky-top, 112px) !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 80 !important;
  width: 100% !important;
}
#hero {
  margin-top: 0 !important;
}
#block-hero {
  margin-top: 12px;
}
@font-face {
  font-family: "SN Hero Display";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(".next/dev/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2") format("woff2");
}
#hero h1,
#hero h1 .text-gradient {
  font-family: "SN Hero Display", Inter, sans-serif !important;
  font-synthesis: none;
}
#hero h1 {
  text-wrap: balance !important;
  font-weight: 800 !important;
  font-size: clamp(2.25rem, 1.5rem + 2.6vw, 3.75rem) !important;
  line-height: 1.08 !important;
  letter-spacing: -0.03em !important;
  overflow: visible !important;
  position: relative;
  z-index: 3;
}
.sn-design-slot {
  position: relative;
  width: 100%;
}

/* Sleek docked comment card */
.sn-comment-wrap {
  max-width: 72rem;
  margin: -10px auto 26px;
  padding: 0 16px;
  position: relative;
  z-index: 25;
}
@media (min-width: 640px) {
  .sn-comment-wrap {
    margin: -16px auto 30px;
    padding: 0 24px;
  }
}
@media (min-width: 1024px) {
  .sn-comment-wrap {
    margin: -20px auto 36px;
    padding: 0 32px;
  }
}

.sn-comment-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid #cbd5e1;
  border-radius: 18px;
  padding: 14px 18px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04);
}
.sn-comment-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e8f0;
}
.sn-comment-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 800;
  color: #0f172a;
}
.sn-sec-num {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 6px;
  background: #0f172a;
  color: #ffffff;
}
.sn-count-pill {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}
.sn-status-group {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.sn-status-btn {
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.sn-status-btn:hover { background: #f8fafc; }
.sn-status-btn.is-selected[data-val="approved"] {
  background: #ecfdf5;
  border-color: #10b981;
  color: #047857;
  font-weight: 800;
}
.sn-status-btn.is-selected[data-val="changes"] {
  background: #fdf2f8;
  border-color: #fa0f9c;
  color: #be185d;
  font-weight: 800;
}
.sn-status-btn.is-selected[data-val="pending"] {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1d4ed8;
  font-weight: 800;
}

.sn-comment-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 16px;
  align-items: start;
}
@media (max-width: 860px) {
  .sn-comment-grid { grid-template-columns: 1fr; }
}
.sn-comment-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sn-empty {
  padding: 12px 14px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  font-size: 12.5px;
  color: #64748b;
  line-height: 1.45;
}
.sn-c-item {
  padding: 10px 12px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.sn-c-item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.sn-c-tag {
  font-size: 10.5px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
}
.sn-c-tag[data-tag="Design"] { background: #fdf2f8; color: #be185d; border-color: #fbcfe8; }
.sn-c-tag[data-tag="Layout"] { background: #f5f3ff; color: #6d28d9; border-color: #ddd6fe; }
.sn-c-tag[data-tag="Question"] { background: #fffbeb; color: #b45309; border-color: #fde68a; }
.sn-c-tag[data-tag="Approval"] { background: #ecfdf5; color: #047857; border-color: #a7f3d0; }

.sn-del-btn {
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 6px;
}
.sn-del-btn:hover { background: #fee2e2; color: #b91c1c; }

.sn-composer {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sn-tag-row { display: flex; flex-wrap: wrap; gap: 5px; }
.sn-tag-pick {
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #475569;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}
.sn-tag-pick.is-active { background: #0f172a; border-color: #0f172a; color: #ffffff; }
.sn-composer-row { display: flex; gap: 8px; align-items: flex-end; }
.sn-textarea {
  flex: 1;
  min-width: 0;
  padding: 8px 11px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 12.5px;
  color: #0f172a;
  min-height: 52px;
  resize: vertical;
}
.sn-textarea:focus { outline: 2px solid rgba(0, 139, 248, 0.35); border-color: #008bf8; }
.sn-post-btn {
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(100deg, #fa0f9c 0%, #c026d3 42%, #008bf8 100%);
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(250, 15, 156, 0.22);
}

.sn-drawer {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: min(420px, 92dvw);
  background: #ffffff;
  border-left: 1px solid #cbd5e1;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -14px 0 40px rgba(15, 23, 42, 0.18);
  transform: translateX(105%);
  transition: transform 0.22s ease;
}
.sn-drawer.is-open { transform: translateX(0); }

dialog.sn-dialog:modal {
  overscroll-behavior: contain;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  padding: 0;
  max-width: min(640px, calc(100dvw - 2rem));
  width: 100%;
  margin: auto;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
}
dialog.sn-dialog::backdrop {
  overflow: hidden;
  overscroll-behavior: contain;
  background: rgba(7, 13, 30, 0.62);
  backdrop-filter: blur(5px);
}

.sn-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(16px);
  background: #070d1e;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 1200;
}
.sn-toast.is-visible { opacity: 1; transform: translateX(-50%) translateY(0); }

/* File-review menu. The live site only draws this after a click, so the
   saved HTML ships it here and the menu button can open it in every browser. */
#sn-file-menu {
  pointer-events: auto;
  position: absolute;
  right: 16px;
  top: 72px;
  z-index: 80;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  padding: 8px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
}
#sn-file-menu[hidden] { display: none !important; }
#sn-file-menu a {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
#sn-file-menu a:hover { background: #f1f5f9; color: #008bf8; }

@media print {
  .sn-topbar, .sn-composer, .sn-drawer, .sn-final-share { display: none !important; }
}
"""

def fix_image_paths(html, is_in_reviews_folder=True):
    def replace_next_img(m):
        url = m.group(1)
        decoded = urllib.parse.unquote(url)
        base = os.path.basename(decoded)
        if base in BASE64_ASSETS:
            return f'src="{BASE64_ASSETS[base]}"'
        return m.group(0)

    html = re.sub(r'src="/_next/image\?url=([^&"]+)[^"]*"', replace_next_img, html)
    html = re.sub(r'srcSet="[^"]*"', '', html)

    def replace_relative_img(m):
        full_path = m.group(1)
        decoded = urllib.parse.unquote(full_path)
        base = os.path.basename(decoded)
        if full_path in BASE64_ASSETS:
            return f'src="{BASE64_ASSETS[full_path]}"'
        if decoded in BASE64_ASSETS:
            return f'src="{BASE64_ASSETS[decoded]}"'
        if ('/' + decoded) in BASE64_ASSETS:
            return f'src="{BASE64_ASSETS["/" + decoded]}"'
        if base in BASE64_ASSETS:
            return f'src="{BASE64_ASSETS[base]}"'
        return m.group(0)

    html = re.sub(r'src=["\'](?:\.\.?/)?public/([^"\']+)["\']', replace_relative_img, html)
    html = re.sub(r'src=["\']/([^"\']+\.(?:png|jpg|jpeg|svg|webp))["\']', replace_relative_img, html)

    # Replace relative paths inside JS strings / HTML attributes
    for fname, uri in BASE64_ASSETS.items():
        if fname and len(fname) > 3:
            html = html.replace(f'../public/{fname}', uri)
            html = html.replace(f'./public/{fname}', uri)
            html = html.replace(f'/public/{fname}', uri)

    return html

def enhance_navbar_dropdowns(header_html, page_name):
    m = re.search(r'(<nav[^>]*>)([\s\S]*?)(</nav>)', header_html)
    if not m:
        return header_html

    home_href = "./home.html" if page_name != "homepage" else "#hero"
    solutions_href = "./home.html#solutions" if page_name != "homepage" else "#solutions"
    about_href = "./about.html" if page_name != "about" else "#about-hero"
    careers_href = "./careers.html" if page_name != "careers" else "#careers-hero"
    resources_href = "./resources.html" if page_name != "resources" else "#resources-hero"
    contact_href = "./contact.html" if page_name != "contact" else "#contact-main"
    trust_href = "./home.html#trust" if page_name != "homepage" else "#trust"

    home_active = "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]" if page_name == "homepage" else "text-slate-700 hover:text-slate-900 hover:bg-white/60"
    about_active = "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]" if page_name == "about" else "text-slate-700 hover:text-slate-900 hover:bg-white/60"
    careers_active = "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]" if page_name == "careers" else "text-slate-700 hover:text-slate-900 hover:bg-white/60"
    resources_active = "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]" if page_name == "resources" else "text-slate-700 hover:text-slate-900 hover:bg-white/60"
    contact_active = "text-[#008BF8] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-[0_2px_0_#cbd5e1,0_4px_10px_rgba(0,139,248,0.18),inset_0_1px_0_#fff] font-bold -translate-y-[1px]" if page_name == "contact" else "text-slate-700 hover:text-slate-900 hover:bg-white/60"

    aws_logo = BASE64_ASSETS.get("aws-logo.png", "")
    azure_logo = BASE64_ASSETS.get("azure-logo.png", "")
    gcp_logo = BASE64_ASSETS.get("gcp-logo.png", "")
    favicon_logo = BASE64_ASSETS.get("logo-favicon.png", "")
    show_logo = BASE64_ASSETS.get("SAASNOVA LOGO JEN SHOW.png", "")

    new_nav = f'''<nav class="hidden lg:flex items-center gap-0.5 bg-[#e6f0fe] border border-sky-200/75 rounded-full px-3 py-1.5 shadow-[inset_0_2px_6px_rgba(15,23,42,0.08),0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md">
  <a class="px-3 py-1 text-xs rounded-full transition-all cursor-pointer {home_active}" href="{home_href}">Home</a>

  <div class="relative sn-nav-item">
    <div class="flex items-center">
      <a class="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-white/60" href="{solutions_href}">
        Solutions
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-slate-400"><path d="m6 9 6 6 6-6"></path></svg>
      </a>
    </div>
    <div class="sn-dropdown-menu w-[320px]">
      <div class="card-3d-master rounded-[24px] p-2.5 space-y-1 bg-white border border-slate-200/90 shadow-[0_16px_36px_rgba(15,23,42,0.16)]">
        <a href="{solutions_href}" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">All Solutions</div>
            <div class="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">View full execution suite</div>
          </div>
        </a>
        <a href="{home_href}#storefront" class="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-sky-50/50 via-slate-50/70 to-pink-50/40 hover:from-sky-50 hover:to-pink-50/70 border border-slate-200/60 transition-all group cursor-pointer">
          <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#070D1E] p-1 flex items-center justify-center border border-slate-900/10 shadow-xs shrink-0">
            <img src="{favicon_logo}" alt="Storefront" class="w-5 h-5 object-contain" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">Storefront</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 group-hover:text-[#008BF8] group-hover:translate-x-0.5 transition-all"><path d="m9 18 6-6-6-6"></path></svg>
            </div>
            <div class="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">Marketplace Solutions &amp; SFaaS</div>
          </div>
        </a>
        <a href="{solutions_href}" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-9 h-9 rounded-xl bg-sky-50 text-[#008BF8] border border-sky-100 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#008BF8]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-[13px] text-slate-900 group-hover:text-[#008BF8] transition-colors leading-tight">Programs</div>
            <div class="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">Ignite, SuperNova, NovaX</div>
          </div>
        </a>
        <a href="{solutions_href}" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-9 h-9 rounded-xl bg-pink-50 text-[#FA0F9C] border border-pink-100 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#FA0F9C]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-[13px] text-slate-900 group-hover:text-[#FA0F9C] transition-colors leading-tight">Fractional Operators</div>
            <div class="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">PDMaaS, PMMaaS, PALaaS</div>
          </div>
        </a>
        <a href="{solutions_href}" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-[13px] text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">GTM Ops &amp; Infra</div>
            <div class="text-[11.5px] text-slate-500 font-medium leading-tight mt-0.5">PRMaaS, PCMaaS</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <a class="px-3 py-1 text-xs rounded-full transition-all cursor-pointer {about_active}" href="{about_href}">About</a>

  <div class="relative sn-nav-item">
    <div class="flex items-center">
      <button type="button" class="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-white/60">
        Partners
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-slate-400"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    </div>
    <div class="sn-dropdown-menu w-[420px]">
      <div class="card-3d-master rounded-2xl p-4 grid grid-cols-2 gap-3 bg-white border border-slate-200/90 shadow-[0_16px_36px_rgba(15,23,42,0.16)]">
        <div>
          <div class="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Hyperscalers</div>
          <a href="{trust_href}" class="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
            <img src="{aws_logo}" alt="AWS" class="h-4 w-auto object-contain" />
            <div>
              <div class="font-bold text-slate-900">AWS Partner</div>
              <div class="text-[10.5px] text-slate-500">ACE &amp; Co-Sell</div>
            </div>
          </a>
          <a href="{trust_href}" class="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
            <img src="{azure_logo}" alt="Azure" class="h-4 w-auto object-contain" />
            <div>
              <div class="font-bold text-slate-900">Microsoft Azure</div>
              <div class="text-[10.5px] text-slate-500">MACC &amp; IP Co-Sell</div>
            </div>
          </a>
          <a href="{trust_href}" class="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
            <img src="{gcp_logo}" alt="GCP" class="h-4 w-auto object-contain" />
            <div>
              <div class="font-bold text-slate-900">Google Cloud</div>
              <div class="text-[10.5px] text-slate-500">Partner Advantage</div>
            </div>
          </a>
        </div>
        <div class="border-l border-slate-100 pl-3">
          <div class="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Featured Ecosystem</div>
          <a href="https://calendly.com/jen-saasnova" target="_blank" class="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">• <strong>SaaSiFy</strong> · Starter Bundle</a>
          <a href="{trust_href}" class="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">• <strong>WorkSpan</strong> · Co-Sell Platform</a>
          <a href="{trust_href}" class="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">• <strong>Pronix</strong> · Cloud Delivery</a>
          <a href="{trust_href}" class="block p-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">• <strong>Carahsoft</strong> · Public Sector</a>
        </div>
      </div>
    </div>
  </div>

  <a class="px-3 py-1 text-xs rounded-full transition-all cursor-pointer {resources_active}" href="{resources_href}">Resources</a>

  <a class="px-3 py-1 text-xs rounded-full transition-all cursor-pointer {careers_active}" href="{careers_href}">Careers</a>

  <div class="relative sn-nav-item">
    <div class="flex items-center">
      <a class="flex items-center gap-1 px-3 py-1 text-xs rounded-full transition-all cursor-pointer {contact_active}" href="{contact_href}">
        Contact
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 text-slate-400"><path d="m6 9 6 6 6-6"></path></svg>
      </a>
    </div>
    <div class="sn-dropdown-menu w-[300px]">
      <div class="card-3d-master rounded-2xl p-3 space-y-1 bg-white border border-slate-200/90 shadow-[0_16px_36px_rgba(15,23,42,0.16)]">
        <a href="{contact_href}" class="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-sky-50 to-pink-50/50 hover:opacity-95 transition-all group cursor-pointer border border-sky-100">
          <div class="w-8 h-8 rounded-lg bg-[#008BF8] text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div>
            <div class="font-bold text-xs text-slate-900 group-hover:text-[#008BF8]">Contact Page</div>
            <div class="text-[11px] text-slate-500">Booking, Inquiries &amp; Support</div>
          </div>
        </a>
        <a href="https://calendly.com/jen-saasnova" target="_blank" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
          </div>
          <div>
            <div class="font-bold text-xs text-slate-900 group-hover:text-[#008BF8]">Book Executive Briefing</div>
            <div class="text-[11px] text-slate-500">30-Min Strategy Call with Jen</div>
          </div>
        </a>
        <a href="mailto:support@saasnova.ai" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <div>
            <div class="font-bold text-xs text-slate-900 group-hover:text-emerald-600">Client Support</div>
            <div class="text-[11px] text-slate-500">support@saasnova.ai</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</nav>'''
    return header_html[:m.start()] + new_nav + header_html[m.end():]

def extract_balanced(html, tag, start_at=0):
    open_re = re.compile(rf'<{tag}\b', re.I)
    token_re = re.compile(rf'<{tag}\b|</{tag}>', re.I)
    m = open_re.search(html, start_at)
    if not m:
        return '', start_at
    start = m.start()
    i = m.end()
    depth = 1
    while i < len(html) and depth:
        token = token_re.search(html, i)
        if not token:
            return '', start_at
        depth += -1 if token.group(0).startswith('</') else 1
        i = token.end()
    return html[start:i], i


def extract_section_by_id(html, sid):
    m = re.search(rf'<section\b[^>]*\bid="{re.escape(sid)}"[^>]*>', html)
    if not m:
        return ''
    start = html.rfind('<section', 0, m.end())
    frag, _ = extract_balanced(html, 'section', start)
    return frag


def extract_section_without_id(html):
    for m in re.finditer(r'<section\b([^>]*)>', html):
        if re.search(r'\bid=', m.group(1)):
            continue
        frag, _ = extract_balanced(html, 'section', m.start())
        return frag
    return ''


def extract_announcement(html, header_html):
    if not header_html or 'NEW LAUNCH' not in html:
        return ''
    idx = html.find('NEW LAUNCH')
    header_at = html.find(header_html[:160])
    if header_at == -1 or idx > header_at:
        return ''
    marker = html.rfind('<div class="relative w-full border-b', 0, idx)
    if marker == -1:
        return ''
    return html[marker:header_at]


LOCAL_ROUTES = (
    ('/careers', './careers.html'),
    ('/support', './support.html'),
    ('/contact', './contact.html'),
    ('/about', './about.html'),
    ('/', './home.html'),
)


def rewrite_local_links(html):
    def repl(match):
        quote, href = match.group(1), match.group(2)
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', 'data:', '#')):
            return match.group(0)
        path, hashpart = (href.split('#', 1) + [''])[:2]
        hashpart = f'#{hashpart}' if '#' in href else ''
        query = ''
        if '?' in path:
            path, query = path.split('?', 1)
            query = '?' + query
        if len(path) > 1 and path.endswith('/'):
            path = path[:-1]
        for route, target in LOCAL_ROUTES:
            if path == route:
                return f'href={quote}{target}{query}{hashpart}{quote}'
        return match.group(0)

    return re.sub(r'href=(["\'])([^"\']+)\1', repl, html)


def inject_file_menu(header_html):
    if 'aria-label="Toggle Menu"' not in header_html:
        return header_html
    header_html = header_html.replace(
        'aria-label="Toggle Menu"',
        'id="sn-menu-toggle" aria-label="Toggle Menu"',
        1,
    )
    menu = (
        '<div id="sn-file-menu" hidden>'
        '<a href="./home.html">Home</a>'
        '<a href="./about.html">About</a>'
        '<a href="./careers.html">Careers</a>'
        '<a href="./support.html">Support</a>'
        '<a href="./contact.html">Contact</a>'
        '</div>'
    )
    return header_html.replace('</header>', menu + '</header>', 1)


def soften_long_lines(html, limit=8000):
    """Break giant HTML lines so Safari, Brave, and file previews can parse them."""
    out = []
    line_len = 0
    lower = html.lower()
    in_skip = None
    i = 0
    while i < len(html):
        if in_skip is None:
            if lower.startswith('<script', i):
                in_skip = '</script>'
            elif lower.startswith('<style', i):
                in_skip = '</style>'
        ch = html[i]
        out.append(ch)
        if ch == '\n':
            line_len = 0
        else:
            line_len += 1
            if in_skip is None and line_len >= limit and ch == '>':
                out.append('\n')
                line_len = 0
            elif in_skip == '</style>' and line_len >= limit and ch in ';}':
                out.append('\n')
                line_len = 0
        if in_skip and lower.startswith(in_skip, i):
            in_skip = None
        i += 1
    return ''.join(out)


def load_compiled_css():
    chunks = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.next', 'dev', 'static', 'chunks')
    preferred = os.path.join(chunks, '[root-of-the-server]__1dyhcxkpbuzl5._.css')
    if os.path.exists(preferred):
        css_path = preferred
    else:
        candidates = [
            os.path.join(chunks, name)
            for name in os.listdir(chunks)
            if name.endswith('.css') and 'root-of-the-server' in name
        ]
        if not candidates:
            raise SystemExit('Compiled CSS not found. Start the Next.js dev server so page styles can be inlined.')
        css_path = max(candidates, key=os.path.getmtime)
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
    return re.sub(r'@font-face\s*\{[^{}]*url\(\.\./media/[^{}]*\}', '', css)


def build_review_file(page_name, page_display_name, page_title, rendered_path, output_filename, sections_meta, seed_comments, is_in_reviews_folder=True):
    with open(rendered_path, 'r', encoding='utf-8') as f:
        rendered = f.read()

    compiled_css = load_compiled_css()

    header_html, _ = extract_balanced(rendered, 'header')
    header_html = extract_announcement(rendered, header_html) + (header_html or '')
    header_html = inject_file_menu(rewrite_local_links(header_html))

    footer_html, _ = extract_balanced(rendered, 'footer')
    footer_html = rewrite_local_links(footer_html or '')

    dialogs = []
    cursor = 0
    while True:
        frag, cursor = extract_balanced(rendered, 'dialog', cursor)
        if not frag:
            break
        dialogs.append(frag)
    page_dialog_html = '\n'.join(dialogs)

    extracted_sections = {}
    for sid, stitle, ssubtitle in sections_meta:
        if sid == 'contact-booking':
            sec_html = extract_section_without_id(rendered)
            if sec_html:
                sec_html = sec_html.replace('<section', '<section id="contact-booking"', 1)
        else:
            sec_html = extract_section_by_id(rendered, sid)
        if sec_html:
            extracted_sections[sid] = rewrite_local_links(sec_html)
        else:
            print(f"Warning: section {sid} not found in {page_name}")

    # Build seed feedback: Clean fresh start (0 approved, 0 comments)
    statuses = {"header": "pending", "footer": "pending"}
    for sid, _, _ in sections_meta:
        statuses[sid] = "pending"

    seed_feedback = {
        "reviewerName": "",
        "recipientEmail": "jen@saasnova.ai",
        "webhookUrl": "",
        "statuses": statuses,
        "comments": []
    }

    # Prepare SECTIONS metadata for client review JS
    js_sections = [{"id": "header", "num": "00", "name": "Header & Navbar"}]
    for idx, (sid, stitle, _) in enumerate(sections_meta, start=1):
        js_sections.append({"id": sid, "num": f"0{idx}" if idx < 10 else str(idx), "name": stitle})
    footer_num = len(sections_meta) + 1
    js_sections.append({"id": "footer", "num": f"0{footer_num}" if footer_num < 10 else str(footer_num), "name": "Footer & Stadium"})

    out = []
    out.append('<!DOCTYPE html>')
    out.append('<html lang="en" class="scroll-smooth inter_e798e1f6-module___wxUta__variable jetbrains_mono_528c1517-module__QxbQia__variable"><head>')
    out.append('  <meta charset="UTF-8">')
    out.append('  <meta name="viewport" content="width=device-width, initial-scale=1.0">')
    out.append(f'  <title>{page_title}</title>')
    out.append(f'  <script id="embedded-feedback" type="application/json">{json.dumps(seed_feedback)}</script>')
    out.append('  <link rel="preconnect" href="https://fonts.googleapis.com">')
    out.append('  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">')
    out.append('  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">')
    out.append('  <style>')
    out.append(':root { --font-inter: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace; }')
    out.append(compiled_css)
    out.append(REVIEW_CSS)
    out.append('  </style>')
    out.append('</head>')
    out.append('<body class="relative flex min-h-screen flex-col antialiased font-sans" style="background-color:transparent;color:#0F1923">')
    
    # Ambient Backdrop
    out.append('''  <div aria-hidden="true" class="site-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute -top-[6%] left-[6%] h-[520px] w-[52vw] max-w-[680px] rounded-full bg-gradient-to-br from-[#008BF8]/16 via-[#008BF8]/6 to-transparent blur-[110px]"></div>
    <div class="absolute top-[2%] right-[6%] h-[500px] w-[48vw] max-w-[620px] rounded-full bg-gradient-to-bl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[110px]"></div>
    <div class="absolute top-[35%] -left-[6%] h-[520px] w-[46vw] max-w-[600px] rounded-full bg-gradient-to-tr from-[#008BF8]/14 via-[#008BF8]/5 to-transparent blur-[120px]"></div>
    <div class="absolute top-[42%] -right-[6%] h-[520px] w-[46vw] max-w-[600px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/14 via-[#FA0F9C]/5 to-transparent blur-[120px]"></div>
    <div class="absolute top-[70%] left-[8%] h-[480px] w-[44vw] max-w-[560px] rounded-full bg-gradient-to-tr from-[#008BF8]/12 to-transparent blur-[120px]"></div>
    <div class="absolute top-[78%] right-[8%] h-[480px] w-[44vw] max-w-[560px] rounded-full bg-gradient-to-tl from-[#FA0F9C]/12 to-transparent blur-[120px]"></div>
    <div class="absolute inset-0 bg-grid-checks opacity-65"></div>
  </div>''')

    # Sticky Top Review Toolbar
    total_blocks = len(sections_meta) + 2
    out.append(f'''  <!-- Top Sticky Client Review Toolbar -->
  <div class="sn-topbar">
    <div class="sn-topbar-inner">
      <div class="sn-topbar-left">
        <span class="sn-badge">Client Review</span>
        <span style="font-size: 13.5px; font-weight: 800;">SaaSNova · {page_display_name}</span>
        <span id="sn-progress" class="sn-progress">0 / {total_blocks} Approved · 0 Comments</span>
      </div>

      <div class="sn-topbar-right">
        <input id="sn-reviewer-name" type="text" class="sn-input" placeholder="Your name (e.g. Jen)" aria-label="Reviewer Name">
        <button type="button" id="sn-btn-wireframe" class="sn-btn" title="Toggle grayscale wireframe inspection">Wireframe View</button>
        <button type="button" id="sn-btn-drawer" class="sn-btn"><span>💬 Comments (<span id="sn-tb-count">0</span>)</span></button>
        <button type="button" id="sn-btn-export" class="sn-btn sn-btn-primary">📤 Send Feedback</button>
        <button type="button" id="sn-btn-print" class="sn-btn">🖨 PDF</button>
      </div>
    </div>

    <div class="sn-jumpbar">
      <div class="sn-jumpbar-inner">
        <a href="#block-header" class="sn-jumplink">00 Navbar</a>''')

    for idx, (sid, stitle, _) in enumerate(sections_meta, start=1):
        num_str = f"0{idx}" if idx < 10 else str(idx)
        out.append(f'        <a href="#block-{sid}" class="sn-jumplink">{num_str} {stitle}</a>')

    footer_num_str = f"0{footer_num}" if footer_num < 10 else str(footer_num)
    out.append(f'        <a href="#block-footer" class="sn-jumplink">{footer_num_str} Footer</a>')
    out.append('''      </div>
    </div>
  </div>''')

    # 00 Navbar & Review Card
    out.append('  <!-- 00 · NAVBAR -->')
    out.append('  <div id="block-header" class="sn-block-anchor sn-design-slot" style="padding-top: 14px; padding-bottom: 6px;">')
    out.append(f'    {header_html}')
    out.append('  </div>')
    out.append('  <div class="sn-comment-wrap"><div class="sn-comment-card" data-sn-panel="header"></div></div>')

    # Sections & Docked Review Cards
    for idx, (sid, stitle, _) in enumerate(sections_meta, start=1):
        num_str = f"0{idx}" if idx < 10 else str(idx)
        out.append(f'  <!-- {num_str} · {stitle.upper()} -->')
        out.append(f'  <div id="block-{sid}" class="sn-block-anchor sn-design-slot">')
        out.append(f'    {extracted_sections.get(sid, "")}')
        out.append('  </div>')
        out.append(f'  <div class="sn-comment-wrap"><div class="sn-comment-card" data-sn-panel="{sid}"></div></div>')

    # Footer & Review Card
    out.append(f'  <!-- {footer_num_str} · FOOTER -->')
    out.append('  <div id="block-footer" class="sn-block-anchor sn-design-slot">')
    out.append(f'    {footer_html}')
    out.append('  </div>')
    out.append('  <div class="sn-comment-wrap"><div class="sn-comment-card" data-sn-panel="footer"></div></div>')

    # Bottom Finish Bar
    out.append(f'''  <!-- Bottom Finish & Export Bar -->
  <div class="sn-comment-wrap sn-final-share" style="margin-top: 12px; margin-bottom: 48px;">
    <div class="sn-comment-card" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;">
      <div>
        <div style="font-size:15px; font-weight:800; color:#0f172a;">Finished reviewing? Share your feedback with the team</div>
        <div id="sn-bottom-status" style="font-size:13px; color:#475569;">0 / {total_blocks} sections approved · 0 total comments recorded</div>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        <button type="button" id="sn-quick-copy" class="sn-status-btn" style="background:#ffffff;">📋 Copy Feedback Summary</button>
        <button type="button" id="sn-quick-html" class="sn-status-btn" style="background:#ffffff;">💾 Save Reviewed .HTML</button>
        <button type="button" id="sn-bottom-export" class="sn-post-btn">📤 More Send Options</button>
      </div>
    </div>
  </div>''')

    # Injected page dialog (e.g. Careers application modal)
    if page_dialog_html:
        out.append(f'  <!-- Injected Page Dialog Modal -->\n  {page_dialog_html}')

    # Sliding Comments Drawer
    out.append('''  <!-- Sliding Review Comments Drawer -->
  <aside id="sn-drawer" class="sn-drawer" aria-label="All Comments Drawer">
    <div style="padding:14px 16px; background:#f8fafc; border-bottom:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between;">
      <div>
        <strong style="font-size:14px; color:#0f172a;">All Review Comments (<span id="sn-drawer-count">0</span>)</strong>
        <div style="font-size:11.5px; color:#64748b;">Auto-saved in browser</div>
      </div>
      <button type="button" id="sn-drawer-close" class="sn-status-btn">✕ Close</button>
    </div>
    <div id="sn-drawer-list" style="flex:1; overflow-y:auto; scrollbar-gutter:stable; overscroll-behavior:contain; padding:14px; display:flex; flex-direction:column; gap:10px;"></div>
    <div style="padding:12px 14px; border-top:1px solid #e2e8f0; background:#f8fafc;">
      <button type="button" id="sn-drawer-export" class="sn-post-btn" style="width:100%;">📤 Send / Export Feedback</button>
    </div>
  </aside>

  <!-- Export Feedback Modal Dialog -->
  <dialog id="sn-export-dialog" class="sn-dialog" closedby="any" aria-labelledby="sn-export-title">
    <div style="padding:14px 18px; background:#f8fafc; border-bottom:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between;">
      <h2 id="sn-export-title" style="margin:0; font-size:15px; font-weight:800;">Send Feedback Back to Team</h2>
      <button type="button" id="sn-export-close" class="sn-status-btn">✕</button>
    </div>
    <div style="padding:16px 18px; display:flex; flex-direction:column; gap:12px; max-height:74dvh; overflow-y:auto; overscroll-behavior:contain;">
      <p style="margin:0; font-size:13px; color:#475569;">Pick any option below to share your approvals and section comments back with the team:</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:10px;">
        <div style="border:1px solid #cbd5e1; border-radius:12px; padding:12px; background:#f8fafc; display:flex; flex-direction:column; gap:8px;">
          <strong style="font-size:13px;">1. Copy Feedback Summary</strong>
          <p style="margin:0; font-size:12px; color:#64748b;">Copies a clean Markdown summary to paste in Slack, WhatsApp, or Email.</p>
          <button type="button" id="sn-copy-md" class="sn-post-btn" style="width:100%;">📋 Copy Summary</button>
        </div>
        <div style="border:1px solid #cbd5e1; border-radius:12px; padding:12px; background:#f8fafc; display:flex; flex-direction:column; gap:8px;">
          <strong style="font-size:13px;">2. Download Feedback File</strong>
          <p style="margin:0; font-size:12px; color:#64748b;">Downloads a .md or .json file to send back directly.</p>
          <div style="display:flex; gap:6px;">
            <button type="button" id="sn-dl-md" class="sn-status-btn" style="flex:1; background:#fff;">⬇ .MD</button>
            <button type="button" id="sn-dl-json" class="sn-status-btn" style="flex:1; background:#fff;">⬇ .JSON</button>
          </div>
        </div>
        <div style="border:1px solid #cbd5e1; border-radius:12px; padding:12px; background:#f8fafc; display:flex; flex-direction:column; gap:8px;">
          <strong style="font-size:13px;">3. Save Annotated HTML Copy</strong>
          <p style="margin:0; font-size:12px; color:#64748b;">Saves a fresh .html file with all comments embedded inside.</p>
          <button type="button" id="sn-dl-html" class="sn-status-btn" style="width:100%; background:#fff;">💾 Download Reviewed .HTML</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:4px; margin-top:4px;">
        <label for="sn-export-preview" style="font-size:12px; font-weight:700;">Preview of Feedback Summary</label>
        <textarea id="sn-export-preview" rows="7" readonly="" style="padding:10px; border-radius:10px; border:1px solid #cbd5e1; background:#f8fafc; font-family:var(--font-mono), monospace; font-size:11.5px;"></textarea>
      </div>
    </div>
  </dialog>

  <div id="sn-toast" class="sn-toast" role="status" aria-live="polite"></div>''')

    # Comprehensive Client Review Controller JS
    storage_key = f"saasnova_{page_name}_feedback_fresh_v5"
    out.append(f'''  <script>
    (function () {{
      const INITIAL_HTML = "<!DOCTYPE html>\\n" + document.documentElement.outerHTML;
      const STORAGE_KEY = "{storage_key}";
      const SECTIONS = {json.dumps(js_sections)};

      /* ── State Management ── */
      function loadState() {{
        let embedded = {{ reviewerName: "", recipientEmail: "jen@saasnova.ai", webhookUrl: "", statuses: {{}}, comments: [] }};
        try {{
          const el = document.getElementById("embedded-feedback");
          if (el && el.textContent.trim()) embedded = Object.assign(embedded, JSON.parse(el.textContent));
        }} catch (e) {{}}
        let local = null;
        try {{
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) local = JSON.parse(raw);
        }} catch (e) {{}}
        if (local && ((local.comments && local.comments.length) || Object.keys(local.statuses || {{}}).length || local.reviewerName)) {{
          return Object.assign(embedded, local);
        }}
        return embedded;
      }}

      const state = loadState();
      const draftTagBySection = {{}};

      function saveState() {{
        try {{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }} catch (e) {{}}
      }}

      function showToast(msg) {{
        const t = document.getElementById("sn-toast");
        if (!t) return;
        t.textContent = msg;
        t.classList.add("is-visible");
        clearTimeout(showToast._id);
        showToast._id = setTimeout(() => t.classList.remove("is-visible"), 2400);
      }}

      function esc(s) {{
        return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }}

      function renderFeedback() {{
        const approvedCount = SECTIONS.filter((s) => state.statuses[s.id] === "approved").length;
        const total = state.comments.length;
        const progEl = document.getElementById("sn-progress");
        if (progEl) progEl.textContent = approvedCount + " / " + SECTIONS.length + " Approved · " + total + " Comments";
        const tbCount = document.getElementById("sn-tb-count");
        if (tbCount) tbCount.textContent = String(total);
        const drCount = document.getElementById("sn-drawer-count");
        if (drCount) drCount.textContent = String(total);
        const btmStatus = document.getElementById("sn-bottom-status");
        if (btmStatus) btmStatus.textContent = approvedCount + " / " + SECTIONS.length + " sections approved · " + total + " total comments recorded";

        SECTIONS.forEach((sec) => {{
          const panel = document.querySelector('[data-sn-panel="' + sec.id + '"]');
          if (!panel) return;
          const st = state.statuses[sec.id] || "pending";
          const secComments = state.comments.filter((c) => c.sectionId === sec.id);
          const activeTag = draftTagBySection[sec.id] || "Copy";

          const listHtml = secComments.length
            ? secComments.map((c) => {{
                const num = state.comments.indexOf(c) + 1;
                return (
                  '<div class="sn-c-item">' +
                    '<div class="sn-c-item-top">' +
                      '<div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">' +
                        '<span class="sn-c-tag" data-tag="' + esc(c.tag) + '">#' + num + ' · ' + esc(c.tag) + '</span>' +
                        '<strong style="font-size:12px; color:#0f172a;">' + esc(c.author || "Client") + '</strong>' +
                        '<span style="font-size:11px; color:#64748b;">' + (c.createdAt ? new Date(c.createdAt).toLocaleTimeString([], {{ hour: "2-digit", minute: "2-digit" }}) : "") + '</span>' +
                      '</div>' +
                      '<button type="button" class="sn-del-btn" data-sn-del="' + esc(c.id) + '">Remove</button>' +
                    '</div>' +
                    '<p style="margin:0; font-size:12.5px; color:#1e293b; line-height:1.45;">' + esc(c.text) + '</p>' +
                  '</div>'
                );
              }}).join("")
            : '<div class="sn-empty">No comments on this section yet. Add feedback on copy, layout, or design on the right.</div>';

          panel.innerHTML =
            '<div class="sn-comment-head">' +
              '<div class="sn-comment-title">' +
                '<span class="sn-sec-num">' + sec.num + '</span>' +
                '<span>Feedback · ' + esc(sec.name) + '</span>' +
                '<span class="sn-count-pill">' + secComments.length + '</span>' +
              '</div>' +
              '<div class="sn-status-group">' +
                '<button type="button" class="sn-status-btn ' + (st === "approved" ? "is-selected" : "") + '" data-sn-status="' + sec.id + '" data-val="approved">✓ Approve Section</button>' +
                '<button type="button" class="sn-status-btn ' + (st === "changes" ? "is-selected" : "") + '" data-sn-status="' + sec.id + '" data-val="changes">✎ Request Changes</button>' +
                '<button type="button" class="sn-status-btn ' + (st === "pending" ? "is-selected" : "") + '" data-sn-status="' + sec.id + '" data-val="pending">Pending</button>' +
              '</div>' +
            '</div>' +
            '<div class="sn-comment-grid">' +
              '<div class="sn-comment-list">' + listHtml + '</div>' +
              '<form class="sn-composer" data-sn-form="' + sec.id + '">' +
                '<div class="sn-tag-row">' +
                  ["Copy", "Design", "Layout", "Question", "Approval"].map((tag) =>
                    '<button type="button" class="sn-tag-pick ' + (activeTag === tag ? "is-active" : "") + '" data-sn-tag="' + sec.id + '" data-tag-val="' + tag + '">' + tag + '</button>'
                  ).join("") +
                '</div>' +
                '<div class="sn-composer-row">' +
                  '<textarea class="sn-textarea" placeholder="Add a comment for ' + esc(sec.name) + '..." required></textarea>' +
                  '<button type="submit" class="sn-post-btn">Post Comment</button>' +
                '</div>' +
              '</form>' +
            '</div>';
        }});

        // Update Drawer
        const drawerList = document.getElementById("sn-drawer-list");
        if (drawerList) {{
          if (!state.comments.length) {{
            drawerList.innerHTML = '<div class="sn-empty" style="text-align:center;">No comments yet. Scroll to any section and type directly in its feedback box.</div>';
          }} else {{
            drawerList.innerHTML = state.comments.map((c, idx) => {{
              const sec = SECTIONS.find((s) => s.id === c.sectionId);
              return (
                '<div class="sn-c-item">' +
                  '<div class="sn-c-item-top">' +
                    '<span class="sn-c-tag" data-tag="' + esc(c.tag) + '">#' + (idx + 1) + ' · ' + esc(c.tag) + '</span>' +
                    '<button type="button" class="sn-del-btn" data-sn-del="' + esc(c.id) + '">Remove</button>' +
                  '</div>' +
                  '<div style="font-size:12px; font-weight:800; color:#0f172a;">' + esc(sec ? sec.num + " · " + sec.name : c.sectionId) + '</div>' +
                  '<p style="margin:0; font-size:12.5px; color:#1e293b;">' + esc(c.text) + '</p>' +
                  '<div style="font-size:11px; color:#64748b;">By ' + esc(c.author || "Client") + '</div>' +
                '</div>'
              );
            }}).join("");
          }}
        }}

        // Bind interactive status buttons
        document.querySelectorAll("[data-sn-status]").forEach((btn) => {{
          btn.addEventListener("click", () => {{
            state.statuses[btn.dataset.snStatus] = btn.dataset.val;
            saveState();
            renderFeedback();
            showToast("Section status updated");
          }});
        }});

        // Bind tag selectors
        document.querySelectorAll("[data-sn-tag]").forEach((btn) => {{
          btn.addEventListener("click", () => {{
            draftTagBySection[btn.dataset.snTag] = btn.dataset.tagVal;
            const row = btn.closest(".sn-tag-row");
            if (row) {{
              row.querySelectorAll(".sn-tag-pick").forEach((r) => r.classList.remove("is-active"));
              btn.classList.add("is-active");
            }}
          }});
        }});

        // Bind form posts
        document.querySelectorAll("[data-sn-form]").forEach((form) => {{
          form.addEventListener("submit", (e) => {{
            e.preventDefault();
            const secId = form.dataset.snForm;
            const ta = form.querySelector("textarea");
            const text = (ta ? ta.value : "").trim();
            if (!text) return;
            state.comments.push({{
              id: "c_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
              sectionId: secId,
              tag: draftTagBySection[secId] || "Copy",
              author: state.reviewerName || "Client",
              text: text,
              createdAt: new Date().toISOString()
            }});
            saveState();
            renderFeedback();
            showToast("Comment added");
          }});
        }});

        // Bind comment deletion
        document.querySelectorAll("[data-sn-del]").forEach((btn) => {{
          btn.addEventListener("click", () => {{
            state.comments = state.comments.filter((c) => c.id !== btn.dataset.snDel);
            saveState();
            renderFeedback();
            showToast("Comment removed");
          }});
        }});

        updateExportPreview();
      }}

      function buildMarkdownSummary() {{
        const lines = [];
        lines.push("# SaaSNova {page_display_name} — Client Feedback");
        lines.push("Reviewer: " + (state.reviewerName || "Client Team"));
        lines.push("Exported: " + new Date().toISOString());
        lines.push("");
        lines.push("## Section Approval Status");
        SECTIONS.forEach((s) => {{
          const st = state.statuses[s.id] || "pending";
          const icon = st === "approved" ? "[APPROVED]" : st === "changes" ? "[NEEDS CHANGES]" : "[PENDING]";
          lines.push("- " + icon + " " + s.num + " · " + s.name);
        }});
        lines.push("");
        lines.push("## Comments (" + state.comments.length + ")");
        if (!state.comments.length) {{
          lines.push("_No comments added._");
        }} else {{
          state.comments.forEach((c, idx) => {{
            const sec = SECTIONS.find((s) => s.id === c.sectionId);
            lines.push((idx + 1) + ". **" + (sec ? sec.num + " · " + sec.name : c.sectionId) + "** [" + c.tag + "] — " + c.text + " _(by " + (c.author || "Client") + ")_");
          }});
        }}
        return lines.join("\\n");
      }}

      function updateExportPreview() {{
        const preview = document.getElementById("sn-export-preview");
        if (preview) preview.value = buildMarkdownSummary();
      }}

      function downloadFile(filename, content, mime) {{
        const blob = new Blob([content], {{ type: mime }});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
      }}

      // Init reviewer name input
      const nameInput = document.getElementById("sn-reviewer-name");
      if (nameInput) {{
        nameInput.value = state.reviewerName || "";
        nameInput.addEventListener("input", () => {{
          state.reviewerName = nameInput.value.trim();
          saveState();
          updateExportPreview();
        }});
      }}

      // Wireframe Toggle
      const wfBtn = document.getElementById("sn-btn-wireframe");
      if (wfBtn) {{
        wfBtn.addEventListener("click", () => {{
          const active = document.body.classList.toggle("sn-wireframe-mode");
          wfBtn.classList.toggle("is-active", active);
        }});
      }}

      // Drawer
      const drawer = document.getElementById("sn-drawer");
      const btnDrawer = document.getElementById("sn-btn-drawer");
      const drawerClose = document.getElementById("sn-drawer-close");
      if (btnDrawer && drawer) btnDrawer.addEventListener("click", () => drawer.classList.add("is-open"));
      if (drawerClose && drawer) drawerClose.addEventListener("click", () => drawer.classList.remove("is-open"));

      // Print
      const printBtn = document.getElementById("sn-btn-print");
      if (printBtn) printBtn.addEventListener("click", () => window.print());

      // Export Dialog
      const exportDlg = document.getElementById("sn-export-dialog");
      const openExport = () => {{
        updateExportPreview();
        if (exportDlg) exportDlg.showModal();
      }};

      const btnExport = document.getElementById("sn-btn-export");
      const btmExport = document.getElementById("sn-bottom-export");
      const drwExport = document.getElementById("sn-drawer-export");
      const expClose = document.getElementById("sn-export-close");

      if (btnExport) btnExport.addEventListener("click", openExport);
      if (btmExport) btmExport.addEventListener("click", openExport);
      if (drwExport) drwExport.addEventListener("click", () => {{
        if (drawer) drawer.classList.remove("is-open");
        openExport();
      }});
      if (expClose && exportDlg) expClose.addEventListener("click", () => exportDlg.close());

      // Copy Action
      const copyAction = async () => {{
        const md = buildMarkdownSummary();
        try {{
          await navigator.clipboard.writeText(md);
          showToast("Feedback summary copied!");
        }} catch (err) {{
          openExport();
          const p = document.getElementById("sn-export-preview");
          if (p) {{ p.select(); document.execCommand("copy"); }}
          showToast("Feedback summary copied!");
        }}
      }};
      const copyBtn = document.getElementById("sn-copy-md");
      const qkCopy = document.getElementById("sn-quick-copy");
      if (copyBtn) copyBtn.addEventListener("click", copyAction);
      if (qkCopy) qkCopy.addEventListener("click", copyAction);

      // Download Actions
      const dlHtmlAction = () => {{
        const safeJson = JSON.stringify(state).replace(/<\\//g, "<\\\\/");
        const updated = INITIAL_HTML.replace(
          /<script id="embedded-feedback" type="application\\/json">[\\s\\S]*?<\\/script>/,
          '<script id="embedded-feedback" type="application/json">' + safeJson + '</' + 'script>'
        );
        downloadFile("saasnova-{page_name}-reviewed.html", updated, "text/html;charset=utf-8");
        showToast("Saved reviewed HTML copy!");
      }};
      const dlHtml = document.getElementById("sn-dl-html");
      const qkHtml = document.getElementById("sn-quick-html");
      if (dlHtml) dlHtml.addEventListener("click", dlHtmlAction);
      if (qkHtml) qkHtml.addEventListener("click", dlHtmlAction);

      const dlMd = document.getElementById("sn-dl-md");
      if (dlMd) dlMd.addEventListener("click", () => {{
        downloadFile("saasnova-{page_name}-feedback.md", buildMarkdownSummary(), "text/markdown;charset=utf-8");
        showToast("Downloaded .md feedback file");
      }});

      const dlJson = document.getElementById("sn-dl-json");
      if (dlJson) dlJson.addEventListener("click", () => {{
        downloadFile("saasnova-{page_name}-feedback.json", JSON.stringify(state, null, 2), "application/json;charset=utf-8");
        showToast("Downloaded .json feedback file");
      }});

      // Prevent non-anchor dummy links from unloading review page
      document.querySelectorAll(".sn-design-slot a").forEach((a) => {{
        const href = a.getAttribute("href") || "";
        if (!href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("#") && !href.includes(".html")) {{
          a.addEventListener("click", (e) => e.preventDefault());
        }}
      }});

      renderFeedback();

      (function placeReviewScroll() {{
        var bar = document.querySelector(".sn-topbar");
        var header = document.querySelector("header");
        function apply() {{
          var chrome = bar ? Math.ceil(bar.getBoundingClientRect().height) : 112;
          document.documentElement.style.setProperty("--sn-sticky-top", chrome + "px");
          if (header && !header.getAttribute("data-sn-fixed")) {{
            var spacer = document.createElement("div");
            spacer.style.height = header.offsetHeight + "px";
            spacer.setAttribute("data-sn-nav-spacer", "1");
            header.parentNode.insertBefore(spacer, header);
            header.setAttribute("data-sn-fixed", "1");
          }}
        }}
        apply();
        window.addEventListener("resize", apply);
      }})();

      const menuBtn = document.getElementById("sn-menu-toggle");
      const fileMenu = document.getElementById("sn-file-menu");
      if (menuBtn && fileMenu) {{
        menuBtn.addEventListener("click", function (event) {{
          event.preventDefault();
          event.stopPropagation();
          if (fileMenu.hasAttribute("hidden")) fileMenu.removeAttribute("hidden");
          else fileMenu.setAttribute("hidden", "");
        }});
        document.addEventListener("click", function (event) {{
          if (!fileMenu.contains(event.target) && event.target !== menuBtn) {{
            fileMenu.setAttribute("hidden", "");
          }}
        }});
      }}
    }})();
  </script>''')

    # Page-specific interactive JS
    if page_name == "careers":
        out.append('''  <script>
    // Interactive Bento Roles toggle & Dialog
    (function initCareersInteractive() {
      const roleTabs = document.querySelectorAll("button[data-role-tab]");
      const roleDossiers = document.querySelectorAll("div[data-role-dossier]");
      const emptyState = document.getElementById("role-empty-state");
      let activeRoleId = null;

      function updateRoles(roleId) {
        activeRoleId = roleId;

        roleTabs.forEach(function(b) {
          const rid = b.getAttribute("data-role-tab");
          const shell = b.firstElementChild;
          const titleRow = shell ? shell.querySelector("div") : null;
          const titleSpan = titleRow ? titleRow.querySelector("span") : b.querySelector("span");
          const pinBadge = b.querySelector(".font-mono");
          const pinIcon = b.querySelector("svg");
          let dot = titleRow ? titleRow.querySelector("[data-sn-role-dot]") : null;

          if (rid === activeRoleId) {
            b.className = "w-full text-left rounded-2xl cursor-pointer h-[112px] sm:h-[122px] p-[2px] bg-gradient-to-r from-[#FA0F9C] via-[#008BF8] to-[#008BF8] shadow-[0_4px_0_#bae6fd]";
            if (shell) shell.className = "w-full h-full bg-white rounded-[14px] p-3.5 sm:p-[18px] flex flex-col justify-between gap-2.5";
            if (titleSpan) titleSpan.className = "font-bold tracking-tight leading-snug line-clamp-2 text-xs sm:text-[13.5px] text-slate-900 font-extrabold";
            if (pinBadge) {
              pinBadge.className = "inline-flex items-center gap-1 font-mono text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full border truncate max-w-full bg-white text-slate-800 font-bold shadow-2xs";
              pinBadge.style.borderColor = "rgba(0,139,248,0.3)";
            }
            if (pinIcon) pinIcon.setAttribute("class", "lucide lucide-map-pin w-2.5 h-2.5 shrink-0 text-[#008BF8]");
            if (titleRow && !dot) {
              dot = document.createElement("span");
              dot.setAttribute("data-sn-role-dot", "1");
              dot.className = "w-2 h-2 rounded-full bg-[#008BF8] shrink-0 mt-1";
              dot.style.boxShadow = "0 0 6px #008BF8";
              titleRow.appendChild(dot);
            }
          } else {
            b.className = "w-full text-left rounded-2xl cursor-pointer h-[112px] sm:h-[122px] card-3d bg-white border border-slate-200/90 hover:border-slate-300 p-4 sm:p-5 flex flex-col justify-between gap-2.5";
            if (shell) shell.className = "w-full h-full flex flex-col justify-between gap-2.5";
            if (titleSpan) titleSpan.className = "font-bold tracking-tight leading-snug line-clamp-2 text-xs sm:text-[13.5px] text-slate-700";
            if (pinBadge) {
              pinBadge.className = "inline-flex items-center gap-1 font-mono text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full border truncate max-w-full bg-slate-100 text-slate-600 font-semibold border-slate-200";
              pinBadge.style.borderColor = "";
            }
            if (pinIcon) pinIcon.setAttribute("class", "lucide lucide-map-pin w-2.5 h-2.5 shrink-0 text-slate-500");
            if (dot) dot.remove();
          }
        });

        if (emptyState) {
          emptyState.style.display = activeRoleId ? "none" : "block";
        }

        roleDossiers.forEach(function(dossier) {
          const rid = dossier.getAttribute("data-role-dossier");
          if (rid === activeRoleId) {
            dossier.style.display = "block";
            dossier.classList.remove("hidden");
          } else {
            dossier.style.display = "none";
            dossier.classList.add("hidden");
          }
        });
      }

      roleTabs.forEach(function(btn) {
        btn.addEventListener("click", function() {
          const roleId = btn.getAttribute("data-role-tab");
          updateRoles(activeRoleId === roleId ? null : roleId);
        });
      });

      // Default to NO card chosen
      updateRoles(null);

      // Dialog application
      const applyModal = document.querySelector("dialog");
      if (applyModal) {
        document.querySelectorAll("button").forEach(function(btn) {
          if ((btn.textContent || "").includes("Apply Now") || (btn.textContent || "").includes("Open Application")) {
            btn.addEventListener("click", function(e) {
              if (btn.closest("dialog")) return;
              e.preventDefault();
              applyModal.showModal();
            });
          }
        });
        applyModal.querySelectorAll("button").forEach(function(btn) {
          const txt = (btn.textContent || "").trim();
          if (txt === "Cancel" || txt === "Done" || btn.getAttribute("aria-label") === "Close dialog") {
            btn.addEventListener("click", function(e) {
              e.preventDefault();
              applyModal.close();
            });
          }
        });
      }
    })();
  </script>''')
    elif page_name == "about":
        out.append('''  <script>
    // Interactive 3D Company Stars Expand/Collapse with Stable Non-Jumpy Motion
    (function initStars() {
      const desktopCards = document.querySelectorAll("#stars [data-star-desktop-id]");
      if (desktopCards.length > 0) {
        let hoverTimer = null;

        function setActiveCard(activeCard) {
          desktopCards.forEach(function(c) {
            const openView = c.querySelector(".star-open-view");
            const closedView = c.querySelector(".star-closed-view");
            c.style.transition = "flex 420ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease-out, border-color 300ms ease-out, background 300ms ease-out";

            if (c === activeCard) {
              c.style.flex = "5.5";
              c.style.background = "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 45%, rgba(0, 139, 248, 0.12) 100%)";
              c.style.borderColor = "#008BF8";
              c.style.boxShadow = "0 16px 36px rgba(0,139,248,0.14), 0 2px 0 #93c5fd";
              c.style.padding = "1.25rem 1.5rem";
              if (openView) {
                openView.style.display = "flex";
                openView.classList.remove("hidden", "opacity-0", "pointer-events-none");
                openView.classList.add("flex", "opacity-100");
              }
              if (closedView) {
                closedView.style.display = "none";
                closedView.classList.remove("flex", "opacity-100");
                closedView.classList.add("hidden", "opacity-0", "pointer-events-none");
              }
            } else {
              c.style.flex = "1";
              c.style.background = "#FFFFFF";
              c.style.borderColor = "rgba(226, 232, 240, 0.9)";
              c.style.boxShadow = "0 2px 4px rgba(15,23,42,0.03)";
              c.style.padding = "0.5rem 0.625rem";
              if (openView) {
                openView.style.display = "none";
                openView.classList.remove("flex", "opacity-100");
                openView.classList.add("hidden", "opacity-0", "pointer-events-none");
              }
              if (closedView) {
                closedView.style.display = "flex";
                closedView.classList.remove("hidden", "opacity-0", "pointer-events-none");
                closedView.classList.add("flex", "opacity-100");
              }
            }
          });
        }

        desktopCards.forEach(function(card) {
          card.addEventListener("mouseenter", function() {
            clearTimeout(hoverTimer);
            hoverTimer = setTimeout(function() {
              setActiveCard(card);
            }, 75);
          });
          card.addEventListener("click", function() {
            clearTimeout(hoverTimer);
            setActiveCard(card);
          });
        });

        // Activate Rohith (the last card as in user screenshot) by default
        setActiveCard(desktopCards[desktopCards.length - 1]);
      }

      // Mobile / Tablet touch interaction
      const mobileCards = document.querySelectorAll("#stars [data-star-mobile-id]");
      mobileCards.forEach(function(mCard) {
        mCard.addEventListener("click", function() {
          const openDiv = mCard.querySelector(".star-mobile-open");
          const badge = mCard.querySelector(".star-mobile-badge");
          const isCurrentlyOpen = openDiv && !openDiv.classList.contains("hidden");

          mobileCards.forEach(function(c) {
            const o = c.querySelector(".star-mobile-open");
            const b = c.querySelector(".star-mobile-badge");
            if (o) o.classList.add("hidden");
            if (b) { b.classList.remove("inline-block"); b.classList.add("hidden"); }
            c.classList.remove("-translate-y-1");
          });

          if (!isCurrentlyOpen && openDiv) {
            openDiv.classList.remove("hidden");
            if (badge) { badge.classList.remove("hidden"); badge.classList.add("inline-block"); }
            mCard.classList.add("-translate-y-1");
          }
        });
      });
    })();
  </script>''')
    elif page_name == "contact":
        out.append('''  <script>
    (function initContactForm() {
      var form = document.querySelector("#send-message form");
      if (!form) return;
      var shell = form.parentElement;
      var serviceBtn = Array.prototype.find.call(form.querySelectorAll("button"), function(btn) {
        return (btn.textContent || "").indexOf("Service Inquiry") !== -1;
      });
      var partnerBtn = Array.prototype.find.call(form.querySelectorAll("button"), function(btn) {
        return (btn.textContent || "").indexOf("Partnership Inquiry") !== -1;
      });
      var serviceOn = "py-2.5 px-3 rounded-xl font-bold text-xs sm:text-[13px] transition-all cursor-pointer bg-white text-[#008BF8] shadow-[0_2px_8px_rgba(0,139,248,0.18),0_1px_0_#cbd5e1]";
      var serviceOff = "py-2.5 px-3 rounded-xl font-bold text-xs sm:text-[13px] transition-all cursor-pointer text-slate-600 hover:text-slate-900";
      var fieldClass = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 text-xs sm:text-sm text-slate-900";
      var fieldStyle = "box-shadow:inset 0 1px 2px rgba(15,23,42,0.06), 0 2px 0 #cbd5e1";

      function labelBlock(text) {
        var labels = form.querySelectorAll("label");
        for (var i = 0; i < labels.length; i++) {
          if ((labels[i].textContent || "").indexOf(text) !== -1) return labels[i].parentElement;
        }
        return null;
      }
      function setLead(label, text) {
        if (!label || !label.firstChild) return;
        label.firstChild.nodeValue = text + " ";
      }
      function setShown(el, on) {
        if (!el) return;
        el.hidden = !on;
        el.style.display = on ? "" : "none";
        el.querySelectorAll("input, select, textarea").forEach(function(field) {
          if (field.type === "button") return;
          if (on) {
            if (field.getAttribute("data-sn-req") === "1") field.required = true;
          } else if (field.required) {
            field.setAttribute("data-sn-req", "1");
            field.required = false;
          }
        });
      }

      var cloudBlock = labelBlock("Target Cloud Marketplace");
      if (cloudBlock && cloudBlock.parentElement && (cloudBlock.parentElement.className || "").indexOf("grid") !== -1) {
        cloudBlock = cloudBlock.parentElement;
      }
      var serviceBlock = labelBlock("Primary Service of Interest");
      var companyLabel = labelBlock("Company Name");
      var companyLabelEl = companyLabel ? companyLabel.querySelector("label") : null;
      var identityRow = companyLabel ? companyLabel.parentElement : null;
      var messageLabel = labelBlock("Message Details");
      var messageLabelEl = messageLabel ? messageLabel.querySelector("label") : null;
      var message = form.querySelector("textarea[name='message']");
      var email = form.querySelector("input[name='email']");
      var submitLabel = form.querySelector("button[type='submit'] span");

      var partnerMount = document.createElement("div");
      partnerMount.setAttribute("data-sn-partner", "1");
      partnerMount.className = "space-y-4";
      partnerMount.innerHTML =
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
          '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700">Partner Organization Type <span class="text-[#FA0F9C] ml-1">*</span></label>' +
          '<select required name="partnerOrgType" class="' + fieldClass + ' cursor-pointer" style="' + fieldStyle + '">' +
            '<option value="" disabled selected>Select partner organization type...</option>' +
            '<option>Cloud Alliance / Hyperscaler Team</option><option>System Integrator (SI / GSI)</option><option>ISV / SaaS Technology Partner</option><option>Channel / Reseller Partner</option><option>Other Strategic Partner</option>' +
          "</select></div>" +
          '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700">Target Ecosystem <span class="text-[#FA0F9C] ml-1">*</span></label>' +
          '<select required name="partnerEcosystem" class="' + fieldClass + ' cursor-pointer" style="' + fieldStyle + '">' +
            '<option value="" disabled selected>Select target cloud ecosystem...</option>' +
            "<option>AWS Ecosystem</option><option>Azure Ecosystem</option><option>Google Cloud Ecosystem</option><option>Multi-Cloud Ecosystem</option>" +
          "</select></div></div>" +
        '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700">Partnership Focus Area <span class="text-[#FA0F9C] ml-1">*</span></label>' +
        '<select required name="partnerFocus" class="' + fieldClass + ' cursor-pointer" style="' + fieldStyle + '">' +
          '<option value="" disabled selected>Select partnership focus...</option>' +
          "<option>Joint Co-Sell Collaboration</option><option>Marketplace / Tech Integration</option><option>Referral &amp; Co-Marketing</option><option>Strategic Alliance</option><option>General Partnership Inquiry</option>" +
        "</select></div>";

      var hyperMount = document.createElement("div");
      hyperMount.setAttribute("data-sn-hyper", "1");
      hyperMount.className = "space-y-4";
      hyperMount.innerHTML =
        '<div data-sn-hyper-banner class="flex items-center justify-between p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 font-semibold">' +
          '<span>Hyperscaler Field Co-Sell Registration Mode</span><span data-sn-clouds class="text-[10px] font-mono uppercase bg-white px-2 py-0.5 rounded-md border border-sky-200 text-[#008BF8] font-bold">AWS</span></div>' +
        '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700 flex items-center justify-between"><span>Cloud Hyperscaler Alignment <span class="text-[#FA0F9C]">*</span></span><span class="text-[10px] font-mono font-bold text-[#008BF8] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">Multi-Cloud Selectable</span></label>' +
          '<div class="grid grid-cols-3 gap-2.5" data-sn-cloud-picks></div></div>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
          '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700">Job Title <span class="text-[#FA0F9C] ml-1">*</span></label><input required name="jobTitle" type="text" placeholder="e.g. Partner Development Manager" class="' + fieldClass + '" style="' + fieldStyle + '"></div>' +
          '<div class="space-y-1.5"><label class="text-xs font-bold text-slate-700">Division / Office Location <span class="text-[#FA0F9C] ml-1">*</span></label><input required name="division" type="text" placeholder="e.g. ISV Accelerate / Seattle, WA" class="' + fieldClass + '" style="' + fieldStyle + '"></div>' +
        "</div>";

      if (identityRow && identityRow.parentNode) {
        identityRow.parentNode.insertBefore(hyperMount, identityRow.nextSibling);
        identityRow.parentNode.insertBefore(partnerMount, identityRow.nextSibling);
      }

      var clouds = ["AWS"];
      var picks = hyperMount.querySelector("[data-sn-cloud-picks]");
      ["AWS", "Azure", "Google Cloud"].forEach(function(name) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = name;
        btn.setAttribute("data-cloud", name);
        picks.appendChild(btn);
        btn.addEventListener("click", function() {
          var has = clouds.indexOf(name) !== -1;
          if (has && clouds.length === 1) return;
          clouds = has ? clouds.filter(function(item) { return item !== name; }) : clouds.concat(name);
          paintClouds();
        });
      });
      function paintClouds() {
        picks.querySelectorAll("button").forEach(function(btn) {
          var on = clouds.indexOf(btn.getAttribute("data-cloud")) !== -1;
          btn.className = "p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center cursor-pointer " + (on ? "bg-sky-50 border-[#008BF8] text-[#008BF8]" : "bg-white border-slate-200 text-slate-600");
        });
        var chip = hyperMount.querySelector("[data-sn-clouds]");
        if (chip) chip.textContent = clouds.join(" · ") || "AWS";
      }

      var intent = "service";
      var hyper = false;
      function paint() {
        if (serviceBtn) serviceBtn.className = intent === "service" ? serviceOn : serviceOff;
        if (partnerBtn) partnerBtn.className = intent === "partnership" ? serviceOn : serviceOff;
        setShown(cloudBlock, intent === "service");
        setShown(serviceBlock, intent === "service");
        setShown(partnerMount, intent === "partnership" && !hyper);
        setShown(hyperMount, intent === "partnership" && hyper);
        setLead(companyLabelEl, hyper ? "Cloud Organization" : "Company Name");
        setLead(messageLabelEl, hyper ? "Target Opportunity or Account Details" : "Message Details");
        if (email) email.placeholder = hyper ? "alias@amazon.com, microsoft.com, etc." : "Enter your work email address";
        if (message) {
          message.placeholder = hyper
            ? "Share details about active ISV accounts, target workload, or co-sell alignment goals..."
            : intent === "service"
              ? "Describe your cloud marketplace status, co-sell blockers, or goals..."
              : "Describe your platform, partnership proposal, or co-sell alignment ideas...";
        }
        if (submitLabel) submitLabel.textContent = hyper ? "Register Hyperscaler Co-Sell Alignment" : "Send Message";
        var companyInput = form.querySelector("input[name='company']");
        if (companyInput) companyInput.placeholder = hyper ? "e.g. AWS, Microsoft, Google Cloud" : "Enter your company name";
        paintClouds();
      }

      var orgSelect = partnerMount.querySelector("select[name='partnerOrgType']");
      if (orgSelect) {
        orgSelect.addEventListener("change", function() {
          hyper = orgSelect.value === "Cloud Alliance / Hyperscaler Team";
          if (hyper) {
            var eco = partnerMount.querySelector("select[name='partnerEcosystem']");
            var focus = partnerMount.querySelector("select[name='partnerFocus']");
            if (eco && !eco.value) eco.value = "AWS Ecosystem";
            if (focus) focus.value = "Joint Co-Sell Collaboration";
          }
          paint();
        });
      }
      if (serviceBtn) serviceBtn.addEventListener("click", function() { intent = "service"; hyper = false; paint(); });
      if (partnerBtn) partnerBtn.addEventListener("click", function() { intent = "partnership"; paint(); });
      paint();

      form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!shell) return;
        shell.innerHTML = '<div class="py-10 text-center space-y-4"><div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div><div class="space-y-1.5"><h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Message sent successfully.</h3><p class="text-[14px] text-slate-600 max-w-md mx-auto leading-relaxed">Thank you for reaching out. Jen Dawson and our cloud execution team will review your details and respond within 24 hours.</p></div></div>';
      });
    })();
  </script>''')

    elif page_name == "support":
        out.append('''  <script>
    (function initSupportForm() {
      const form = document.querySelector("#support-ticket form");
      if (!form) return;
      const shell = form.parentElement;
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!shell) return;
        shell.innerHTML = '<div class="py-10 text-center space-y-4"><div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div><div class="space-y-1.5"><h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Ticket submitted successfully.</h3><p class="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">Your request has been logged. Our cloud GTM support team will reach out to you within our guaranteed 24-hour SLA.</p></div></div>';
      });
    })();
  </script>''')

    elif page_name == "resources":
        out.append('''  <script>
    // ── Interactive Single Resources Page Controls (Dynamic Bento Matrix & 8-Category Channels) ──
    (function initResourcesInteractive() {
      const bentoSec = document.getElementById("bento-overview");
      const blogSec = document.getElementById("section-articles");
      const newsSec = document.getElementById("section-news-press");
      const showSec = document.getElementById("section-show");
      const csSec = document.getElementById("section-case-studies");
      const webSec = document.getElementById("section-webinars");
      const eventsSec = document.getElementById("section-events");
      const briefingSec = document.getElementById("resources-briefing");

      let currentTab = "all";
      let searchQuery = "";

      const navPills = Array.from(document.querySelectorAll("#resources-menu button")).filter(b => {
        const text = b.textContent.toLowerCase().trim();
        return (
          text.startsWith("all") ||
          text.includes("blog") ||
          text.includes("news") ||
          text.includes("show") ||
          text.includes("case") ||
          text.includes("webinar") ||
          text.includes("event") ||
          text.includes("brief")
        );
      });

      const searchInput = document.querySelector("#resources-menu input");

      function updateDisplay() {
        // 1. Update Navigation Pill active classes
        navPills.forEach(b => {
          const t = b.textContent.toLowerCase().trim();
          let isMatch = false;
          if (currentTab === "all" && t.startsWith("all")) isMatch = true;
          else if (currentTab === "blog" && t.includes("blog")) isMatch = true;
          else if (currentTab === "news-press" && t.includes("news")) isMatch = true;
          else if (currentTab === "show" && t.includes("show")) isMatch = true;
          else if (currentTab === "case-studies" && t.includes("case")) isMatch = true;
          else if (currentTab === "webinars" && t.includes("webinar")) isMatch = true;
          else if (currentTab === "events" && t.includes("event")) isMatch = true;
          else if (currentTab === "newsletter" && t.includes("brief")) isMatch = true;

          if (isMatch) {
            b.className = "flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer bg-slate-900 text-white shadow-md shadow-slate-900/20 ring-2 ring-slate-900/10 font-bold -translate-y-[1px]";
          } else {
            b.className = "flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200/50";
          }
        });

        // 2. Show / Hide Top-level Sections based on tab and search
        const q = searchQuery.toLowerCase().trim();

        if (bentoSec) bentoSec.style.display = (currentTab === "all" && !q) ? "block" : "none";
        if (blogSec) blogSec.style.display = (currentTab === "blog" || q) ? "block" : "none";
        if (newsSec) newsSec.style.display = (currentTab === "news-press" || q) ? "block" : "none";
        if (showSec) showSec.style.display = (currentTab === "show" || q) ? "block" : "none";
        if (csSec) csSec.style.display = (currentTab === "case-studies" || q) ? "block" : "none";
        if (webSec) webSec.style.display = (currentTab === "webinars" || q) ? "block" : "none";
        if (eventsSec) eventsSec.style.display = (currentTab === "events" || q) ? "block" : "none";
        if (briefingSec) briefingSec.style.display = (currentTab === "newsletter") ? "block" : "none";

        // 3. Card level filtering for Search
        if (q) {
          function filterCardList(containerSelector) {
            const container = document.querySelector(containerSelector);
            if (!container) return;
            const cards = container.children;
            Array.from(cards).forEach(card => {
              const cardText = card.textContent.toLowerCase();
              card.style.display = cardText.includes(q) ? "" : "none";
            });
          }

          filterCardList("#section-articles .grid");
          filterCardList("#section-news-press .grid");
          filterCardList("#section-show .grid");
          filterCardList("#section-case-studies .grid");
          filterCardList("#section-webinars .grid");
          filterCardList("#section-events .grid");
        }
      }

      // Attach click handlers to top pills
      navPills.forEach(b => {
        b.addEventListener("click", function() {
          const t = b.textContent.toLowerCase().trim();
          if (t.startsWith("all")) currentTab = "all";
          else if (t.includes("blog")) currentTab = "blog";
          else if (t.includes("news")) currentTab = "news-press";
          else if (t.includes("show")) currentTab = "show";
          else if (t.includes("case")) currentTab = "case-studies";
          else if (t.includes("webinar")) currentTab = "webinars";
          else if (t.includes("event")) currentTab = "events";
          else if (t.includes("brief")) currentTab = "newsletter";
          updateDisplay();
        });
      });

      if (searchInput) {
        searchInput.addEventListener("input", function(e) {
          searchQuery = e.target.value || "";
          updateDisplay();
        });
      }

      // Check URL params on load
      const hash = window.location.hash || window.location.search;
      if (hash.includes("blog") || hash.includes("articles")) currentTab = "blog";
      else if (hash.includes("news")) currentTab = "news-press";
      else if (hash.includes("show")) currentTab = "show";
      else if (hash.includes("case-studies") || hash.includes("case-study")) currentTab = "case-studies";
      else if (hash.includes("webinars") || hash.includes("webinar")) currentTab = "webinars";
      else if (hash.includes("events") || hash.includes("event")) currentTab = "events";
      else if (hash.includes("newsletter") || hash.includes("nova-brief")) currentTab = "newsletter";

      updateDisplay();
    })();
  </script>''')

    elif page_name == "homepage":
        out.append('''  <script>
    // 1. Logo Marquee Continuous Smooth Symmetrical Glide
    (function initMarquee() {
      const track = document.querySelector("#trust .relative.h-14, #trust .relative.h-16, #trust .relative.h-20");
      if (!track) return;
      const items = Array.from(track.children);
      const ITEM_WIDTH = 220;
      const LOOP_WIDTH = 11 * ITEM_WIDTH;
      let offset = 0;
      let hovered = false;
      const marqueeBox = track.closest(".rounded-full, .flex");
      if (marqueeBox) {
        marqueeBox.addEventListener("mouseenter", function() { hovered = true; });
        marqueeBox.addEventListener("mouseleave", function() { hovered = false; });
      }
      function tick() {
        if (!hovered) {
          offset += 0.75;
          if (offset >= LOOP_WIDTH) offset -= LOOP_WIDTH;
        }
        items.forEach(function(el, idx) {
          const x = idx * ITEM_WIDTH - offset;
          el.style.transform = "translate3d(" + x + "px, -50%, 0)";
        });
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();

    // 2. Hero YouTube Video Trigger (Open & Close with Deep Background Blur)
    (function initHeroVideo() {
      const trigger = document.getElementById("hero-video-trigger");
      const modal = document.getElementById("hero-video-modal");
      const iframe = document.getElementById("hero-video-iframe");
      if (!trigger || !modal) return;

      let isPlaying = false;
      const videoSrc = iframe ? (iframe.getAttribute("data-src") || "https://www.youtube.com/embed/x75hrIBKPj8?autoplay=1&rel=0&modestbranding=1") : "https://www.youtube.com/embed/x75hrIBKPj8?autoplay=1&rel=0&modestbranding=1";

      function setPlaying(playing) {
        isPlaying = playing;
        const textSpan = trigger.querySelector(".hero-video-text") || trigger.querySelector("span:last-child");
        const iconSpan = trigger.querySelector(".hero-video-icon") || trigger.querySelector("span:first-child");
        const cutout = document.getElementById("hero-jen-cutout") || (modal.parentElement ? modal.parentElement.querySelector("img")?.closest(".relative") : null);

        if (isPlaying) {
          modal.classList.remove("hidden", "opacity-0", "scale-95", "pointer-events-none");
          modal.classList.add("flex", "opacity-100", "scale-100", "pointer-events-auto", "backdrop-blur-md", "bg-black/25");
          if (modal.parentElement) modal.parentElement.classList.remove("pointer-events-none");
          if (cutout) {
            cutout.style.transition = "all 0.5s ease-out";
            cutout.style.filter = "blur(8px)";
            cutout.style.opacity = "0.75";
            cutout.style.transform = "scale(0.98)";
          }
          if (iframe) iframe.src = videoSrc;
          if (textSpan) textSpan.textContent = "Close Executive Briefing";
          if (iconSpan) iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
        } else {
          modal.classList.remove("flex", "opacity-100", "scale-100", "pointer-events-auto", "backdrop-blur-md", "bg-black/25");
          modal.classList.add("hidden", "opacity-0", "scale-95", "pointer-events-none");
          if (cutout) {
            cutout.style.filter = "none";
            cutout.style.opacity = "1";
            cutout.style.transform = "scale(1)";
          }
          if (iframe) iframe.src = "";
          if (textSpan) textSpan.textContent = "Watch Executive Briefing";
          if (iconSpan) iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 translate-x-[0.5px]" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>';
        }
      }

      trigger.addEventListener("click", function(e) {
        e.preventDefault();
        setPlaying(!isPlaying);
      });

      const closeBtn = modal.querySelector("button");
      if (closeBtn) {
        closeBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          setPlaying(false);
        });
      }
      modal.addEventListener("click", function(e) {
        if (e.target === modal) {
          setPlaying(false);
        }
      });
    })();

    // 3. Solutions Hub — open the roadmap when a challenge card is clicked
    (function initSolutionsHub() {
      var root = document.getElementById("solutions");
      if (!root) return;
      var buttons = Array.prototype.filter.call(root.querySelectorAll("button"), function(btn) {
        return /check our (Programs|Services|GTM)/i.test(btn.textContent || "");
      });
      if (buttons.length < 3) return;

      var cats = [
        {
          id: "programs", title: "Programs", color: "#FA0F9C",
          challenges: [
            { id: "ignite", problem: "Need a live transacting listing in 30 days without dev drag?", resolution: "Resolved by: Ignite Marketplace Activation", name: "Ignite Marketplace Activation Program", description: "A turnkey 30-day program to launch your cloud marketplace listing with zero developer drag, pre-configured CPPO pricing rails, and 100% co-sell compliance.", pillars: [["Accelerate revenue growth", "Live transacting listing in 30 days flat"], ["Enter new buyer markets", "Pre-configured CPPO private offer rails"], ["Zero developer homework", "Full portal verification & compliance handled"]], cta: "Explore Ignite Program" },
            { id: "supernova", problem: "Live on cloud, but need active pipeline, reps & $300K+ in MDF grants?", resolution: "Resolved by: SuperNova Co-Sell Flagship", name: "SuperNova Co-Sell Flagship Program", description: "We embed directly inside your GTM team as fractional operators to register ACE deals with regional cloud reps and capture up to $300K+ in hyperscaler MDF grants.", pillars: [["Weekly ACE deal flow", "Direct deal registrations with cloud reps"], ["Unlock $300K+ in MDF", "Hyperscaler-funded cash marketing grants"], ["Field battlecard kit", "Customer-ready decks cloud sellers pitch"]], cta: "Explore SuperNova Flagship" },
            { id: "novax", problem: "Scaling on one cloud, need multi-cloud parity across AWS, Azure, GCP?", resolution: "Resolved by: NovaX Multi-Cloud Global Scale", name: "NovaX Multi-Cloud Global Scale Program", description: "Scale enterprise deals simultaneously across AWS, Microsoft Azure, and GCP while tapping into enterprise EDP and MACC commit drawdown budgets.", pillars: [["Unified 3-cloud engine", "Simultaneous field motions across all 3 clouds"], ["Commit drawdowns (EDP)", "Tap into enterprise EDP & MACC budgets"], ["Top-tier GSI alliances", "Joint pipeline with System Integrators"]], cta: "Explore NovaX Multi-Cloud" }
          ]
        },
        {
          id: "services", title: "Services", color: "#008BF8",
          challenges: [
            { id: "pdmaas", problem: "Our internal AEs don't know how to navigate cloud reps or ACE portals?", resolution: "Resolved by: Partner Development Manager (PDM)", name: "Partner Development Manager as a Service (PDM)", description: "Embed an ex-hyperscaler partner development manager directly into your team to qualify opportunities, navigate cloud reps, and accelerate co-sell velocity.", pillars: [["3x Co-sell deal velocity", "Lead qualification & weekly pipeline syncs"], ["Direct cloud rep alignment", "Active syncs with regional account sellers"], ["Zero AE admin drag", "We handle ACE admin so your AEs just sell"]], cta: "Explore PDM Service" },
            { id: "pmmaas", problem: "Cloud sales reps don't pitch us because we lack joint narrative battlecards?", resolution: "Resolved by: Partner Marketing Manager (PMM)", name: "Partner Marketing Manager as a Service (PMM)", description: "Hyperscaler reps ignore generic decks. We craft cloud-native narrative battlecards and win approved cash marketing grants that drive inbound pipeline.", pillars: [["Seller battlecards", "High-impact 1-pagers with trigger criteria"], ["Funded cash MDF grants", "Approved hyperscaler grant awards won"], ["Joint event packages", "Cloud-sponsored co-marketing campaigns"]], cta: "Explore PMM Service" },
            { id: "palaas", problem: "Need executive boardroom leadership for cloud QBRs & strategic GSI alliances?", resolution: "Resolved by: Partner Alliance Leader (PAL)", name: "Partner Alliance Leader as a Service (PAL)", description: "Senior executive boardroom leadership to author and lead cloud QBRs, negotiate Premier partner tier upgrades, and formalize strategic GSI alliances.", pillars: [["Premier tier progression", "Roadmap to top differentiated partner status"], ["Executive cloud QBRs", "Author & lead reviews with cloud GMs"], ["GSI practice alignment", "Build joint pipeline with top consultancies"]], cta: "Explore PAL Service" }
          ]
        },
        {
          id: "ops", title: "GTM & Ops", color: "#10B981",
          challenges: [
            { id: "prmaas", problem: "Losing revenue attribution & lack automated IaC/Terraform tagging?", resolution: "Resolved by: Partner Revenue Measurement (PRM · Free)", name: "Partner Revenue Measurement (PRM · Free)", description: "Prevent deal leakage permanently with architecture-aware tagging, native Terraform modules, and automated CRM-to-Cloud deal attribution.", pillars: [["100% Attribution", "Zero deal leakage across all partner channels"], ["Turnkey IaC code", "Native Terraform, CDK & CloudFormation"], ["100% Free engagement", "Complimentary setup to ensure compliance"]], cta: "Explore PRM Infrastructure" },
            { id: "pcmaas", problem: "AWS Partner Central unified console transition is breaking our IAM/SSO?", resolution: "Resolved by: Partner Central Migration (PCM · Free)", name: "Partner Central Migration as a Service (PCM)", description: "Zero-disruption AWS Partner Central cutover with full IAM, SSO, and Entra ID permission mapping, eliminating duplicate registration risks.", pillars: [["Zero downtime for reps", "Seamless console cutover for all sales reps"], ["Permission parity", "Marketplace & Partner console alignment"], ["100% Free runbooks", "Turnkey IAM & Entra ID configuration"]], cta: "Explore PCM Migration" }
          ]
        }
      ];

      buttons.forEach(function(btn, i) {
        btn.setAttribute("data-sn-cat", cats[i].id);
      });

      var grid = buttons[0].parentElement;
      var stage = document.createElement("div");
      stage.id = "sn-solutions-stage";
      grid.parentNode.insertBefore(stage, grid.nextSibling);

      var openId = null;
      var selectedId = null;

      function esc(value) {
        return String(value).replace(/[&<>"']/g, function(ch) {
          return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
        });
      }

      function findCat(id) {
        for (var i = 0; i < cats.length; i++) if (cats[i].id === id) return cats[i];
        return null;
      }

      function paintCards() {
        buttons.forEach(function(btn) {
          var on = btn.getAttribute("data-sn-cat") === openId;
          var cat = findCat(btn.getAttribute("data-sn-cat"));
          btn.style.borderColor = on ? cat.color : "";
          btn.style.background = on ? "#ffffff" : "";
          var svgs = btn.querySelectorAll("svg");
          var arrow = svgs.length ? svgs[svgs.length - 1] : null;
          var arrowBtn = arrow ? arrow.parentElement : null;
          if (arrowBtn) {
            arrowBtn.style.background = on ? "#F1F5F9" : cat.color;
            arrowBtn.style.color = on ? "#64748B" : "#FFFFFF";
            arrowBtn.style.boxShadow = on ? "0 2px 0 #e2e8f0" : "0 2px 0 rgba(0,0,0,0.18), 0 4px 12px " + cat.color + "60";
            arrow.style.transform = on ? "rotate(180deg)" : "";
          }
          if (arrowBtn && arrowBtn.parentElement) {
            arrowBtn.parentElement.querySelectorAll("span").forEach(function(span) {
              span.style.display = on ? "none" : "";
            });
          }
          var notch = btn.querySelector("[data-sn-notch]");
          if (on && !notch) {
            notch = document.createElement("div");
            notch.setAttribute("data-sn-notch", "1");
            notch.setAttribute("aria-hidden", "true");
            notch.style.cssText = "position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid " + cat.color + ";z-index:20;";
            btn.appendChild(notch);
          } else if (!on && notch) {
            notch.remove();
          }
        });
      }

      function render() {
        paintCards();
        var cat = findCat(openId);
        if (!cat) {
          stage.innerHTML = "";
          return;
        }
        var selected = null;
        cat.challenges.forEach(function(ch) { if (ch.id === selectedId) selected = ch; });

        var left = cat.challenges.map(function(ch) {
          var on = ch.id === selectedId;
          var edge = on ? cat.color : "#e2e8f0";
          var fill = on ? cat.color + "14" : "#fff";
          var dot = on ? '<span class="h-2 w-2 rounded-full" style="background:' + cat.color + '"></span>' : "";
          var chip = on
            ? "color:" + cat.color + ";background:" + cat.color + "14;border-color:" + cat.color + "30"
            : "color:#64748b;background:#f1f5f9;border-color:#e2e8f0";
          return '<button type="button" data-sn-challenge="' + ch.id + '" class="w-full text-left p-4 rounded-2xl cursor-pointer flex items-center justify-between gap-3 border-2 min-h-[92px]" style="box-shadow:0 2px 0 ' + edge + ";background:" + fill + ";border-color:" + edge + '">' +
            '<div class="flex items-start gap-3 min-w-0 flex-1"><span class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 bg-white" style="border-color:' + (on ? cat.color : "#cbd5e1") + '">' + dot + "</span>" +
            '<div class="space-y-1.5 min-w-0 flex-1"><h4 class="text-[14.5px] sm:text-[15.5px] font-bold leading-snug text-slate-900">' + esc(ch.problem) + "</h4>" +
            '<span class="inline-block text-[12px] font-semibold px-2 py-0.5 rounded-md border" style="' + chip + '">' + esc(ch.resolution) + "</span></div></div>" +
            '<span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style="background:' + cat.color + ";opacity:" + (on ? "1" : "0") + '"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"></path></svg></span></button>';
        }).join("");

        function watermark(id, color) {
          var motif = "";
          if (id === "programs") {
            motif = '<rect x="26" y="146" width="20" height="46" rx="10" fill="' + color + '" fill-opacity="0.5"></rect>' +
              '<rect x="52" y="122" width="20" height="70" rx="10" fill="' + color + '" fill-opacity="0.65"></rect>' +
              '<rect x="78" y="94" width="20" height="98" rx="10" fill="' + color + '" fill-opacity="0.8"></rect>' +
              '<rect x="104" y="62" width="20" height="130" rx="10" fill="' + color + '" fill-opacity="0.95"></rect>' +
              '<g transform="translate(132,92) rotate(42)"><path d="M0 48 Q-12 72 0 88 Q12 72 0 48 Z" fill="' + color + '"></path>' +
              '<path d="M0 -42 C22 -15 22 36 12 48 L-12 48 C-22 36 -22 -15 0 -42 Z" fill="#fff" stroke="' + color + '" stroke-width="2"></path>' +
              '<path d="M0 -42 C12 -28 17 -16 17 -8 L-17 -8 C-17 -16 -12 -28 0 -42 Z" fill="' + color + '"></path>' +
              '<circle cx="0" cy="12" r="7" fill="#e0f2fe"></circle><circle cx="0" cy="12" r="4" fill="#38bdf8"></circle></g>';
          } else if (id === "services") {
            motif = '<g transform="translate(120,118) rotate(-26)">' +
              '<path d="M-40 -40 L-8 -40 L-8 -8 L-40 -8 Z" fill="' + color + '" fill-opacity="0.55" stroke="#fff" stroke-width="2"></path>' +
              '<path d="M-4 -40 L40 -40 L40 -8 L-4 -8 Z" fill="' + color + '" fill-opacity="0.8" stroke="#fff" stroke-width="2"></path>' +
              '<path d="M-40 -4 L-8 -4 L-8 40 L-40 40 Z" fill="' + color + '" fill-opacity="0.7" stroke="#fff" stroke-width="2"></path>' +
              '<path d="M-4 -4 L40 -4 L40 40 L-4 40 Z" fill="' + color + '" fill-opacity="0.95" stroke="#fff" stroke-width="2"></path></g>' +
              '<g transform="translate(178,68)"><circle r="14" fill="#fff" stroke="' + color + '" stroke-width="2"></circle><circle r="4.5" fill="' + color + '"></circle></g>' +
              '<g transform="translate(42,142)"><circle r="14" fill="#fff" stroke="' + color + '" stroke-width="2"></circle><path d="M-4 -3.5 L-8 0 L-4 3.5 M4 -3.5 L8 0 L4 3.5" stroke="' + color + '" stroke-width="1.8" fill="none" stroke-linecap="round"></path></g>' +
              '<g transform="translate(208,120)"><circle r="14" fill="#fff" stroke="' + color + '" stroke-width="2"></circle><circle cx="-3" cy="-2" r="3" fill="' + color + '"></circle></g>';
          } else {
            motif = '<g transform="translate(120,120) rotate(-26)">' +
              '<circle r="46" fill="' + color + '"></circle><circle r="38" fill="' + color + '" stroke="#fff" stroke-width="1.5"></circle>' +
              '<circle r="26" fill="#0f172a" fill-opacity="0.88"></circle>' +
              '<rect x="-15" y="2" width="5" height="11" rx="1.5" fill="#fff"></rect>' +
              '<rect x="-8" y="-4" width="5" height="17" rx="1.5" fill="#fff"></rect>' +
              '<rect x="-1" y="-10" width="5" height="23" rx="1.5" fill="#fff"></rect>' +
              '<path d="M-14 3 L13 -15" stroke="#4ade80" stroke-width="2.8" stroke-linecap="round"></path>' +
              '<path d="M8 -15 L13 -15 L13 -10" stroke="#4ade80" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path></g>' +
              '<g transform="translate(178,68)"><circle r="14" fill="#fff" stroke="' + color + '" stroke-width="2"></circle><path d="M-5 2 C-7 0 -5.5 -2.2 -4 -1.8 C-3.5 -4 0 -4.8 0 -4.5 C3.8 -4.5 7 -1.5 7 0 C7 1.2 5.5 2 4.2 2 Z" fill="' + color + '"></path></g>' +
              '<g transform="translate(208,120)"><circle r="14" fill="#fff" stroke="' + color + '" stroke-width="2"></circle><path d="M-4 0 L-1 3 L5 -3" stroke="' + color + '" stroke-width="2.2" fill="none" stroke-linecap="round"></path></g>';
          }
          return '<svg aria-hidden="true" class="pointer-events-none absolute -top-2 right-0 lg:right-4 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 z-0 opacity-20" viewBox="0 0 240 240" fill="none">' +
            '<ellipse cx="120" cy="120" rx="98" ry="38" transform="rotate(-26 120 120)" stroke="' + color + '" stroke-width="2.2"></ellipse>' +
            '<ellipse cx="120" cy="120" rx="98" ry="38" transform="rotate(-26 120 120)" stroke="#fff" stroke-width="1.2" stroke-dasharray="16 90"></ellipse>' +
            motif + "</svg>";
        }

        var catBtn = null;
        buttons.forEach(function(btn) { if (btn.getAttribute("data-sn-cat") === cat.id) catBtn = btn; });
        var catIcon = "";
        if (catBtn) {
          var iconSvg = catBtn.querySelector("span svg");
          if (iconSvg) catIcon = iconSvg.outerHTML.replace("w-8 h-8", "w-7 h-7");
        }

        var right;
        if (!selected) {
          right = '<div class="lg:col-span-7 rounded-3xl p-8 sm:p-10 border-2 border-dashed border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-slate-50/80 shadow-[0_4px_0_#cbd5e1,0_12px_28px_rgba(15,23,42,0.05)] flex flex-col items-center justify-center text-center min-h-[460px] lg:h-[510px] relative overflow-hidden">' +
            watermark(cat.id, cat.color) +
            '<div class="relative z-10 flex flex-col items-center text-center space-y-4">' +
            '<div class="flex h-14 w-14 items-center justify-center rounded-2xl border-2" style="color:' + cat.color + ";border-color:" + cat.color + "28;background:" + cat.color + '12">' + catIcon + "</div>" +
            '<div class="space-y-1.5 max-w-sm"><h4 class="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight">Select a challenge to view roadmap</h4>' +
            '<p class="text-sm sm:text-[15px] text-slate-500 leading-relaxed">Choose your current growth bottleneck to reveal tailored ' + esc(cat.title.toLowerCase()) + " deliverables &amp; milestones.</p></div></div></div>";
        } else {
          var pillarIcons = [
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>',
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>'
          ];
          var pillars = selected.pillars.map(function(p, idx) {
            return '<div class="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_2px_0_#e2e8f0] flex flex-col justify-between min-h-[96px] space-y-1.5"><span class="flex h-8 w-8 items-center justify-center rounded-xl border" style="color:' + cat.color + ";background:" + cat.color + "12;border-color:" + cat.color + '25">' + pillarIcons[idx] + '</span><div><h4 class="text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 leading-snug">' + esc(p[0]) + '</h4><p class="text-[11.5px] text-slate-500 leading-snug mt-0.5">' + esc(p[1]) + "</p></div></div>";
          }).join("");
          right = '<div class="lg:col-span-7 rounded-3xl p-7 sm:p-8 lg:p-9 bg-gradient-to-br from-white via-white to-slate-50/60 border-2 shadow-[0_4px_0_#cbd5e1,0_16px_36px_rgba(15,23,42,0.07)] flex flex-col justify-between relative overflow-hidden min-h-[460px] lg:h-[510px]" style="border-color:' + cat.color + '35">' +
            watermark(cat.id, cat.color) +
            '<div class="space-y-4 sm:space-y-5 relative z-10 w-full"><div class="space-y-2.5 max-w-sm sm:max-w-md lg:max-w-[480px]">' +
            '<h3 class="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">' + esc(selected.name) + "</h3>" +
            '<p class="text-base sm:text-[17px] text-slate-700 leading-relaxed">' + esc(selected.description) + "</p></div>" +
            '<div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-3 sm:pt-4 w-full">' + pillars + "</div></div>" +
            '<div class="pt-6 relative z-10"><a href="#solutions" class="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full font-bold text-sm sm:text-base text-white" style="background:' + cat.color + ";box-shadow:0 4px 0 rgba(0,0,0,0.18), 0 8px 20px -2px " + cat.color + '40">' + esc(selected.cta) + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></div>';
        }

        stage.innerHTML = '<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start mb-4">' +
          '<div aria-hidden="true" class="pointer-events-none absolute left-[41.666%] top-32 -translate-x-1/2 z-20 hidden lg:flex h-9 w-9 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] text-slate-500"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></div>' +
          '<div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-[0_4px_0_#cbd5e1,0_12px_28px_rgba(15,23,42,0.06)] min-h-[460px] lg:h-[510px]"><div class="mb-4 flex items-center justify-between"><h3 class="text-xl sm:text-[22px] font-black tracking-tight text-slate-900">Your challenge</h3><span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border tracking-wide uppercase" style="color:' + cat.color + ";background:" + cat.color + "12;border-color:" + cat.color + '25">' + esc(cat.title) + '</span></div><div class="space-y-3">' + left + "</div></div>" +
          right + "</div>";

        stage.querySelectorAll("[data-sn-challenge]").forEach(function(btn) {
          btn.addEventListener("click", function() {
            selectedId = btn.getAttribute("data-sn-challenge");
            render();
          });
        });
      }

      buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
          var id = btn.getAttribute("data-sn-cat");
          if (openId === id) {
            openId = null;
            selectedId = null;
          } else {
            openId = id;
            selectedId = null;
          }
          render();
          if (openId) stage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    })();

    // 4. Executive testimonials — orbital curve track & focused quote
    (function initExecutiveTestimonialsOrbital() {
      var root = document.getElementById("testimonials");
      if (!root) return;

      var stories = [
        {
          id: "arcticwolf",
          company: "Arctic Wolf Networks",
          shortName: "Arctic Wolf",
          logoSrc: "/arcticwolf.png",
          testimonials: [
            {
              name: "Megan Flanagan",
              role: "VP Marketing, Arctic Wolf Networks",
              quote: "The structure of the pilot program exceeded all expectations. The data-driven full funnel planning model challenged us to think in ways we haven't thought of before."
            },
            {
              name: "Odin Olson",
              role: "VP Partnerships & Alliances, Arctic Wolf Networks",
              quote: "It was great to hear what has been done well with an AWS best ISV. The co-sell scoring discussion was eye-opening to us."
            }
          ]
        },
        {
          id: "aws",
          company: "Amazon Web Services (AWS)",
          shortName: "AWS",
          logoSrc: "/aws-logo.png",
          testimonials: [
            {
              name: "Gunjan Ramketa",
              role: "Partner Development Manager, AWS",
              quote: "Jen’s GTM architecture elevated Dataminr’s entire AWS motion. The structure and discipline she brought created the kind of alignment and seller confidence we rarely see from ISVs."
            },
            {
              name: "John McElhone",
              role: "Partner Development Manager, AWS",
              quote: "Jen's GTM architecture fundamentally changed how Arctic Wolf engaged with AWS. The structure, clarity, and discipline she brought created a level of alignment we rarely see with security partners."
            },
            {
              name: "Megha Malhotra",
              role: "AWS Technical Manager",
              quote: "SaaSNova delivers the kind of GTM and partnership content the industry actually needs, practical, insightful, and grounded in real operator experience. Jen has built something truly differentiated for the cloud and SaaS ecosystem."
            }
          ]
        },
        {
          id: "safe",
          company: "SAFE Security",
          shortName: "SAFE Security",
          logoSrc: "/safe.svg",
          testimonials: [
            {
              name: "Nicola Sanna",
              role: "President, SAFE Security",
              quote: "SaaSNova was instrumental in accelerating SAFE’s AWS Marketplace strategy. They helped us compress months of internal effort into weeks, sharpen our enterprise positioning, and launch TPRM with a procurement-ready workflow."
            },
            {
              name: "Michael Nagao",
              role: "SVP Worldwide Channel, SAFE Security",
              quote: "SaaSNova helped us move through AWS programs, Marketplace requirements, and internal alignment in a fraction of the time it normally takes, compressing months of work into weeks."
            },
            {
              name: "Jagdish Upadhyay",
              role: "VP of Marketing, SAFE Security",
              quote: "The joint AWS partnership page is a critical proof point for SAFE, and Jen’s wireframe was thorough, thoughtfully structured, and partner-ready from day one."
            },
            {
              name: "Gary Cronk",
              role: "Director, Strategic Partners, SAFE Security",
              quote: "SaaSNova isn't a platform, they're the operator behind our AWS Marketplace success. They bring the GTM clarity, commercial alignment, and end-to-end ownership that no tool can provide."
            }
          ]
        },
        {
          id: "saasify",
          company: "SaaSify",
          shortName: "SaaSify",
          logoSrc: "/images/saasify-logo.png",
          testimonials: [
            {
              name: "Manesh Raveendran",
              role: "CEO & Founder, SaaSify",
              quote: "A listing creates visibility. Automation and GTM precision create momentum. SaaSNova brings the GTM activation layer to turn cloud visibility into real cloud momentum."
            },
            {
              name: "Kevin Flitcroft",
              role: "Head of Sales, SaaSify",
              quote: "Winning on AWS, Azure, and GCP takes more than just getting listed. The partners that are actually building pipeline are the ones who've figured out how to align their story with what sellers care about inside those clouds. That's the GTM layer most partners are missing, and exactly what SaaSNova helps unlock and why we are so excited about this partnership."
            }
          ]
        },
        {
          id: "freshworks",
          company: "Freshworks",
          shortName: "Freshworks",
          logoSrc: "/freshworks-logo-png.png",
          testimonials: [
            {
              name: "Abhishek GP",
              role: "VP of Growth at Atlan (former Head of Growth at Freshworks)",
              quote: "Jen is one of the most dynamic and driven leaders I’ve worked with Freshworks. She built the alignment and relationships needed to secure a three-year strategic collaboration with AWS and set the foundation for a scalable co-sell motion. She consistently turns challenges into opportunities."
            }
          ]
        },
        {
          id: "penta",
          company: "Penta Security",
          shortName: "Penta Security",
          logoSrc: "/pentasecurity.svg",
          testimonials: [
            {
              name: "Jay Park",
              role: "E-Biz Group Lead, Penta Security",
              quote: "The AWS AI Software Competency had been on our roadmap for months. SaaSNova owned the entire process and made it seamless, from technical assessment and architecture documentation to customer evidence and final approval. As our AWS go-to-market partner, they also helped us sharpen how we position Cloudbric’s AI capabilities within the AWS ecosystem. With the competency, Penta Security now has the AI Software Competency badge, up to $75K in MDF, and faster co-sell opportunities with AWS. SaaSNova didn’t just help us earn a competency. They positioned us to win on AWS."
            }
          ]
        },
        {
          id: "simplesense",
          company: "Simplesense",
          shortName: "Simplesense",
          logoSrc: "/simplesense.svg",
          testimonials: [
            {
              name: "Eric Kanagy",
              role: "CEO, Simplesense",
              quote: "For a small business with limited capacity, success with a large channel partner like AWS can be a challenge. SaaSNova has been a force multiplier in accelerating our AWS strategy, helping us launch more listings on AWS Marketplace, unlock over $40K in credits and funding, and bring clarity to how we engage AWS through their Ignite GTM program. Their guidance enabled us to move faster with clarity. I would recommend SaaSNova’s GTM services to any startup looking to accelerate their AWS strategy and implementation."
            }
          ]
        },
        {
          id: "guarddog",
          company: "GuardDog.ai",
          shortName: "GuardDog.ai",
          logoSrc: "/guarddog.svg",
          testimonials: [
            {
              name: "Kelly Ryan",
              role: "Chief Commercial Officer, GuardDog",
              quote: "SaaSNova helped us launch our first SaaS listing on AWS Marketplace in just one week, after nearly two years of trying to navigate the process on our own. Their expertise, clarity, and hands-on guidance made an otherwise complex transition to the new AWS Partner Central experience feel simple. SaaSNova didn’t just help us get listed; they helped us finally establish our presence on AWS and move our product to market with confidence."
            }
          ]
        },
        {
          id: "pharmacoevidence",
          company: "Pharmacoevidence",
          shortName: "Pharmacoevidence",
          logoSrc: "/pharmocoevidence-logo.png",
          testimonials: [
            {
              name: "Rajdeep Kaur",
              role: "Associate Director & Lead, AI Sciences, Pharmacoevidence",
              quote: "SaaSNova brought a level of clarity and execution we had never experienced before. Jen helped us navigate AWS Marketplace listings, modernize our architecture, and build a precise, end-to-end path toward the AWS GenAI Competency. What sets SaaSNova apart is the operator-led partnership, fast, structured, and relentlessly outcome-driven. They accelerated end-to-end cloud GTM and Marketplace execution that would have taken us months into just a few weeks, elevating Pharmacoevidence’s global credibility."
            }
          ]
        },
        {
          id: "dataminr",
          company: "Dataminr",
          shortName: "Dataminr",
          logoSrc: "/images/dataminr-logo.png",
          testimonials: [
            {
              name: "Fraser Charles",
              role: "Senior Director, Partner Ecosystems, Dataminr",
              quote: "The architecture gave Dataminr the credibility sellers and AWS senior leaders needed to lean in."
            }
          ]
        },
        {
          id: "workspan",
          company: "WorkSpan",
          shortName: "WorkSpan",
          logoSrc: "/workspan.svg",
          testimonials: [
            {
              name: "Amit Sinha",
              role: "President, WorkSpan",
              quote: "Jen is one of the most effective GTM operators I’ve worked with. Across Freshworks, Postman, and Workspan, she brought a level of clarity, structure, and execution discipline that consistently moved our AWS partner motions forward. She has a rare ability to turn complex, ambiguous GTM challenges into aligned, high-velocity execution. Her impact is immediate, repeatable, and deeply felt across every team she works with."
            }
          ]
        },
        {
          id: "nexla",
          company: "Nexla",
          shortName: "Nexla",
          logoSrc: "/nexla.svg",
          testimonials: [
            {
              name: "Jayashree Rajan",
              role: "Chief Marketing Officer, Nexla",
              quote: "SaaSNova didn't just clarify our AWS GTM motion, they exposed issues we didn't even know were blocking us. Their operator-level mastery of Marketplace, ACE, co-sell, and partner programs is unmatched."
            }
          ]
        }
      ];

      var total = stories.length;
      var activeIndex = 0;
      var subIndex = 0;
      var paused = false;

      // Find the logo track buttons
      var trackContainer = root.querySelector(".overflow-x-auto, [class*='overflow-x-auto']");
      if (!trackContainer) return;
      var slotButtons = Array.prototype.slice.call(trackContainer.querySelectorAll("button"));
      if (slotButtons.length < 5) return;

      // Find quote elements
      var rightCol = root.querySelector(".lg\\:col-span-8, [class*='lg:col-span-8']");
      if (!rightCol) return;
      var quoteBox = rightCol.querySelector(".transition-all, .transition-opacity, [class*='transition-']");
      var quoteP = rightCol.querySelector("blockquote p");
      var nameH3 = rightCol.querySelector("h3");
      var roleP = nameH3 ? nameH3.parentElement.querySelector("p") : null;
      var pillsContainer = rightCol.querySelector(".flex.flex-wrap.items-center.gap-2, [class*='gap-2 pt-']");
      var watermarkContainer = root.querySelector("[class*='opacity-[0.09]'], [class*='opacity-[0.12]'], [class*='pointer-events-none absolute right-']");
      var watermarkImg = watermarkContainer ? watermarkContainer.querySelector("img") : root.querySelector(".pointer-events-none.absolute img");

      // Save initial logo images so we don't lose base64 Data URIs
      var logoMap = {};
      slotButtons.forEach(function(btn) {
        var img = btn.querySelector("img");
        if (img && img.alt) {
          logoMap[img.alt.toLowerCase()] = img.src;
        }
      });
      stories.forEach(function(s) {
        if (!logoMap[s.company.toLowerCase()] && !logoMap[s.shortName.toLowerCase()]) {
          // If not in DOM yet, keep relative logoSrc
          logoMap[s.company.toLowerCase()] = s.logoSrc;
        }
      });

      function getLogoSrc(story) {
        return logoMap[story.company.toLowerCase()] || logoMap[story.shortName.toLowerCase()] || story.logoSrc;
      }

      function updateUI(targetIndex, targetSubIndex) {
        activeIndex = (targetIndex + total) % total;
        subIndex = targetSubIndex || 0;
        var story = stories[activeIndex];
        var test = story.testimonials[subIndex] || story.testimonials[0];

        // 1. Update 5 slots
        var offsets = [-2, -1, 0, 1, 2];
        offsets.forEach(function(offset, idx) {
          var btn = slotButtons[idx];
          if (!btn) return;
          var storyIdx = (activeIndex + offset + total) % total;
          var slotStory = stories[storyIdx];
          var isCenter = offset === 0;

          btn.setAttribute("aria-label", "View testimonial from " + slotStory.company);
          btn.setAttribute("aria-pressed", isCenter ? "true" : "false");
          btn.setAttribute("data-story-idx", storyIdx);

          var arcIndent = isCenter
            ? "lg:translate-x-3 z-30"
            : Math.abs(offset) === 1
            ? "lg:translate-x-0 z-20"
            : "lg:-translate-x-2 z-10";

          var shapeClasses = isCenter
            ? "w-[200px] sm:w-[220px] lg:w-[240px] h-[64px] sm:h-[68px] rounded-2xl sm:rounded-full bg-white px-5 sm:px-6 border-2 border-[#008BF8] shadow-[0_12px_32px_rgba(0,139,248,0.22),0_2px_8px_rgba(15,23,42,0.04)] scale-100 sm:scale-105"
            : "w-[150px] sm:w-[170px] lg:w-[190px] h-[48px] sm:h-[52px] rounded-xl sm:rounded-full bg-white/70 hover:bg-white px-4 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-xs opacity-60 hover:opacity-100 scale-95 hover:scale-100";

          btn.className = "group relative shrink-0 transition-all duration-300 ease-out cursor-pointer flex items-center " + arcIndent + " " + shapeClasses;

          var img = btn.querySelector("img");
          if (img) {
            img.src = getLogoSrc(slotStory);
            img.alt = slotStory.company;
            img.className = (isCenter
              ? "max-h-7 sm:max-h-8 max-w-[120px] sm:max-w-[140px]"
              : "max-h-5 sm:max-h-5.5 max-w-[90px] sm:max-w-[110px] grayscale hover:grayscale-0 transition-all") + " w-auto object-contain";
          }

          var pip = btn.querySelector("[class*='animate-pulse']");
          if (isCenter) {
            if (!pip) {
              var newPip = document.createElement("span");
              newPip.className = "shrink-0 w-2.5 h-2.5 rounded-full bg-[#008BF8] shadow-[0_0_8px_#008BF8] animate-pulse";
              btn.appendChild(newPip);
            }
          } else {
            if (pip) pip.remove();
          }
        });

        // 2. Update Quote Content with pure opacity crossfade (no translateY to prevent any micro-jitter)
        if (quoteBox) {
          quoteBox.style.opacity = "0";
          quoteBox.style.transform = "none";
          setTimeout(function() {
            if (quoteP) quoteP.innerHTML = test.quote;
            if (nameH3) nameH3.textContent = test.name;
            if (roleP) roleP.textContent = test.role;

            // Multi-quote switcher pills
            if (pillsContainer) {
              if (story.testimonials.length > 1) {
                pillsContainer.style.display = "flex";
                pillsContainer.innerHTML = '<span class="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Quotes:</span>' +
                  story.testimonials.map(function(t, idx) {
                    var active = idx === subIndex;
                    var cls = active
                      ? "rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer bg-[#008BF8] text-white shadow-xs"
                      : "rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-sky-300";
                    return '<button type="button" data-sub-idx="' + idx + '" class="' + cls + '">' + t.name + '</button>';
                  }).join("");

                Array.prototype.slice.call(pillsContainer.querySelectorAll("button[data-sub-idx]")).forEach(function(pBtn) {
                  pBtn.addEventListener("click", function(e) {
                    e.stopPropagation();
                    var sIdx = parseInt(pBtn.getAttribute("data-sub-idx"), 10) || 0;
                    updateUI(activeIndex, sIdx);
                  });
                });
              } else {
                pillsContainer.innerHTML = "";
                pillsContainer.style.display = "none";
              }
            }

            if (watermarkImg) {
              watermarkImg.src = getLogoSrc(story);
            }

            quoteBox.style.opacity = "1";
            quoteBox.style.transform = "none";
          }, 150);
        }
      }

      // Slot Click Handlers
      slotButtons.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
          e.preventDefault();
          var storyIdx = parseInt(btn.getAttribute("data-story-idx"), 10);
          if (!isNaN(storyIdx)) {
            updateUI(storyIdx, 0);
          }
        });
      });

      // Pause on hover
      root.addEventListener("mouseenter", function() { paused = true; });
      root.addEventListener("mouseleave", function() { paused = false; });

      // Auto rotation every 8 seconds
      window.setInterval(function() {
        if (!paused) {
          updateUI(activeIndex + 1, 0);
        }
      }, 8000);

      // Initial sync
      updateUI(0, 0);
    })();
  </script>''')

    final_content = '\n'.join(out)
    final_content = fix_image_paths(final_content, is_in_reviews_folder)
    final_content = soften_long_lines(final_content)

    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"Generated {output_filename} ({len(final_content)} bytes)")


if __name__ == '__main__':
    # 1. Careers Page Review (Clean: 0 approved, 0 comments)
    careers_sections = [
        ("careers-hero", "Careers Hero & Culture", "Real Pipeline Execution"),
        ("open-roles", "Operating Bench & Positions", "Bento Roles & Dossiers"),
        ("open-application", "Open Application", "Join the Team")
    ]
    careers_comments = []
    build_review_file("careers", "Careers Page", "SaaSNova | Careers Page — Executive Review", "/tmp/sn-render/careers.html", "careers.html", careers_sections, careers_comments, is_in_reviews_folder=False)

    # 2. About Page Review (Clean: 0 approved, 0 comments)
    about_sections = [
        ("about-hero", "About & Cloud GTM Hero", "Execution Over Advice"),
        ("journey", "The SaaSNova Journey", "From Insiders to Operators"),
        ("founder", "Jen Dawson Founder Profile", "Story & Hyperscaler Track Record"),
        ("stars", "Company Stars & Operators", "Single-Row 3D Accordion Cards"),
        ("clients", "100+ ISVs Activated", "20-Tile Logo Platform"),
        ("philosophy", "Executive Commitment CTA", "Attributable Revenue Pledge")
    ]
    about_comments = []
    build_review_file("about", "About Page", "SaaSNova | About Page — Executive Review", "/tmp/sn-render/about.html", "about.html", about_sections, about_comments, is_in_reviews_folder=False)

    # 3. Homepage Review (Clean: 0 approved, 0 comments)
    home_sections = [
        ("hero", "Hero Section", "Operator-Led Engine"),
        ("trust", "Client Logos & Trust", "Enterprise Proof"),
        ("how-we-execute", "Operator Timeline", "Execution Roadmap"),
        ("solutions", "Solutions Hub", "Fractional & Turnkey Programs"),
        ("testimonials", "Executive Testimonials", "Verified Outcomes"),
        ("storefront", "Storefront Section", "AWS Marketplace Launch Partner"),
        ("contact", "Final Executive CTA", "Primary Growth Engine")
    ]
    home_comments = []
    build_review_file("homepage", "Homepage", "SaaSNova | Homepage — Executive Review", "/tmp/sn-render/home.html", "home.html", home_sections, home_comments, is_in_reviews_folder=False)

    # 4. Contact Page Review (Clean: 0 approved, 0 comments)
    contact_sections = [
        ("contact-hero", "Contact Hero & Timeline", "Strategy Session Overview"),
        ("contact-booking", "Founder Calendar", "Direct Calendly Booking"),
        ("send-message", "Inquiry Form", "Service & Partnership Message")
    ]
    contact_comments = []
    build_review_file("contact", "Contact Page", "SaaSNova | Contact Page — Executive Review", "/tmp/sn-render/contact.html", "contact.html", contact_sections, contact_comments, is_in_reviews_folder=False)

    # 5. Support Page Review (Clean: 0 approved, 0 comments)
    support_sections = [
        ("support-hero", "Support Hero & Commitments", "Help Desk"),
        ("support-ticket", "Submit a Ticket", "Support Desk & Inquiries")
    ]
    support_comments = []
    build_review_file("support", "Support Page", "SaaSNova | Support Page — Executive Review", "/tmp/sn-render/support.html", "support.html", support_sections, support_comments, is_in_reviews_folder=False)

