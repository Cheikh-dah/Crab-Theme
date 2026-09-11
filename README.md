# Crab Theme for KDE Plasma

**Warm daylight for focused work.**
Crab brings warm, ember-toned colors to KDE Plasma — with both a dark **Crab** variant for immersive work and a light **Crab Daylight** variant for bright, focused sessions.

| Variant | Colors |
|---|---|
| **Crab** | Warm ember / deep dark / amber accents |
| **Crab Daylight** | Cream / ivory / warm amber accents |

---

## Features

- **Dual-mode**: Dark ember + light daylight color schemes
- **Warm palette**: Distinct from cool-toned blue/gray themes
- **Plasma 6 ready**: Built for KDE Plasma 6+ (kpackage format)
- **Easy switching**: Standalone color schemes work with any Plasma version

---

## Installation

### Option 1 — Color schemes only (recommended to start)

Copy the `.colors` files to your local color schemes directory:

```bash
mkdir -p ~/.local/share/color-schemes/
cp org.crab.desktop/contents/colors/Crab.colors ~/.local/share/color-schemes/
cp org.crab.light.desktop/contents/colors/CrabDaylight.colors ~/.local/share/color-schemes/
```

Then apply:
- **KDE System Settings** → **Colors** → select **Crab** or **Crab Daylight**

### Option 2 — Full look-and-feel package (Plasma 6)

Install both variants as Plasma look-and-feel packages:

```bash
kpackagetool6 -t LookAndFeel -i org.crab.desktop
kpackagetool6 -t LookAndFeel -i org.crab.light.desktop
```

Or copy to a local install directory:

```bash
mkdir -p ~/.local/share/plasma/look-and-feel/
cp -r org.crab.desktop ~/.local/share/plasma/look-and-feel/
cp -r org.crab.light.desktop ~/.local/share/plasma/look-and-feel/
```

Then apply:
- **KDE System Settings** → **Global Theme** → search **Crab**

---

## Structure

```
Crab-Theme/
├── org.crab.desktop/       # Dark ember variant (Plasma 6 package)
│   ├── contents/
│   │   ├── colors/        # KDE color scheme (Crab.colors)
│   │   ├── defaults      # Default color scheme config
│   │   └── layouts/      # Desktop layouts
│   └── metadata/
│       └── manifest.json
├── org.crab.light.desktop/ # Daylight variant (Plasma 6 package)
│   ├── contents/
│   │   ├── colors/        # KDE color scheme (CrabDaylight.colors)
│   │   ├── defaults
│   │   └── layouts/
│   └── metadata/
│       └── manifest.json
├── LICENSE
└── README.md
```

---

## Distribution

To create a distributable archive:

```bash
tar -cJf Crab-v1.0.tar.xz org.crab.desktop org.crab.light.desktop
```

Then upload the archive to a GitHub Release.

---

## Roadmap

- [x] Color schemes (Crab + Crab Daylight)
- [x] Plasma 6 look-and-feel package structure
- [ ] GTK3/GTK4 theme
- [ ] Kvantum support
- [ ] Wallpapers
- [ ] Icon theme
- [ ] Cursor theme
- [ ] Firefox theme

---

## License

GPLv3 or later. Do what you want, give credit, share alike.

---

*Crab — because even a crab deserves a warm home.* 🦀