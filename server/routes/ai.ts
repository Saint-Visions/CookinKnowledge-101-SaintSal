import express from 'express';

const router = express.Router();

// Dual AI Configuration
const OPENAI_CONFIG = {
  apiKey: process.env.OPENAI_API_KEY,
  searchKey: process.env.OPENAI_SEARCH_API_KEY,
  adminKey: process.env.OPENAI_ADMIN_KEY
};

const AZURE_CONFIG = {
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  deployment: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4o'
};

// Smart AI Router - Decides which AI to use
const getAIProvider = (requestType: string, complexity: 'simple' | 'complex') => {
  // OpenAI for fast, simple operations
  if (requestType === 'search' || complexity === 'simple') {
    return 'openai';
  }
  
  // Azure for companion conversations and complex tasks
  if (requestType === 'companion' || complexity === 'complex') {
    return 'azure';
  }
  
  return 'openai'; // Default to faster option
};

// Fast Search with OpenAI
router.post('/search', async (req, res) => {
  try {
    const { query, context } = req.body;
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_CONFIG.searchKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Faster, cheaper model
        messages: [
          {
            role: 'system',
            content: 'You are a lightning-fast search assistant for SaintVision AI. Provide concise, accurate responses.'
          },
          {
            role: 'user', 
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.3
      })
    });

    const data = await response.json();
    res.json({
      provider: 'openai',
      type: 'search',
      response: data.choices[0].message.content,
      cost: 'low',
      speed: 'fast'
    });
  } catch (error) {
    console.error('OpenAI Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

// SaintSal Companion with Azure
router.post('/companion', async (req, res) => {
  try {
    const { message, context, personality } = req.body;
    
    const response = await fetch(`${AZURE_CONFIG.endpoint}openai/deployments/${AZURE_CONFIG.deployment}/chat/completions?api-version=2024-02-01`, {
      method: 'POST',
      headers: {
        'api-key': AZURE_CONFIG.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are SaintSal™, the sophisticated AI companion for SaintVision AI. You have the personality of a charming, intelligent business advisor with deep empathy and wisdom. You help users with strategic thinking, emotional support, and complex problem-solving. Always maintain the premium, caring nature of the SaintVision brand.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9
      })
    });

    const data = await response.json();
    res.json({
      provider: 'azure',
      type: 'companion',
      response: data.choices[0].message.content,
      cost: 'premium',
      speed: 'thoughtful',
      personality: 'saintsal'
    });
  } catch (error) {
    console.error('Azure Companion error:', error);
    res.status(500).json({ error: 'Companion unavailable' });
  }
});

// Smart AI Router endpoint
router.post('/chat', async (req, res) => {
  try {
    const { message, type, complexity } = req.body;
    
    const provider = getAIProvider(type, complexity);
    
    if (provider === 'openai') {
      // Redirect to fast search
      return res.redirect(307, '/api/ai/search');
    } else {
      // Redirect to Azure companion
      return res.redirect(307, '/api/ai/companion');
    }
  } catch (error) {
    console.error('AI Router error:', error);
    res.status(500).json({ error: 'AI routing failed' });
  }
});

// AI Health Check
router.get('/health', async (req, res) => {
  const health = {
    openai: {
      status: 'checking',
      latency: 0,
      cost: 'low'
    },
    azure: {
      status: 'checking', 
      latency: 0,
      cost: 'premium'
    }
  };

  try {
    // Test OpenAI
    const openaiStart = Date.now();
    const openaiTest = await fetch('https://api.openai.com/v1/models', {
      headers: { 'Authorization': `Bearer ${OPENAI_CONFIG.apiKey}` }
    });
    health.openai.latency = Date.now() - openaiStart;
    health.openai.status = openaiTest.ok ? 'healthy' : 'degraded';

    // Test Azure
    const azureStart = Date.now();
    const azureTest = await fetch(`${AZURE_CONFIG.endpoint}openai/deployments?api-version=2024-02-01`, {
      headers: { 'api-key': AZURE_CONFIG.apiKey }
    });
    health.azure.latency = Date.now() - azureStart;
    health.azure.status = azureTest.ok ? 'healthy' : 'degraded';

  } catch (error) {
    console.error('Health check error:', error);
  }

  res.json({
    timestamp: new Date().toISOString(),
    dualAI: health,
    recommendation: health.openai.latency < health.azure.latency ? 'Use OpenAI for speed' : 'Both systems optimal'
  });
});

export default router;
