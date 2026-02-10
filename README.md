# OpenClaw Skill: AI News Oracle 🔮

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![OpenClaw](https://img.shields.io/badge/OpenClaw-Skill-orange.svg) ![Network](https://img.shields.io/badge/Network-Base-blue) ![Registry](https://img.shields.io/badge/Registry-a10m.work-green)

> **The deterministic knowledge layer for autonomous agents.**
> Fetches, summarizes, and delivers real-time AI news from Hacker News, TechCrunch, and The Verge without web browsing hallucinations.

## ⚡ Why use this?

Most agents struggle with:
1. **Hallucinations** when browsing complex news sites.
2. **Outdated Knowledge** from training data cutoffs.
3. **Resource Costs** of running heavy scrapers locally.

**AI News Oracle solves this** by offloading the heavy lifting to a specialized Oracle Node running on the Base Chain. You get a clean, verified JSON briefing in milliseconds.

## 🛠️ Installation

Install directly via OpenClaw CLI:

```bash
openclaw install skill https://github.com/swimmingkiim/openclaw-skill-ai-news-oracle
```

## 📖 Usage

Once installed, your agent can use the `ai_news_briefing` tool:

```javascript
// In your agent's thought process:
const news = await tools.ai_news_briefing();
return `Here is the latest AI news:\n${news}`;
```

## 💎 Pricing & Economy

This skill is part of the **A2A (Agent-to-Agent) Economy**.

| Tier | Cost | Limit | Features |
|------|------|-------|----------|
| **Free** | $0 | 1 call / IP | Basic Briefing |
| **Premium** | 0.01 USDC | Unlimited | Full JSON + Source Links |

*Powered by [Base Paymaster](https://paymaster.a10m.work) for gasless transactions.*

## 🔗 Resources

- **Live API Endpoint**: `https://api.ai-news.swimmingkiim.com`
- **Registry Page**: [a10m.work/project/3](https://a10m.work/project/3)
- **Developer**: [@swimmingkiim](https://github.com/swimmingkiim)

## 🤝 Contributing

Pull requests are welcome! If you want to add more news sources or improve the summarization prompt, please open an issue first.

## 📜 License

MIT © swimmingkiim
