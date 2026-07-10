# Open Source Checklist

Use this before publishing `storylens-reading-skill` as a standalone public repository.

## Package Scope

Publish only this folder:

```text
storylens-reading-skill/
```

Do not include the full StoryLens product repository, deployment files, analytics scripts, payment functions, pilot trackers, local environment files, or private research notes.

## Required Files

- `README.md`
- `SKILL.md`
- `LICENSE`
- `ATTRIBUTIONS.md`
- `storylens-core.md`
- `flow/`
- `data/`
- `templates/`
- `examples/`
- `assets/images/`

## Pre-Publish Checks

Run these from the StoryLens repo root:

```bash
node -e "JSON.parse(require('fs').readFileSync('reference/skills/storylens-reading-skill/data/item-bank.v0.1.json', 'utf8')); JSON.parse(require('fs').readFileSync('reference/skills/storylens-reading-skill/data/image-manifest.v0.1.json', 'utf8')); console.log('json ok')"

find reference/skills/storylens-reading-skill -type f ! -name 'OPEN_SOURCE_CHECKLIST.md' -print0 \
  | xargs -0 rg -n "api[_-]?key|secret|token|password|paypal|resend|posthog|gmail|client_secret|cfut_|phx_|phc_|re_[A-Za-z0-9]" -S
```

Expected result:

- JSON check prints `json ok`.
- Secret scan should return no real credentials.
- Mentions of `paypal`, `resend`, or `posthog` should not appear in this skill package.

## Image Checks

The bundled images should have camera/copyright EXIF removed. Attribution belongs in `ATTRIBUTIONS.md`, not hidden metadata.

Check image bytes directly:

```bash
for f in reference/skills/storylens-reading-skill/assets/images/stimuli/*.jpg reference/skills/storylens-reading-skill/assets/images/share-examples/*.jpg; do
  strings -a "$f" | rg -n "Department|Canon|Stephen|O'Brien|2011|Pete|EXIF|Exif|Flickr|Copyright|DFID" -i
done
```

Expected result:

- No matches from the image files themselves.
- Required credits should still be visible in `ATTRIBUTIONS.md`.

macOS `mdls` can show stale Spotlight metadata after rewrites, so prefer the direct byte scan above for release checks.

## Suggested GitHub Description

```text
Story-based AI self-understanding skill: guide open-ended stories into an evidence-based personality reading.
```

## Suggested Topics

```text
ai
self-understanding
personality
storytelling
prompt-engineering
ai-skill
reflection
open-ended-assessment
```

## Launch Copy

Short:

> StoryLens Reading Skill turns short open-ended stories into a careful AI self-understanding reading. It is not a quiz, not diagnosis, and not official psychometric scoring; it is a transparent story-based reflection flow.

Long:

> I open-sourced the StoryLens Reading Skill: a portable AI skill that guides someone through image stories, everyday scenes, a real memory, and a future chapter, then asks AI to generate an evidence-based reading from the material. The goal is to make AI personality reflection less like fixed-choice quizzes and more like a careful conversation with your own stories.
