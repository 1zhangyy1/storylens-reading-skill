# StoryLens Reading Skill

<p>
  <a href="https://storylens.me/">Website</a>
  ·
  <a href="#quick-start">Quick Start</a>
  ·
  <a href="#example-output">Example Output</a>
  ·
  <a href="#license-and-attribution">License</a>
</p>

<p>
  <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-black">
  <img alt="Version 0.1.0" src="https://img.shields.io/badge/version-0.1.0-black">
  <img alt="Story-based AI reflection" src="https://img.shields.io/badge/AI-story--based%20reflection-f5b400">
</p>

<p>
  <img src="assets/images/share-examples/warm-boundary-keeper.jpg" alt="StoryLens sample share card: Warm Boundary Keeper" width="360" />
</p>

**StoryLens Reading Skill turns open-ended stories into an evidence-based AI self-understanding reading.**

It is a portable AI skill for people who want something deeper than fixed-choice personality quizzes. Instead of answering "agree / disagree" statements, the user writes short stories from images, everyday scenes, a real memory, and a future reflection. The AI then reads across the material for repeated motives, relationship patterns, pressure responses, and type-like clues.

The promise is simple:

> Better input for AI. Better self-understanding for the user.

StoryLens is not therapy, diagnosis, hiring evaluation, crisis assessment, or official MBTI, Jungian, Big Five, PSE, or TAT scoring. It is a reflective self-understanding experience.

## Why StoryLens

Most personality tests force people into predefined choices.

StoryLens gives AI richer material:

- short image stories;
- everyday social scenes;
- one real memory;
- a current and future chapter;
- a final context note so the reading does not flatten the person.

The result is not a score. It is a careful first reading that the user can question, correct, and continue exploring.

## What The Skill Does

This package lets an AI assistant run the StoryLens core experience inside a chat interface.

| Step | What happens |
| --- | --- |
| 1. Orient | The assistant explains the flow, privacy boundary, and non-clinical use. |
| 2. Collect | The user answers 10 open-ended prompts one at a time. |
| 3. Organize | The assistant turns the answers into a structured material packet. |
| 4. Read | The assistant writes a StoryLens reading with evidence, uncertainty, and follow-up questions. |

The package includes local image assets, so it can run as a complete skill when the AI environment supports local files.

## Quick Start

If your AI environment supports skills, install or copy this folder as:

```text
storylens-reading-skill
```

Then ask:

```text
Run StoryLens for me.
```

If your AI environment does not support skills, paste `SKILL.md` first and ask the assistant to read the referenced files in order.

## Try This Prompt

```text
I want to do a StoryLens reading.
Guide me through the prompts one at a time.
After I answer, organize my material and write an evidence-based reading.
```

## Example Output

StoryLens does not start with a label. It starts with patterns in the user's own stories.

```md
## Gentle Momentum Builder

"You often steady the room first, then turn uncertainty into the next workable step."

Top signals:
- Repair before blame
- Responsibility as containment
- Sensitivity to social atmosphere

Main tension:
You can create safety and momentum for others, but may wait too long to name what you are carrying.
```

See [`examples/maya.md`](examples/maya.md) for a full fictional end-to-end run.

## What Makes A Good Reading

A StoryLens reading should:

- cite specific evidence from the user's stories;
- look for repeated patterns across multiple prompts;
- separate observation from hypothesis;
- name uncertainty and alternative readings;
- include counterevidence or limits;
- avoid diagnosis, fixed type claims, and mystical certainty;
- use MBTI-style or Jungian-inspired language only as a tentative bridge when helpful;
- end with follow-up questions.

If the user gives very short answers, the assistant should still proceed, but clearly state that the evidence level is low.

## What's Included

```text
storylens-reading-skill/
  SKILL.md
  storylens-core.md
  flow/
  data/
  templates/
  examples/
  assets/images/
  README.md
  LICENSE
  ATTRIBUTIONS.md
```

Core files:

- [`SKILL.md`](SKILL.md) - entry point and execution rules.
- [`storylens-core.md`](storylens-core.md) - product promise, tone, method, and boundaries.
- [`flow/core.md`](flow/core.md) - full session flow.
- [`flow/image-prompt.md`](flow/image-prompt.md) - image prompt handling.
- [`flow/reading.md`](flow/reading.md) - material packet and reading generation.
- [`data/item-bank.v0.1.json`](data/item-bank.v0.1.json) - Core 10 prompt bank.
- [`data/image-manifest.v0.1.json`](data/image-manifest.v0.1.json) - local image paths, public URLs, and source metadata.
- [`templates/material-packet.md`](templates/material-packet.md) - organized answer packet.
- [`templates/reading-report.md`](templates/reading-report.md) - final reading format.
- [`templates/share-card.md`](templates/share-card.md) - optional shareable summary.

## Included Image Prompts

The image prompts use neutral labels such as `IMG-01` and `Image story 1`. Do not reveal motive labels, construct labels, or hidden target interpretations to the user during the session.

The four bundled stimulus images are from the OSF project **Images for the Picture Story Exercise (PSE)**.

| ID | Bundled file | Original OSF file | Source / license note |
| --- | --- | --- | --- |
| `IMG-01` | `assets/images/stimuli/IMG-01.jpg` | [`newpic22.jpg`](https://osf.io/download/xnygk/) | OSF PSE image pool; Pexels source; CC0 as listed in the StoryLens source manifest |
| `IMG-02` | `assets/images/stimuli/IMG-02.jpg` | [`newpic24.jpg`](https://osf.io/download/emqjs/) | OSF PSE image pool; Pexels source; CC0 as listed in the StoryLens source manifest |
| `IMG-03` | `assets/images/stimuli/IMG-03.jpg` | [`newpic12.jpg`](https://osf.io/download/9n3fs/) | OSF PSE image pool; Flickr source; CC-BY as listed in the StoryLens source manifest; credit: Pete Lewis / Department for International Development (UK), via Flickr |
| `IMG-04` | `assets/images/stimuli/IMG-04.jpg` | [`newpic10.jpg`](https://osf.io/download/qx796/) | OSF PSE image pool; Flickr / National Media Museum source; public domain as listed in the StoryLens source manifest |

Full source notes are in [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md).

## What This Is Not

StoryLens is not:

- therapy;
- diagnosis;
- a medical or mental health assessment;
- a hiring, admissions, eligibility, or risk-screening tool;
- official MBTI, Jungian, Big Five, PSE, or TAT scoring;
- a substitute for professional support.

Use it for reflection, journaling, self-understanding, coaching-style conversation, and AI-assisted pattern exploration.

## Privacy

This package does not require accounts, servers, payment, analytics, or API keys. It is just a portable prompt-and-template package.

The user's answers may still be processed by whichever AI assistant or platform they choose to use. Users should avoid entering highly sensitive information unless they trust that environment.

## Development

Run package checks:

```bash
npm test
```

The check validates:

- required files;
- JSON structure;
- local image paths;
- obvious secret patterns;
- hidden image metadata strings.

## License And Attribution

StoryLens-authored text, flow instructions, templates, and fictional examples are released under the MIT License. See [`LICENSE`](LICENSE).

Bundled third-party image stimuli remain under their original licenses. See [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md).

## Project

StoryLens website: https://storylens.me/

Canonical positioning:

> StoryLens is a story-based AI self-understanding experience. It turns an open-ended story session into organized context for deeper AI reflection.
