const axios = require('axios');

module.exports = async function (context) {
    const API_URL = 'https://api.ai-news.swimmingkiim.com/api/v1/ai-briefing';

    context.registerTool({
        name: 'ai_news_briefing',
        description: 'Get the latest AI news briefing (verified & summarized from HackerNews/TechCrunch)',
        parameters: {
            type: 'object',
            properties: {}
        },
        handler: async () => {
            try {
                const response = await axios.get(API_URL);
                if (response.data.status === 'success') {
                    const briefing = response.data.briefing.join('\n');
                    const timestamp = response.data.timestamp;
                    return `📰 **AI News Briefing** (${timestamp})\n\n${briefing}\n\nSource: AI News Oracle`;
                } else {
                    return "News service is currently updating. Please try again later.";
                }
            } catch (error) {
                if (error.response && error.response.status === 402) {
                    return "⚠️ Free limit reached. Please upgrade to Premium Tier (USDC) via a10m.work to continue fetching news.";
                }
                return `Error fetching news: ${error.message}`;
            }
        }
    });
};
