#!/usr/bin/env python3
import subprocess
import os

def get_mark_svg(size=240, color="#ffffff", accent="#92fb9e", bg=None):
    bg_tag = f'<rect width="{size}" height="{size}" fill="{bg}"/>' if bg else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="{size}" height="{size}" fill="none">
  {bg_tag}
  <g id="arxen-mark" stroke-linecap="round" stroke-linejoin="round">
    <!-- Outer Link Plates Left -->
    <path d="M 120 36 L 72 96" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 72 96 L 44 148" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 44 148 L 66 190" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    
    <!-- Inner Link Plates Left -->
    <path d="M 66 190 L 96 148" stroke="{color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 96 148 L 82 100" stroke="{color}" stroke-width="14" stroke-linecap="round"/>

    <!-- Outer Link Plates Right (Mirrored) -->
    <path d="M 120 36 L 168 96" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 168 96 L 196 148" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 196 148 L 174 190" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    
    <!-- Inner Link Plates Right -->
    <path d="M 174 190 L 144 148" stroke="{color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 144 148 L 158 100" stroke="{color}" stroke-width="14" stroke-linecap="round"/>

    <!-- Left Joints (Pivot Bosses & Holes) -->
    <circle cx="72" cy="96" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="72" cy="96" r="5" fill="#080a0a"/>

    <circle cx="44" cy="148" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="44" cy="148" r="5" fill="#080a0a"/>

    <circle cx="66" cy="190" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="66" cy="190" r="5" fill="#080a0a"/>

    <circle cx="96" cy="148" r="12" fill="#080a0a" stroke="{color}" stroke-width="5"/>
    <circle cx="96" cy="148" r="4.5" fill="#080a0a"/>

    <!-- Right Joints (Pivot Bosses & Holes) -->
    <circle cx="168" cy="96" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="168" cy="96" r="5" fill="#080a0a"/>

    <circle cx="196" cy="148" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="196" cy="148" r="5" fill="#080a0a"/>

    <circle cx="174" cy="190" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="174" cy="190" r="5" fill="#080a0a"/>

    <circle cx="144" cy="148" r="12" fill="#080a0a" stroke="{color}" stroke-width="5"/>
    <circle cx="144" cy="148" r="4.5" fill="#080a0a"/>

    <!-- Apex Main Joint Pivot -->
    <circle cx="120" cy="36" r="17" fill="#080a0a" stroke="{color}" stroke-width="6"/>
    <circle cx="120" cy="36" r="7.5" fill="{accent}" stroke="{color}" stroke-width="2"/>
    <circle cx="120" cy="36" r="2.5" fill="#080a0a"/>
  </g>
</svg>'''

def get_wordmark_lockup_svg(width=720, height=180, color="#ffffff", accent="#92fb9e"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 180" width="{width}" height="{height}" fill="none">
  <!-- Mark -->
  <g transform="translate(10, 10) scale(0.68)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 120 36 L 72 96" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 72 96 L 44 148" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 44 148 L 66 190" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    
    <path d="M 66 190 L 96 148" stroke="{color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 96 148 L 82 100" stroke="{color}" stroke-width="14" stroke-linecap="round"/>

    <path d="M 120 36 L 168 96" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 168 96 L 196 148" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 196 148 L 174 190" stroke="{color}" stroke-width="18" stroke-linecap="round"/>
    
    <path d="M 174 190 L 144 148" stroke="{color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 144 148 L 158 100" stroke="{color}" stroke-width="14" stroke-linecap="round"/>

    <circle cx="72" cy="96" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="72" cy="96" r="5" fill="#080a0a"/>
    <circle cx="44" cy="148" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="44" cy="148" r="5" fill="#080a0a"/>
    <circle cx="66" cy="190" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="66" cy="190" r="5" fill="#080a0a"/>
    <circle cx="96" cy="148" r="12" fill="#080a0a" stroke="{color}" stroke-width="5"/>
    <circle cx="96" cy="148" r="4.5" fill="#080a0a"/>

    <circle cx="168" cy="96" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="168" cy="96" r="5" fill="#080a0a"/>
    <circle cx="196" cy="148" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="196" cy="148" r="5" fill="#080a0a"/>
    <circle cx="174" cy="190" r="14" fill="#080a0a" stroke="{color}" stroke-width="5.5"/>
    <circle cx="174" cy="190" r="5" fill="#080a0a"/>
    <circle cx="144" cy="148" r="12" fill="#080a0a" stroke="{color}" stroke-width="5"/>
    <circle cx="144" cy="148" r="4.5" fill="#080a0a"/>

    <circle cx="120" cy="36" r="17" fill="#080a0a" stroke="{color}" stroke-width="6"/>
    <circle cx="120" cy="36" r="7.5" fill="{accent}" stroke="{color}" stroke-width="2"/>
    <circle cx="120" cy="36" r="2.5" fill="#080a0a"/>
  </g>

  <!-- Clean Precision Vector Glyph Paths for ARXEN -->
  <g transform="translate(190, 34)" fill="{color}">
    <!-- A -->
    <path d="M 45 78 L 33 78 L 27 60 L 9 60 L 3 78 L -9 78 L 12 18 L 24 18 Z M 18 31 L 12 50 L 24 50 Z" transform="translate(15,0)"/>
    <!-- R -->
    <path d="M 68 18 L 98 18 C 111 18 119 25 119 36 C 119 44 113 50 105 53 L 122 78 L 108 78 L 93 55 L 80 55 L 80 78 L 68 78 Z M 80 28 L 80 45 L 97 45 C 104 45 107 42 107 36.5 C 107 31 104 28 97 28 Z"/>
    <!-- X -->
    <path d="M 130 18 L 144 18 L 158 45 L 172 18 L 186 18 L 166 48 L 187 78 L 173 78 L 158 52 L 143 78 L 129 78 L 150 48 Z"/>
    <!-- E -->
    <path d="M 198 18 L 235 18 L 235 28 L 210 28 L 210 42 L 232 42 L 232 52 L 210 52 L 210 68 L 236 68 L 236 78 L 198 78 Z"/>
    <!-- N -->
    <path d="M 248 18 L 260 18 L 285 57 L 285 18 L 297 18 L 297 78 L 285 78 L 260 39 L 260 78 L 248 78 Z"/>
  </g>

  <!-- Subtitle: AI SYSTEMS -->
  <g transform="translate(206, 126)" fill="{color}" opacity="0.88">
    <text font-family="'DM Mono', 'Space Grotesk', -apple-system, sans-serif" font-size="19" font-weight="600" letter-spacing="10px">AI SYSTEMS</text>
  </g>
</svg>'''

