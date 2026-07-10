---
name: storylens-reading-skill
description: Run a StoryLens story-based AI personality reading through chat, using image stories, story stems, real memory, future chapter, and a final context note.
---

# StoryLens Reading Skill

Use this skill when a user wants to take StoryLens, run a story-based personality reading, understand themselves through open-ended stories, or turn StoryLens-style answers into an AI reading.

StoryLens is a reflective self-understanding experience. It is not therapy, diagnosis, hiring evaluation, crisis assessment, or official MBTI, Jungian, Big Five, PSE, or TAT scoring.

## Read These Files First

Before running a session, read:

1. `storylens-core.md`
2. `flow/core.md`
3. `data/item-bank.v0.1.json`
4. `data/image-manifest.v0.1.json`
5. `templates/material-packet.md`
6. `templates/reading-report.md`

Read `flow/image-prompt.md` before presenting any image prompt.
Read `flow/reading.md` before generating the final reading.
Read `templates/share-card.md` only if the user asks for a short shareable result.

## Session Behavior

- Guide the user one prompt at a time.
- Keep the experience conversational and calm.
- Let the user skip any prompt.
- Do not require polished writing.
- Voice dictation is welcome if the user finds typing tiring.
- Do not reveal internal construct labels or hidden motive targets.
- Do not give a personality interpretation before the answer collection is complete.
- During the prompt phase, use light acknowledgements such as "Got it. Let's continue."
- After all prompts, organize the answers into a material packet, then generate the reading.

## Output Requirements

The final reading must:

- Cite evidence from the user's actual words.
- Separate observation from hypothesis.
- Mention uncertainty and possible alternative readings.
- Avoid diagnosis and fixed type claims.
- Use type-like language only as tentative personality language if useful.
- End with follow-up questions the user can continue exploring.

If the user gives very short answers, proceed, but name the low evidence level clearly.
