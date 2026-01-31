// ============================================
// MedRep AI - Digital Medical Representative
// Frontend JavaScript
// ============================================

// DOM Elements
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const welcomeSection = document.getElementById('welcomeSection');
const voiceBtn = document.getElementById('voiceBtn');

// Event Listeners
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Hide welcome section
    welcomeSection.style.display = 'none';
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response (In real app, this calls the backend)
    setTimeout(() => {
        removeTypingIndicator();
        generateResponse(message);
    }, 1500);
}

// Quick action button handler
function askQuestion(question) {
    userInput.value = question;
    sendMessage();
}

// Add message to chat
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user-md"></i>' : '<i class="fas fa-robot"></i>';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (typeof content === 'string') {
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = content;
        contentDiv.appendChild(bubble);
    } else {
        contentDiv.appendChild(content);
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'message assistant';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <div class="message-avatar"><i class="fas fa-robot"></i></div>
        <div class="message-content">
            <div class="message-bubble">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// Generate simulated AI response
function generateResponse(query) {
    const lowerQuery = query.toLowerCase();
    
    // Check for drug-related queries
    if (lowerQuery.includes('metformin')) {
        addMessage(createDrugCard({
            name: 'METFORMIN',
            category: 'Anti-diabetic (Biguanide)',
            covered: true,
            prices: {
                janAushadhi: '₹15',
                branded: '₹45',
                nppa: '₹22.80'
            },
            alternatives: [
                { name: 'Glycomet 500mg', company: 'USV Ltd', price: '₹42' },
                { name: 'Glucophage 500mg', company: 'Abbott', price: '₹85' },
                { name: 'Jan Aushadhi Generic', company: 'BPPI', price: '₹15' }
            ],
            warnings: [
                'Contraindicated in renal impairment (eGFR < 30)',
                'Stop 48 hours before IV contrast procedures',
                'Avoid in acute/chronic metabolic acidosis',
                'Monitor B12 levels with long-term use'
            ]
        }), 'assistant');
    } else if (lowerQuery.includes('crestor') || lowerQuery.includes('rosuvastatin')) {
        addMessage(createDrugCard({
            name: 'ROSUVASTATIN (Crestor)',
            category: 'Statin (HMG-CoA Reductase Inhibitor)',
            covered: true,
            prices: {
                janAushadhi: '₹32',
                branded: '₹450',
                nppa: '₹45'
            },
            alternatives: [
                { name: 'Rosuvas 10mg', company: 'Sun Pharma', price: '₹180' },
                { name: 'Rosulip 10mg', company: 'Cipla', price: '₹165' },
                { name: 'Jan Aushadhi Generic', company: 'BPPI', price: '₹32' }
            ],
            warnings: [
                'Contraindicated in active liver disease',
                'Avoid grapefruit juice (increases toxicity)',
                'Risk of myopathy - monitor for muscle pain',
                'Pregnancy Category X - Contraindicated'
            ]
        }), 'assistant');
    } else if (lowerQuery.includes('aspirin') || lowerQuery.includes('interaction')) {
        addMessage(createDrugCard({
            name: 'ASPIRIN',
            category: 'NSAID / Antiplatelet',
            covered: true,
            prices: {
                janAushadhi: '₹8',
                branded: '₹25',
                nppa: '₹12'
            },
            alternatives: [
                { name: 'Ecosprin 75mg', company: 'USV Ltd', price: '₹22' },
                { name: 'Disprin 350mg', company: 'Reckitt', price: '₹35' },
                { name: 'Jan Aushadhi Generic', company: 'BPPI', price: '₹8' }
            ],
            warnings: [
                'Increased bleeding risk with anticoagulants (Warfarin)',
                'Avoid with other NSAIDs (GI bleeding risk)',
                'Caution with ACE inhibitors (reduced efficacy)',
                'Avoid in children with viral illness (Reye syndrome)',
                'Stop 7 days before surgery'
            ]
        }), 'assistant');
    } else if (lowerQuery.includes('atorvastatin') || lowerQuery.includes('price') || lowerQuery.includes('compare')) {
        addMessage(createDrugCard({
            name: 'ATORVASTATIN',
            category: 'Statin (HMG-CoA Reductase Inhibitor)',
            covered: true,
            prices: {
                janAushadhi: '₹28',
                branded: '₹320',
                nppa: '₹35'
            },
            alternatives: [
                { name: 'Atorva 10mg', company: 'Zydus', price: '₹145' },
                { name: 'Lipitor 10mg', company: 'Pfizer', price: '₹320' },
                { name: 'Tonact 10mg', company: 'Lupin', price: '₹135' },
                { name: 'Jan Aushadhi Generic', company: 'BPPI', price: '₹28' }
            ],
            warnings: [
                'Contraindicated in active liver disease',
                'Monitor LFTs at baseline and periodically',
                'Risk of rhabdomyolysis with high doses',
                'Avoid grapefruit juice'
            ]
        }), 'assistant');
    } else if (lowerQuery.includes('cghs') || lowerQuery.includes('coverage') || lowerQuery.includes('covered')) {
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = `
            <strong>📋 CGHS Coverage Information</strong><br><br>
            I can check CGHS coverage for any drug. Here's how it works:<br><br>
            <strong>✅ Covered Drugs:</strong> Available at CGHS rates, full reimbursement<br>
            <strong>❌ Non-Covered:</strong> Patient pays out of pocket<br>
            <strong>🔄 Generic Required:</strong> Some drugs require generic prescription<br><br>
            <em>Please specify a drug name to check its coverage status!</em>
        `;
        addMessage(bubble, 'assistant');
    } else {
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = `
            I understand you're asking about: <strong>"${query}"</strong><br><br>
            I can help you with:<br>
            • 💊 <strong>Drug Information</strong> - Composition, uses, mechanism<br>
            • 💰 <strong>Price Comparison</strong> - Jan Aushadhi vs branded<br>
            • ✅ <strong>CGHS Coverage</strong> - Reimbursement eligibility<br>
            • 🔄 <strong>Generic Alternatives</strong> - Cost-effective options<br>
            • ⚠️ <strong>Drug Interactions</strong> - Contraindications<br><br>
            <em>Try asking about specific drugs like Metformin, Aspirin, or Atorvastatin!</em>
        `;
        addMessage(bubble, 'assistant');
    }
}

// Create drug information card
function createDrugCard(drug) {
    const card = document.createElement('div');
    card.className = 'drug-info-card';
    
    const savingsPercent = Math.round((1 - (parseInt(drug.prices.janAushadhi.replace('₹', '')) / parseInt(drug.prices.branded.replace('₹', '')))) * 100);
    
    card.innerHTML = `
        <div class="drug-header">
            <div>
                <div class="drug-name">💊 ${drug.name}</div>
                <div class="drug-category">${drug.category}</div>
            </div>
            <div class="coverage-badge ${drug.covered ? 'covered' : 'not-covered'}">
                <i class="fas fa-${drug.covered ? 'check-circle' : 'times-circle'}"></i>
                ${drug.covered ? 'CGHS Covered' : 'Not Covered'}
            </div>
        </div>
        <div class="drug-body">
            <div class="info-section">
                <div class="section-title"><i class="fas fa-rupee-sign"></i> Pricing (10 Tablets)</div>
                <div class="price-grid">
                    <div class="price-item highlight">
                        <div class="price-label">Jan Aushadhi</div>
                        <div class="price-value">${drug.prices.janAushadhi}</div>
                        <div class="savings">Save ${savingsPercent}%</div>
                    </div>
                    <div class="price-item">
                        <div class="price-label">Branded</div>
                        <div class="price-value">${drug.prices.branded}</div>
                    </div>
                    <div class="price-item">
                        <div class="price-label">NPPA Ceiling</div>
                        <div class="price-value">${drug.prices.nppa}</div>
                    </div>
                </div>
            </div>
            
            <div class="info-section">
                <div class="section-title"><i class="fas fa-exchange-alt"></i> Generic Alternatives</div>
                <div class="alternatives-list">
                    ${drug.alternatives.map((alt, index) => `
                        <div class="alternative-item">
                            <div>
                                <div class="alt-name">${index === drug.alternatives.length - 1 ? '⭐ ' : ''}${alt.name}</div>
                                <div class="alt-company">${alt.company}</div>
                            </div>
                            <div class="alt-price">${alt.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="info-section warning-box">
                <div class="section-title"><i class="fas fa-exclamation-triangle"></i> Contraindications & Interactions</div>
                <ul class="warning-list">
                    ${drug.warnings.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
            
            <button class="translate-btn" onclick="translateForPatient('${drug.name}')">
                <i class="fas fa-language"></i>
                Translate for Patient (Hindi) 🇮🇳
            </button>
        </div>
    `;
    
    return card;
}

// Translate for patient (Hindi)
function translateForPatient(drugName) {
    alert(`🇮🇳 Translation Feature\n\nThis will translate drug instructions for "${drugName}" into Hindi for patient education.\n\nFeature coming in full release!`);
}

// Voice input (placeholder)
voiceBtn.addEventListener('click', () => {
    alert('🎤 Voice Input\n\nVoice input will be available in the full release.\n\nThis feature will support Hindi and English voice queries.');
});

// Close modal
function closeModal() {
    document.getElementById('drugModal').classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('MedRep AI initialized');
});
