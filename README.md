<<<<<<< HEAD
# 💊 MedRep AI - Digital Medical Representative

> An AI-powered assistant delivering instant, accurate drug information to Indian healthcare professionals.

![MedRep AI Banner](https://img.shields.io/badge/MedRep-AI-blue?style=for-the-badge&logo=robot&logoColor=white)
![Status](https://img.shields.io/badge/Status-Prototype-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🎯 Problem Statement

Healthcare professionals in India face significant challenges:
- ⏰ **Time Waste**: Doctors spend 15+ minutes searching multiple databases for drug information
- 💰 **Cost Confusion**: Patients overpay due to lack of awareness about generic alternatives
- 📋 **Coverage Uncertainty**: Complex CGHS/PMJAY reimbursement rules
- ⚠️ **Safety Risks**: Difficulty in quickly checking drug interactions

## 💡 Our Solution

**MedRep AI** is a Digital Medical Representative that provides:

| Feature | Description |
|---------|-------------|
| 🔍 **Instant Drug Lookup** | Search any drug for complete information |
| 💰 **Price Comparison** | Jan Aushadhi vs Branded prices with savings % |
| ✅ **CGHS Coverage Check** | Real-time reimbursement eligibility |
| 🔄 **Generic Alternatives** | Cost-effective substitutes with same efficacy |
| ⚠️ **Drug Interactions** | Contraindications and warnings from OpenFDA |
| 🇮🇳 **Patient Translation** | Instructions in Hindi for patient education |

### 🫀 Specialty Focus: Cardiovascular & Metabolic

We provide **deep, verified data** for Cardiology and Diabetes drugs - the two categories that:
- Affect 100M+ Indians (77M diabetics, 30M cardiac patients)
- Require complex interaction checking (polypharmacy)
- Have the largest generic savings potential (up to 90%)

---

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   React         │────▶│   FastAPI        │────▶│  RAG Pipeline   │
│   Frontend      │     │   Backend        │     │  (LangChain)    │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                         │
                        ┌────────────────────────────────┼────────────────┐
                        ▼                                ▼                ▼
                 ┌─────────────┐              ┌──────────────┐    ┌──────────────┐
                 │  ChromaDB   │              │   OpenFDA    │    │   Gemini     │
                 │ (Indian DB) │              │     API      │    │     LLM      │
                 └─────────────┘              └──────────────┘    └──────────────┘
```

### Data Flow

1. **Indian Data** (CDSCO, CGHS, Jan Aushadhi) → Pre-processed → ChromaDB
2. **Clinical Data** (Interactions, Side Effects) → OpenFDA API → Real-time
3. **Combined Context** → Gemini LLM → Structured Response

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI (Python)
- LangChain
- ChromaDB (Vector Database)

### AI/ML
- Google Gemini API (LLM)
- Sentence Transformers (Embeddings)
- OpenFDA API (Drug Interactions)

### Data Sources
- 🇮🇳 CDSCO Approved Drugs List
- 🇮🇳 CGHS Rate List (2025-26)
- 🇮🇳 Jan Aushadhi Price List
- 🇮🇳 NPPA Ceiling Prices
- 🌐 OpenFDA Drug Labels API

---

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+
- Google Gemini API Key (Free)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/medrep-ai.git
cd medrep-ai

# Backend setup
cd backend
pip install -r requirements.txt
cp .env.example .env  # Add your Gemini API key

# Frontend setup
cd ../frontend
npm install

# Run the application
# Terminal 1: Backend
cd backend && uvicorn main:app --reload

# Terminal 2: Frontend
cd frontend && npm run dev
```

### View Prototype
```bash
# For prototype demo (no backend required)
cd prototype
# Open index.html in browser
```

---

## 📸 Screenshots

### Main Interface
![Chat Interface](./screenshots/chat.png)

### Drug Information Card
![Drug Card](./screenshots/drug-card.png)

### Generic Alternatives
![Alternatives](./screenshots/alternatives.png)

---

## 🎯 Key Features Demo

### 1. Drug Lookup with CGHS Coverage
```
User: "Is Metformin covered under CGHS?"

MedRep AI:
💊 METFORMIN (Anti-diabetic)
├── ✅ CGHS Covered: Yes (Category A)
├── 💰 Jan Aushadhi: ₹15 (Save 67%)
├── 💰 Branded: ₹45
└── 🔄 Alternatives: Glycomet, Glucophage
```

### 2. Brand-to-Generic Switcher
```
User: "Show generic alternatives for Crestor"

MedRep AI:
💊 CRESTOR (Rosuvastatin) - ₹450
🔄 GENERIC OPTIONS:
├── Rosuvas (Sun Pharma): ₹180 - Save 60%
├── Rosulip (Cipla): ₹165 - Save 63%
└── ⭐ Jan Aushadhi: ₹32 - Save 93%
```

### 3. Drug Interactions
```
User: "What should not be mixed with Aspirin?"

MedRep AI:
⚠️ ASPIRIN INTERACTIONS:
├── 🔴 Warfarin - Increased bleeding risk
├── 🔴 Other NSAIDs - GI bleeding risk
├── 🟡 ACE Inhibitors - Reduced efficacy
└── 🟡 Alcohol - Stomach irritation
```

---

## 📊 Impact

| Metric | Before | After MedRep AI |
|--------|--------|-----------------|
| Drug lookup time | 15 min | 15 seconds |
| Generic awareness | Low | 100% alternatives shown |
| Interaction checks | Manual | Automatic |
| Patient savings | - | Up to 90% with generics |

---

## 🗺️ Roadmap

- [x] Prototype UI
- [x] Drug information display
- [x] Price comparison
- [ ] Full RAG backend integration
- [ ] Voice input (Hindi/English)
- [ ] PM-JAY package rates
- [ ] Mobile app
- [ ] Prescription PDF generator

---

## 👥 Team

| Name | Role |
|------|------|
| Team Member 1 | Full Stack Developer |
| Team Member 2 | ML/AI Engineer |
| Team Member 3 | Frontend Developer |

---

## 🙏 Acknowledgments

- CDSCO India for drug approval data
- CGHS for rate list information
- Jan Aushadhi for generic medicine prices
- OpenFDA for drug interaction API
- Google for Gemini API

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ for Indian Healthcare
</p>
=======
# medrep-ai-prototype
Demo of the medrep website
>>>>>>> 9d001490c3aefc4b9912878eaf49093cff91aee3
