
import { useState, useRef, useEffect } from "react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  Send, 
  User, 
  Loader2, 
  Sparkles,
  MessageSquare,
  Zap,
  Brain,
  Mic,
  Paperclip
} from "lucide-react"
import { sendChatMessage, ChatMessage } from "@/services/aiService"

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Smart Farm AI Assistant. I can help you with crop management, weather analysis, livestock care, equipment maintenance, and general farming advice. How can I assist you today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      // Convert messages to ChatMessage format for API
      const chatMessages: ChatMessage[] = messages
        .slice(1) // Skip the initial greeting
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      
      // Add the current user message
      chatMessages.push({
        role: 'user',
        content: inputMessage
      })

      const aiResponse = await sendChatMessage(chatMessages)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting to my systems right now. Please try again in a moment.",
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = [
    "What's the best time to plant corn?",
    "How do I manage soil pH?",
    "Livestock feeding schedule tips",
    "Equipment maintenance checklist"
  ]

  return (
    <DashboardLayout>
      <div className="h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <div className="p-6 border-b bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-purple-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AI Farm Assistant</h1>
                <p className="text-sm text-gray-600">Powered by advanced farming intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <Zap className="w-3 h-3 mr-1" />
                Online
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Brain className="w-3 h-3 mr-1" />
                Smart Mode
              </Badge>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <Card className={`max-w-2xl ${
                  message.role === 'user' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                    : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  <CardContent className="p-4">
                    <p className={`whitespace-pre-wrap ${message.role === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </CardContent>
                </Card>

                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                      <span className="text-gray-600">AI is thinking...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage(question)}
                    className="text-sm bg-white hover:bg-purple-50 border-purple-200 text-purple-700 hover:text-purple-800"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t bg-white/80 backdrop-blur-sm">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about farming, crops, livestock, equipment..."
                  className="pr-20 py-3 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Paperclip className="w-4 h-4 text-gray-400" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Mic className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
              <Button 
                onClick={sendMessage} 
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are generated to assist with farming decisions. Always consult with agricultural experts for critical decisions.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
