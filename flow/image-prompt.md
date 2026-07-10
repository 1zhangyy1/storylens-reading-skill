# Image Prompt Flow

Image stories are important to StoryLens. The goal is not to describe the image perfectly. The goal is to let a story form after a brief look.

## Presentation Priority

When presenting an image prompt, choose the best available method:

1. If the AI environment can display local files, show the local asset path from `data/image-manifest.v0.1.json`.
2. If local display is not available, provide the public URL.
3. If the public URL is unavailable, provide the fallback URL.
4. If no image access works, ask whether the user wants to skip image prompts or continue with the text-only prompts.

## User Instruction

Use this wording:

> Open the image and look at it for about 15 seconds. Then come back here and write a short story from memory.
>
> You do not need to describe the image or find the correct answer. Let the story go where your mind naturally takes it. You can include what happened before this moment, who the people are, what they are thinking or feeling, what they want, and what might happen next.

After the user responds, do not interpret the answer. Continue to the next prompt.

## Important

- Do not reveal hidden construct labels.
- Do not mention source norms or motive categories to the user during the session.
- Do not keep prompting the user to inspect details.
- If the user says they kept looking at the image while writing, accept the answer and continue.
