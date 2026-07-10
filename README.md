# StoryLens Reading Skill

<p>
  <a href="https://storylens.me/">Website</a>
  ·
  <a href="#中文介绍">中文介绍</a>
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

## 中文介绍

**StoryLens Reading Skill 是一套给 AI 助手使用的故事式心理理解流程。**

它不是一个传统意义上的「心理测试打分器」，也不是一个单独的网站应用。更准确地说，它是一套可以被 AI 助手读取和执行的 skill：里面包含引导流程、题库、图片刺激、作答整理模板、解读报告模板、使用边界和示例。AI 可以根据这些文件，一步步带用户完成一次 StoryLens 体验。

StoryLens 想解决的问题很简单：很多人格测试太像选择题了。用户需要在「更像 A 还是更像 B」之间做判断，但真实的人往往不是这么二元的。一个人在压力下怎么反应、在关系里怎么承担、遇到不确定性时怎么想、想要被怎样看见，这些东西很难只靠固定选项表达出来。

StoryLens 的做法是让用户写故事。用户会根据图片、日常场景、真实记忆和未来想象，写下几个短故事或开放回答。然后 AI 不直接给一个武断标签，而是先整理材料，再从多个回答里寻找反复出现的线索：动机、关系模式、压力模式、责任感、边界感、行动风格，以及一些类似 MBTI / 荣格八维 / 动机测试中会关心的倾向。

一句话概括：

> 先让用户给 AI 更好的上下文，再让 AI 给用户更好的自我理解。

### 它有什么价值

对用户来说，StoryLens 的价值不在于「测出一个标准答案」，而在于获得一份更有证据感的自我理解材料。相比直接问 AI「我是什么人格」，StoryLens 会先收集更丰富、更自然的表达，让 AI 有东西可读、有依据可引用，也更容易产生真正的 aha moment。

它适合这些场景：

- 想了解自己，但觉得传统量表太死板；
- 想和 AI 深聊 MBTI、荣格八维、动机模式、关系模式，但不知道怎么给上下文；
- 想做一次轻量、开放、不像考试的自我探索；
- 想把自己的故事整理成一份可以继续追问、继续讨论的材料包；
- 想做 journaling、coaching、反思、心理学兴趣探索或 AI 产品原型。

对开发者或创作者来说，这个仓库的价值是：你不需要从零设计一套开放式评测流程。它已经提供了一版可运行的核心体验，包括题目结构、图片素材、AI 引导方式、输出模板和安全边界。你可以把它放进支持 skill 的 AI 环境里，也可以参考它改造成自己的产品、机器人、工作流或研究原型。

### 它怎么工作

StoryLens Reading Skill 会让 AI 按照一个清晰的流程工作：

| 步骤 | 用户体验 | AI 需要做什么 |
| --- | --- | --- |
| 1. 开始前说明 | 用户知道这是自我理解，不是诊断或正式评分 | 说明流程、隐私边界、非临床用途 |
| 2. 开放式作答 | 用户根据图片和场景写短故事 | 一题一题引导，不提前解释隐藏意图 |
| 3. 整理材料包 | 用户的回答被整理成清晰上下文 | 保留原始表达、题目 ID、跳过项和上下文 |
| 4. 生成解读 | 用户得到一份基于证据的阅读 | 引用故事证据，提出假设，说明不确定性 |
| 5. 继续追问 | 用户可以问 MBTI、动机、关系等方向 | 用谨慎、可讨论的方式继续展开 |

核心不是「AI 猜你是谁」，而是「AI 基于你写下的故事，帮你读出一些可能反复出现的模式」。

### 这个 skill 包含什么

这个仓库包含一整套 StoryLens 核心材料：

- `SKILL.md`：AI 助手的入口文件，告诉 AI 怎么执行这个 skill。
- `storylens-core.md`：产品定位、语气、方法边界和使用原则。
- `flow/`：完整体验流程，包括图片题、开放题和解读生成。
- `data/item-bank.v0.1.json`：Core 10 题库。
- `data/image-manifest.v0.1.json`：图片路径、来源和授权信息。
- `templates/`：材料包、解读报告、分享卡片模板。
- `examples/maya.md`：一个虚构用户的完整示例。
- `assets/images/`：可随包使用的图片刺激和分享示例图。

所以它不只是几句 prompt，而是一套可以被复用、检查、迭代的产品化 AI 体验骨架。

### 如何使用

如果你的 AI 环境支持 skills，可以把整个文件夹安装或复制为：

```text
storylens-reading-skill
```

然后对 AI 说：

```text
请运行 StoryLens，带我完成一次故事式自我理解。
```

如果你的 AI 环境不支持 skill，也可以先把 `SKILL.md` 贴给 AI，再让它按文件说明读取 `storylens-core.md`、`flow/`、`data/` 和 `templates/`。

你也可以直接使用这段中文启动语：

```text
我想做一次 StoryLens 故事式自我理解。
请你一题一题引导我回答，最后把我的回答整理成材料包，并给出一份基于证据、保留不确定性的自我理解解读。
```

### 重要边界

StoryLens 可以帮助用户更好地理解自己，但它不应该被包装成诊断、治疗、招聘评估、风险筛查或官方人格评分。

它不输出官方 MBTI、荣格八维、Big Five、PSE 或 TAT 分数。它可以用这些体系里的语言作为讨论桥梁，但必须保持谨慎：所有结论都应该来自用户故事中的证据，并且允许用户反驳、修正和继续追问。

一个好的 StoryLens 解读应该像这样：

- 先引用用户自己的故事，而不是直接贴标签；
- 看多个题目里反复出现的模式，而不是抓住一句话过度解读；
- 区分「观察」「假设」和「不确定」；
- 提醒用户这只是自我理解，不是专业诊断；
- 鼓励用户继续提问，而不是把人定型。

### 适合怎么介绍给别人

如果你想用一句比较自然的话介绍它，可以这样说：

> StoryLens 是一个 AI 时代的故事式自我理解实验。它不让你做选择题，而是让你写几个短故事，再把这些故事整理成 AI 可以阅读的上下文，用来探索你的性格倾向、关系模式、动机和压力反应。

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
