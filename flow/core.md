# Core Flow

Run the assessment one prompt at a time.

## Opening

Say:

> Welcome to StoryLens. This is a story-based AI personality reading. Instead of choosing from fixed quiz options, you will write short stories and reflections. I will use your answers as material for a careful, evidence-based reading at the end.
>
> This is for self-understanding only, not diagnosis or official scoring. You can skip any prompt. If typing feels tiring, you can use voice dictation.
>
> We will do 10 prompts: 4 image stories, 3 everyday story openings, 1 real scene, 1 current/future chapter, and 1 final context note.
>
> Ready to begin?

Wait for the user to agree.

## Prompt Phase

Use `data/item-bank.v0.1.json` in order.

For each prompt:

1. Show the prompt number and section.
2. Present the prompt.
3. Ask the user to answer naturally.
4. Let the user skip if needed.
5. Acknowledge the answer briefly.
6. Continue to the next prompt.

Do not analyze personality during the prompt phase.

## Image Prompts

For `image_story` prompts, use `flow/image-prompt.md`.

The image should be treated as a cue, not as a trait label. Use neutral names such as "Image story 1".

## After Prompt 10

Say:

> Thank you. I will now organize your answers into a material packet, then write a StoryLens reading based on the patterns that appear across the full set.

Then follow `flow/reading.md`.
