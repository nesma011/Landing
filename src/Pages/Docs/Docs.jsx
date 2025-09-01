import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AiOutlineHome,
  AiOutlineBarChart,
  AiFillFolder,
  AiOutlineThunderbolt,
  AiOutlineFileText,
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineMore,
  AiOutlineGlobal,
  AiOutlineDatabase,
  AiOutlineMessage,
  AiOutlineDown,
  AiOutlineFire,
  AiOutlineNumber,
  AiOutlineFontSize,
  AiOutlineExclamationCircle,
  AiOutlineCode
} from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';

const Docs = () => {
  const [selectedModel, setSelectedModel] = useState('GPT-4-turbo');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(400);
  const [responseType, setResponseType] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showConditions, setShowConditions] = useState(false);

  const sidebarItems = [
    { icon: AiOutlineHome, label: 'Inbox', active: false },
    { icon: AiOutlineBarChart, label: 'Analytics', active: false },
    { icon: AiFillFolder, label: 'Collections', active: false },
    { icon: AiOutlineThunderbolt, label: 'Integrations', active: false },
    { icon: AiOutlineFileText, label: 'Templates', active: false },
    { icon: AiOutlineSetting, label: 'Settings', active: false },
  ];

  const apps = [
    { icon: AiOutlineHome, label: 'StatsBot', active: true },
    { icon: AiOutlineBarChart, label: 'Chief', active: false },
    { icon: AiFillFolder, label: 'Docs', active: false },
    { icon: AiOutlineThunderbolt, label: 'Accounting', active: false },
  ];

  const actions = [
    { icon: AiOutlineGlobal, label: 'Get Content From Website', tag: 'Website', description: 'website' },
    { icon: AiOutlineDatabase, label: 'Save', tag: 'Cache', description: 'save' },
    { icon: AiOutlineMessage, label: 'Generate Response', tag: 'GPT-4-Turbo', description: 'output' }
  ];

  const NavItem = ({ item }) => (
    <NavLink
      to={item.path || "#"}
      className={({ isActive }) => 
        `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
          item.active || isActive 
            ? 'text-white bg-gray-800' 
            : 'text-gray-400 hover:text-white hover:bg-gray-800'
        }`
      }
    >
      <item.icon className="w-5 h-5" />
      <span className="text-sm">{item.label}</span>
    </NavLink>
  );

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">
 {/* Sidebar */} 
 <div className="w-64 border-r border-gray-700"> 
    <div className="p-4"> 
    <div className="flex items-center gap-1 mb-1"> 
    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center"> 
        <AiOutlineCode className="w-5 h-5" />
         </div> <span className="font-semibold text-lg">Acme</span> </div>

          <nav className="mb-6">
            {sidebarItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>

          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-sm text-gray-400">Apps</span>
            <FaPlus className="w-3 h-3 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          <nav>
            {apps.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Panel */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Inputs */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-lg font-semibold">Inputs</h1>
              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                <AiOutlinePlus className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {['User Name', 'Profile'].map((label, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-800">
                  <span className="text-gray-300">{label}</span>
                  <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                    {label === 'User Name' ? 'user_name' : 'profile'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Run Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">Run</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Chain 6 item</span>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <AiOutlineMore className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-lg font-semibold">Actions</h2>
              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                <AiOutlinePlus className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {actions.map((action, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <action.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-200">{action.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      action.tag === 'Website' || action.tag === 'Cache'
                        ? 'bg-yellow-900 text-yellow-300 border border-yellow-700'
                        : 'bg-blue-900 text-blue-300 border border-blue-700'
                    }`}>
                      {action.tag}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-white transition-colors">
                      <AiOutlineMore className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-96 border-l border-gray-800 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Generate Response</h3>
              <span className="text-xs px-2 py-1 rounded border border-gray-600 text-gray-400">
                output
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Slug</label>
              <input 
                type="text" 
                value="output"
                readOnly
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
              <textarea 
                placeholder="Add an optional display message"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <AiOutlineExclamationCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Conditions</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">If (inputs.input) is True</div>
              <button 
                onClick={() => setShowConditions(!showConditions)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <AiOutlineMore className="w-4 h-4" />
              </button>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <AiOutlineSetting className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Configuration</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Model</label>
                  <div className="relative">
                    <select 
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="GPT-4-turbo">GPT-4-turbo</option>
                      <option value="GPT-3.5">GPT-3.5</option>
                      <option value="Claude">Claude</option>
                    </select>
                    <AiOutlineDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AiOutlineFire className="w-4 h-4 text-gray-400" />
                    <label className="text-sm text-gray-400 font-medium">Temperature</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(temperature / 2) * 100}%, #374151 ${(temperature / 2) * 100}%, #374151 100%)`
                      }}
                    />
                    <input
                      type="number"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="w-16 p-1 bg-gray-900 border border-gray-700 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      step="0.1"
                      min="0"
                      max="2"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AiOutlineNumber className="w-4 h-4 text-gray-400" />
                    <label className="text-sm text-gray-400 font-medium">Max Tokens</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="4000"
                      value={maxTokens}
                      onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(maxTokens / 4000) * 100}%, #374151 ${(maxTokens / 4000) * 100}%, #374151 100%)`
                      }}
                    />
                    <input
                      type="number"
                      value={maxTokens}
                      onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                      className="w-20 p-1 bg-gray-900 border border-gray-700 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      min="1"
                      max="4000"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AiOutlineFontSize className="w-4 h-4 text-gray-400" />
                    <label className="text-sm text-gray-400 font-medium">Response Type</label>
                  </div>
                  <input 
                    type="text" 
                    value={responseType}
                    onChange={(e) => setResponseType(e.target.value)}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Prompt</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
