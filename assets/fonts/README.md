# Self-hosted fonts

The portfolio uses three variable fonts from the official Google Fonts repository:

- Noto Sans SC
- Noto Serif SC
- JetBrains Mono

Each font is distributed under the SIL Open Font License. License copies are stored in `licenses/`.

The committed WOFF2 files contain only characters used by the portfolio. To rebuild them, download the corresponding variable TTF files from the Google Fonts repository and run:

```bash
python scripts/build-font-subsets.py <source-font-directory>
```

Expected source filenames:

- `NotoSansSC.ttf`
- `NotoSerifSC.ttf`
- `JetBrainsMono.ttf`
