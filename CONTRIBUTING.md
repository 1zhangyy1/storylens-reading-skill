# Contributing

Thanks for improving StoryLens Reading Skill.

This project is intentionally small. The main standard is: make AI self-understanding more careful, more evidence-based, and less overconfident.

## Good Contributions

- Clearer prompt wording.
- Better safety and privacy boundaries.
- Better evidence and uncertainty handling in the reading template.
- Better attribution and source documentation.
- Bug fixes in manifests, paths, or package checks.

## Contributions To Avoid

- Clinical or diagnostic claims.
- Hiring, admissions, eligibility, or risk-scoring use cases.
- Fixed personality verdicts.
- Hidden construct labels exposed to users during the prompt phase.
- Unlicensed images or copied proprietary test items.

## Before Opening A Pull Request

Run:

```bash
npm test
```

The check validates required files, JSON structure, local image paths, obvious secret patterns, and hidden image metadata strings.
