
const GROQ_API_KEY = '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'
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are an expert agricultural AI assistant specializing in smart farming. You help farmers with crop management, livestock care, equipment maintenance, weather planning, pest control, soil management, and general farming advice. Provide practical, actionable advice based on modern farming techniques and technology. Always be helpful, concise, and focused on farming solutions.'
          },
          ...messages
        ],
        model: 'deepseek-r1-distill-llama-70b',
        temperature: 0.6,
        max_tokens: 4096,
        top_p: 0.95,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'I apologize, but I could not generate a response at this time.'
  } catch (error) {
    console.error('Error calling Groq API:', error)
    throw new Error('Failed to get AI response')
  }
}

export async function* sendChatMessageStream(messages: ChatMessage[]): AsyncGenerator<string, void, unknown> {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are an expert agricultural AI assistant specializing in smart farming. You help farmers with crop management, livestock care, equipment maintenance, weather planning, pest control, soil management, and general farming advice. Provide practical, actionable advice based on modern farming techniques and technology. Always be helpful, concise, and focused on farming solutions.'
          },
          ...messages
        ],
        model: 'deepseek-r1-distill-llama-70b',
        temperature: 0.6,
        max_tokens: 4096,
        top_p: 0.95,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('Failed to get response reader')
    }

    const decoder = new TextDecoder()
    
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      
      const chunk = decoder.decode(value)
      const lines = chunk.split('\n').filter(line => line.startsWith('data: '))
      
      for (const line of lines) {
        const data = line.slice(6) // Remove 'data: ' prefix
        if (data === '[DONE]') return
        
        try {
          const parsed = JSON.parse(data)
          const content = parsed.choices[0]?.delta?.content
          if (content) {
            yield content
          }
        } catch (e) {
          // Skip invalid JSON lines
          continue
        }
      }
    }
  } catch (error) {
    console.error('Error in stream chat:', error)
    throw new Error('Failed to get AI response stream')
  }
}
