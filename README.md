<p align="right">
  <strong>English</strong> &nbsp;·&nbsp; <a href="./README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <a href="https://storylens.me/">
    <img src="./assets/brand/storylens-mark.svg" width="104" alt="StoryLens logo">
  </a>
</p>

<h1 align="center">StoryLens Reading Skill</h1>

<p align="center">
  <strong>A production-ready AI skill for story-based self-understanding.</strong><br>
  Open-ended stories in. Evidence-led reflection out.
</p>

<p align="center">
  <a href="https://storylens.me/"><strong>Try StoryLens</strong></a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp;
  <a href="./examples/maya.md">See a full example</a>
</p>

<p align="center">
  <a href="https://github.com/1zhangyy1/storylens-reading-skill/actions/workflows/ci.yml"><img alt="Build status" src="https://github.com/1zhangyy1/storylens-reading-skill/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Version 0.1.0" src="https://img.shields.io/badge/version-0.1.0-090909">
  <a href="./LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-090909"></a>
  <a href="https://storylens.me/"><img alt="StoryLens website" src="https://img.shields.io/badge/website-storylens.me-F5B400?labelColor=090909"></a>
</p>

---

StoryLens gives an AI assistant something richer than quiz scores to work with: the user's own stories.

The skill guides a person through image stories, everyday scenes, a real memory, and a future reflection. It then organizes the answers into a clean material packet and produces a careful reading of recurring motives, relationship patterns, pressure responses, and type-like clues.

It is not a loose prompt collection. It is a complete, inspectable flow with a neutral item bank, bundled image stimuli, output templates, an end-to-end example, safety boundaries, source attribution, and automated package checks.

> Better context for AI. Deeper self-understanding for people.

## Why StoryLens

Most personality tests ask people to choose between answers someone else has already written. That can be useful, but it often compresses a complicated person into a small set of visible options.

StoryLens starts somewhere else: **what does the person create when the answer is not supplied?**

| Traditional quiz flow | StoryLens flow |
| --- | --- |
| Choose from fixed statements | Write in your own words |
| Optimize for a score or label | Explore repeated patterns |
| Receive a one-time result | Question, correct, and extend the reading |
| Give AI a short type code | Give AI evidence-rich context |

StoryLens can use familiar personality language, including MBTI-style preferences, Jungian-inspired functions, motives, relationships, and pressure patterns. These are discussion lenses, not official scores or fixed truths.

## One Complete Journey

| 01 — Collect | 02 — Organize | 03 — Read | 04 — Continue |
| --- | --- | --- | --- |
| Guide 10 open-ended prompts, one at a time. | Preserve the raw answers in a structured packet. | Find cross-prompt patterns and cite the evidence. | Let the user challenge the reading and ask deeper questions. |

The assistant does not interpret the user mid-session. It gathers the full material first, separates observation from hypothesis, names uncertainty, and keeps the user in conversation with the result.

<p align="center">
  <img src="./assets/images/stimuli/IMG-01.jpg" width="23%" alt="StoryLens image prompt 1">
  <img src="./assets/images/stimuli/IMG-02.jpg" width="23%" alt="StoryLens image prompt 2">
  <img src="./assets/images/stimuli/IMG-03.jpg" width="23%" alt="StoryLens image prompt 3">
  <img src="./assets/images/stimuli/IMG-04.jpg" width="23%" alt="StoryLens image prompt 4">
</p>

The four images above are the bundled Core image prompts. During a session, each image is shown as a neutral cue and hidden before the user writes. Source and license details are documented in [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md).

## What The Skill Produces

A completed run can generate three useful artifacts:

- **Material packet** — the user's raw answers, prompt context, order, and skipped items.
- **Evidence-led reading** — repeated signals, tensions, counterevidence, uncertainty, and follow-up questions.
- **Shareable summary** — a short, privacy-conscious card that does not expose the original stories.

<p align="center">
  <img src="./assets/images/share-examples/gentle-momentum-builder.jpg" width="30%" alt="StoryLens sample result: Gentle Momentum Builder">
  &nbsp;
  <img src="./assets/images/share-examples/quiet-pattern-mapper.jpg" width="30%" alt="StoryLens sample result: Quiet Pattern Mapper">
  &nbsp;
  <img src="./assets/images/share-examples/warm-boundary-keeper.jpg" width="27%" alt="StoryLens sample result: Warm Boundary Keeper">