def get_app_icon_svg(size=512, bg="#080a0a", mark_color="#ffffff", accent="#92fb9e"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="{size}" height="{size}" fill="none">
  <rect width="512" height="512" rx="100" fill="{bg}"/>
  <g transform="translate(68, 68) scale(1.56)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 120 36 L 72 96" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 72 96 L 44 148" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 44 148 L 66 190" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    
    <path d="M 66 190 L 96 148" stroke="{mark_color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 96 148 L 82 100" stroke="{mark_color}" stroke-width="14" stroke-linecap="round"/>

    <path d="M 120 36 L 168 96" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 168 96 L 196 148" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    <path d="M 196 148 L 174 190" stroke="{mark_color}" stroke-width="18" stroke-linecap="round"/>
    
    <path d="M 174 190 L 144 148" stroke="{mark_color}" stroke-width="16" stroke-linecap="round"/>
    <path d="M 144 148 L 158 100" stroke="{mark_color}" stroke-width="14" stroke-linecap="round"/>

    <circle cx="72" cy="96" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="72" cy="96" r="5" fill="{bg}"/>
    <circle cx="44" cy="148" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="44" cy="148" r="5" fill="{bg}"/>
    <circle cx="66" cy="190" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="66" cy="190" r="5" fill="{bg}"/>
    <circle cx="96" cy="148" r="12" fill="{bg}" stroke="{mark_color}" stroke-width="5"/>
    <circle cx="96" cy="148" r="4.5" fill="{bg}"/>

    <circle cx="168" cy="96" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="168" cy="96" r="5" fill="{bg}"/>
    <circle cx="196" cy="148" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="196" cy="148" r="5" fill="{bg}"/>
    <circle cx="174" cy="190" r="14" fill="{bg}" stroke="{mark_color}" stroke-width="5.5"/>
    <circle cx="174" cy="190" r="5" fill="{bg}"/>
    <circle cx="144" cy="148" r="12" fill="{bg}" stroke="{mark_color}" stroke-width="5"/>
    <circle cx="144" cy="148" r="4.5" fill="{bg}"/>

    <circle cx="120" cy="36" r="17" fill="{bg}" stroke="{mark_color}" stroke-width="6"/>
    <circle cx="120" cy="36" r="7.5" fill="{accent}" stroke="{mark_color}" stroke-width="2"/>
    <circle cx="120" cy="36" r="2.5" fill="{bg}"/>
  </g>
</svg>'''

def run_cmd(cmd):
    subprocess.run(cmd, check=True)

def main():
    logos_dir = "public/assets/logos"
    icons_dir = "public/icons"
    os.makedirs(logos_dir, exist_ok=True)
    os.makedirs(icons_dir, exist_ok=True)

    # 1. Main wordmark SVG
    wordmark_svg_path = f"{logos_dir}/logo-wordmark-white.svg"
    with open(wordmark_svg_path, "w") as f:
        f.write(get_wordmark_lockup_svg())
    print(f"Created {wordmark_svg_path}")

    # 2. Mark-only SVG
    mark_svg_path = f"{logos_dir}/logo-mark-white.svg"
    with open(mark_svg_path, "w") as f:
        f.write(get_mark_svg(size=240, color="#ffffff"))
    print(f"Created {mark_svg_path}")

    # 3. Favicon/app-icon SVG
    favicon_svg_path = f"{icons_dir}/favicon.svg"
    with open(favicon_svg_path, "w") as f:
        f.write(get_app_icon_svg(size=512, bg="#080a0a", mark_color="#ffffff", accent="#92fb9e"))
    print(f"Created {favicon_svg_path}")

    # Render PNGs using ffmpeg (which has librsvg built in)
    run_cmd(["ffmpeg", "-y", "-i", wordmark_svg_path, f"{logos_dir}/logo-wordmark-white.png"])
    run_cmd(["ffmpeg", "-y", "-i", mark_svg_path, f"{logos_dir}/logo-mark-white.png"])

    # Favicon sizes
    run_cmd(["ffmpeg", "-y", "-i", favicon_svg_path, "-vf", "scale=180:180", f"{icons_dir}/apple-touch-icon.png"])
    run_cmd(["ffmpeg", "-y", "-i", favicon_svg_path, "-vf", "scale=32:32", f"{icons_dir}/favicon-32.png"])
    run_cmd(["ffmpeg", "-y", "-i", favicon_svg_path, "-vf", "scale=16:16", f"{icons_dir}/favicon-16.png"])
    # Copy favicon 32 to root favicon.ico
    run_cmd(["cp", f"{icons_dir}/favicon-32.png", "public/favicon.ico"])

    print("All logos and icons generated successfully!")

if __name__ == "__main__":
    main()