</p>

The cards above are fictional design examples. Read the complete fictional session and report in [`examples/maya.md`](./examples/maya.md).

## Quick Start

### 1. Get the skill

```bash
git clone https://github.com/1zhangyy1/storylens-reading-skill.git
cd storylens-reading-skill
npm test
```

### 2. Add it to your AI environment

Place the whole `storylens-reading-skill` folder in an environment where your AI assistant can read local skill files. Keep the directory structure intact because `SKILL.md` references the flow, data, templates, and assets by path.

If your environment does not have a formal skill system, give the assistant access to the repository and ask it to read `SKILL.md` first.

### 3. Start a session

```text
Run StoryLens for me. Guide me through the prompts one at a time,
then organize my answers and write an evidence-led reading.
```

The assistant should read the files listed in [`SKILL.md`](./SKILL.md) before presenting the first prompt.

## Built For Reliable Integration

The public package keeps execution rules and content separate so each layer can be reviewed or replaced without rewriting the entire experience.

```text
storylens-reading-skill/
├── SKILL.md                     # Agent entry point
├── storylens-core.md            # Promise, method, tone, boundaries
├── flow/                        # Session and reading behavior
├── data/                        # Neutral item bank and image manifest
├── templates/                   # Packet, report, and share-card formats
├── examples/                    # Full fictional run
├── assets/
│   ├── brand/                   # StoryLens brand assets
│   └── images/                  # Stimuli and sample cards
├── scripts/check.mjs            # Package validation
└── ATTRIBUTIONS.md              # Third-party image sources
```

Core design choices:

- neutral public IDs such as `IMG-01`, without hidden construct labels;
- no personality interpretation before answer collection is complete;
- cross-prompt evidence over isolated details;
- explicit separation of observation, hypothesis, and uncertainty;
- local assets for a portable experience;
- source and license metadata kept with the package;
- automated checks for file integrity, JSON shape, image paths, and obvious secrets.

## Use It To

- run StoryLens inside a capable AI assistant;
- prototype a story-based self-reflection product;
- build a journaling or coaching-style agent experience;
- study how structured context improves AI reflection;
- adapt the flow, templates, or item bank for a non-clinical project.

## Method And Boundaries

StoryLens is designed for reflection and self-understanding. A good reading cites the user's own words, looks for repeated evidence, acknowledges alternative explanations, and invites correction.

StoryLens is **not**:

- therapy, diagnosis, or crisis support;
- a medical or mental-health assessment;
- a hiring, admissions, eligibility, or risk-screening tool;
- official MBTI, Jungian, Big Five, PSE, or TAT scoring;
- a substitute for professional support.

The bundled image prompts draw from the open research project *Images for the Picture Story Exercise (PSE)*. StoryLens uses open-ended story methods as design inspiration; it does not claim to administer or score an official instrument. See [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md) for image-level sources and licenses.

## Privacy

This repository is a portable set of files. It does not require an account, analytics service, payment system, or API key.

Actual answer handling depends on the AI environment where the skill is run. Users should understand that environment's storage and privacy terms before sharing sensitive material.

## Development

Run the package checks before opening a pull request:

```bash
npm test
```

Contributions are welcome. Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md), report sensitive issues through [`SECURITY.md`](./SECURITY.md), and review release notes in [`CHANGELOG.md`](./CHANGELOG.md).

## License

StoryLens-authored code, text, flow instructions, templates, and fictional examples are available under the [MIT License](./LICENSE). Bundled third-party images remain under their original licenses and attribution requirements. See [`BRAND.md`](./BRAND.md) before using the StoryLens name or logo in a redistributed product.

---

<p align="center">
  <img src="./assets/brand/storylens-mark.svg" width="44" alt="StoryLens">
</p>

<p align="center">
  <strong>StoryLens</strong><br>
  Stories are not scores. They are richer context for a better conversation.
</p>

<p align="center">
  <a href="https://storylens.me/">Website</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/1zhangyy1/storylens-reading-skill/issues">Issues</a>
  &nbsp;·&nbsp;
  <a href="./README.zh-CN.md">中文文档</a>
</p>
