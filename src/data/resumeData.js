export const resumeData = {
  personalInfo: {
    name: "Lohith R C",
    title: "Full-Stack & Agentic AI Software Engineer",
    subheading: "B.E. Computer Science & Engineering Undergraduate (CGPA 8.6 / 10)",
    college: "Kalpataru Institute of Technology, Tiptur (VTU)",
    graduation: "Expected 2027",
    location: "Arsikere, Karnataka, India",
    email: "lohithraj9090@gmail.com",
    phone: "+91 78994 60920",
    github: "https://github.com/Lohith-RC",
    linkedin: "https://linkedin.com",
    summary: "Final-year CS student with production experience across Java, Python, Spring Boot, FastAPI, and React/Redux. Specializing in AI-integrated full-stack architectures, RAG pipelines, agentic workflows (LangGraph), and explainable machine learning models. Hackathon winner with a track record of building and shipping end-to-end applications under tight deadlines."
  },

  roleModes: [
    {
      id: "fullstack",
      label: "Full-Stack Engineer",
      badge: "React • Redux • FastAPI • Spring Boot • PostgreSQL",
      description: "Focusing on end-to-end web apps, state management, REST API microservices, and database modeling."
    },
    {
      id: "aiml",
      label: "AI / ML & Agentic Engineer",
      badge: "LangGraph • LangChain • RAG • FAISS • CNN Ensembles • SHAP",
      description: "Focusing on agentic AI workflows, vector retrieval pipelines, computer vision ensembles, and model explainability."
    },
    {
      id: "backend",
      label: "Backend & Systems Specialist",
      badge: "Java • Python • REST APIs • MongoDB • PostgreSQL • JWT",
      description: "Focusing on robust API design, security, database optimization, and scalable backend architecture."
    }
  ],

  stats: [
    { label: "CGPA (BE CS)", value: "8.6", suffix: "/ 10" },
    { label: "Hackathons & Expos", value: "10", suffix: "+" },
    { label: "Production Projects", value: "8", suffix: "+" },
    { label: "Industry Credentials", value: "15", suffix: "+" }
  ],

  skillsCategory: [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: "Primary", highlight: true, note: "OOP, Core Data Structures, Spring Fundamentals" },
        { name: "Python", level: "Primary", highlight: true, note: "Flask, FastAPI, scikit-learn, PyTorch/TensorFlow" },
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true, note: "React.js, Redux, Node.js" },
        { name: "SQL", level: "Intermediate", highlight: false, note: "PostgreSQL, SQLite Schema Optimization" },
        { name: "C++ / C", level: "Intermediate", highlight: false, note: "Algorithmic Problem Solving (C++ Essentials Certified)" }
      ]
    },
    {
      category: "Frontend & UI Design",
      skills: [
        { name: "React.js", level: "Advanced", highlight: true, note: "Hooks, Router, Component Lifecycle" },
        { name: "Redux / Redux Toolkit", level: "Advanced", highlight: true, note: "Global State Management, Async Thunks" },
        { name: "HTML5 / CSS3", level: "Advanced", highlight: false, note: "Responsive Layouts, Flexbox/Grid" },
        { name: "Tailwind CSS", level: "Intermediate", highlight: true, note: "Utility-First Glassmorphic Styling" },
        { name: "Three.js / GSAP", level: "Familiar", highlight: false, note: "Interactive 3D Elements & Animations" }
      ]
    },
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "FastAPI", level: "Advanced", highlight: true, note: "Async REST APIs, Swagger Docs, Pydantic" },
        { name: "Flask", level: "Advanced", highlight: true, note: "Lightweight Backends, REST Services" },
        { name: "Spring Boot Basics", level: "Intermediate", highlight: true, note: "Java Enterprise Backend Design" },
        { name: "Node.js Basics", level: "Familiar", highlight: false, note: "Express Server Integration" },
        { name: "JWT Authentication", level: "Advanced", highlight: true, note: "Secure Token Auth & Authorization" }
      ]
    },
    {
      category: "AI, ML & Agentic Systems",
      skills: [
        { name: "LangChain / LangGraph", level: "Advanced", highlight: true, note: "Stateful Agent Workflows & LLM Chains" },
        { name: "FAISS Vector Search", level: "Advanced", highlight: true, note: "Semantic Document & Image Retrieval" },
        { name: "Groq & OpenAI APIs", level: "Advanced", highlight: true, note: "Ultra-fast LLM Inference Integration" },
        { name: "CNN Ensembles (TensorFlow)", level: "Advanced", highlight: true, note: "VGG16, ResNet, EfficientNet, MobileNet" },
        { name: "Explainable AI (Grad-CAM & SHAP)", level: "Advanced", highlight: true, note: "Visual & Feature Importance Interpretability" },
        { name: "scikit-learn (Random Forest, DBSCAN)", level: "Advanced", highlight: false, note: "Classification & Geographic Clustering" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: "Intermediate", highlight: true, note: "Relational Schema & Complex Joins" },
        { name: "MongoDB", level: "Intermediate", highlight: true, note: "NoSQL Collections & Session Persistence" },
        { name: "SQLite", level: "Advanced", highlight: false, note: "Embedded Application Storage" },
        { name: "FAISS", level: "Advanced", highlight: true, note: "High-Dimensional Vector Indexes" }
      ]
    },
    {
      category: "Tools, Security & Practices",
      skills: [
        { name: "Cisco Packet Tracer", level: "Advanced", highlight: true, note: "Network Simulation & Topology Configuration" },
        { name: "Git & GitHub", level: "Advanced", highlight: true, note: "Structured Branching & Code Reviews" },
        { name: "Postman", level: "Advanced", highlight: false, note: "API Testing & Collection Management" },
        { name: "Linux CLI", level: "Intermediate", highlight: false, note: "Shell Scripting & System Commands" },
        { name: "CyberOps / Network Security", level: "Intermediate", highlight: true, note: "Cisco CyberOps & Cybersecurity Certified" }
      ]
    }
  ],

  projects: [
    {
      id: "ai-crm",
      title: "AI-First CRM: Agentic HCP Interaction Logging",
      subtitle: "Full-Stack Healthcare CRM powered by LangGraph Agents & Groq",
      roles: ["fullstack", "aiml", "backend"],
      category: "Agentic AI & Full-Stack",
      featured: true,
      description: "Designed and built an enterprise-grade CRM module for Healthcare Professional (HCP) interaction logging. Uses a React + Redux frontend coupled with a FastAPI backend. Implements LangGraph multi-step agent workflows powered by Groq LLMs to automatically parse unstructured meeting notes into structured database records.",
      stack: ["React", "Redux", "FastAPI", "PostgreSQL", "LangGraph", "Groq API"],
      metrics: [
        { label: "Logging Time", val: "85% Reduction" },
        { label: "Agent Precision", val: "98.4%" },
        { label: "Stack Layer", val: "Full End-to-End" }
      ],
      architectureNodes: [
        { name: "React + Redux Frontend", desc: "User inputs raw audio/text notes and views live agent execution state." },
        { name: "FastAPI REST Server", desc: "Orchestrates API calls, auth tokens, and database transactions." },
        { name: "LangGraph Agent Engine", desc: "Multi-node state machine that validates HCP names, extracts medical topics, and formats JSON." },
        { name: "Groq LLM Service", desc: "Ultra-fast Llama-3 inference for immediate extraction under 200ms." },
        { name: "PostgreSQL Database", desc: "Persists structured log records, HCP profiles, and interaction histories." }
      ],
      simulatorType: "ai-crm",
      codeSnippet: `// LangGraph Agent Workflow Node for HCP Extraction
const extractHCPData = async (state) => {
  const prompt = \`Extract doctor name, specialty, drug discussed from: \${state.rawNote}\`;
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }]
  });
  return { ...state, structuredLog: JSON.parse(response.choices[0].message.content) };
};`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "disaster-lens",
      title: "DisasterLens — Disaster Intelligence Platform",
      subtitle: "Real-time SOS Triage Platform with DBSCAN & SHAP Explainability",
      roles: ["aiml", "fullstack", "backend"],
      category: "Machine Learning & Rescue Analytics",
      featured: true,
      description: "A two-sided emergency intelligence platform connecting rescue teams with victims during disasters. Features a Random Forest priority scoring engine for SOS signals, DBSCAN spatial clustering to group victims into rescue-optimized zones, and SHAP explainability so first responders understand priority decisions.",
      stack: ["Python", "Flask", "SQLite", "scikit-learn", "DBSCAN", "SHAP", "HTML/CSS/JS"],
      metrics: [
        { label: "Hackathon MVP", val: "Shipped in 24 hrs" },
        { label: "Clustering Algo", val: "DBSCAN Spatial" },
        { label: "XAI Method", val: "SHAP Values" }
      ],
      architectureNodes: [
        { name: "Victim / Responder UI", desc: "Dual dashboard with offline PWA mode for low-connectivity environments." },
        { name: "Flask Backend", desc: "Processes incoming distress telemetry and updates rescue queues." },
        { name: "Random Forest Scoring", desc: "Calculates emergency priority (1-100) based on severity, age, medical status." },
        { name: "DBSCAN Clustering Engine", desc: "Groups GPS distress signals into geographic rescue zones automatically." },
        { name: "SHAP Explainability Visualizer", desc: "Generates waterfall charts showing feature impact on priority score." }
      ],
      simulatorType: "disaster-lens",
      codeSnippet: `# DBSCAN Spatial Signal Clustering
from sklearn.cluster import DBSCAN
coords = df[['latitude', 'longitude']].values
kms_per_radian = 6371.0088
epsilon = 0.5 / kms_per_radian # 500m radius
db = DBSCAN(eps=epsilon, min_samples=2, metric='haversine').fit(np.radians(coords))
df['rescue_zone_id'] = db.labels_`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "visionary-diagnostics",
      title: "Visionary Diagnostics",
      subtitle: "Ensemble CNN Platform for Oral Cancer (OSCC) Detection",
      roles: ["aiml", "fullstack"],
      category: "Deep Learning & Diagnostic Web App",
      featured: true,
      description: "Full-stack medical imaging platform combining an ensemble of 4 CNN architectures (VGG16, ResNet50, EfficientNet-B0, MobileNetV2) for early detection of Oral Squamous Cell Carcinoma (OSCC). Features visual Grad-CAM heatmap explainability for clinicians and JWT-secured REST APIs.",
      stack: ["React", "Flask", "TensorFlow", "Grad-CAM", "JWT Auth", "Python"],
      metrics: [
        { label: "Ensemble Models", val: "4 Architectures" },
        { label: "Clinical XAI", val: "Grad-CAM Heatmaps" },
        { label: "Security", val: "JWT Auth APIs" }
      ],
      architectureNodes: [
        { name: "React Diagnostic Frontend", desc: "Allows clinicians to upload histopathology images and view heatmap overlays." },
        { name: "Flask REST Microservice", desc: "Endpoints secured with JWT tokens; handles image preprocessing." },
        { name: "CNN Ensemble Evaluator", desc: "Averages weighted predictions across VGG16, ResNet50, EfficientNet & MobileNet." },
        { name: "Grad-CAM Explainer", desc: "Calculates gradients of target class wrt final convolutional feature maps." }
      ],
      simulatorType: "visionary-diagnostics",
      codeSnippet: `# Grad-CAM Heatmap Generation in TensorFlow/Keras
def make_gradcam_heatmap(img_array, model, last_conv_layer_name, pred_index=None):
    grad_model = tf.keras.models.Model([model.inputs], [model.get_layer(last_conv_layer_name).output, model.output])
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, pred_index]
    grads = tape.gradient(loss, conv_outputs)
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    heatmap = conv_outputs[0] @ pooled_grads[..., tf.newaxis]
    return tf.squeeze(tf.maximum(heatmap, 0)).numpy()`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "pke-rag",
      title: "Personal Knowledge Engine (PKE)",
      subtitle: "Private RAG Chat System over Personal Documents",
      roles: ["aiml", "fullstack", "backend"],
      category: "RAG & LLM Application",
      featured: true,
      description: "Full-stack Retrieval-Augmented Generation (RAG) system enabling semantic search and Q&A over personal document repositories. Built with LangChain, FAISS vector indexes, FastAPI REST backend, and MongoDB session storage.",
      stack: ["LangChain", "FastAPI", "FAISS", "MongoDB", "OpenAI API", "Python"],
      metrics: [
        { label: "Retrieval Algo", val: "FAISS Vector Search" },
        { label: "Persistence", val: "MongoDB Multi-Turn" },
        { label: "Latency", val: "< 350ms Query" }
      ],
      architectureNodes: [
        { name: "Interactive Chat Interface", desc: "Multi-turn document query interface with source document citations." },
        { name: "FastAPI Pipeline Engine", desc: "Splits documents into overlapping chunks and manages vector embeddings." },
        { name: "FAISS Vector Database", desc: "Indexes document embeddings for ultra-fast L2 similarity search." },
        { name: "MongoDB Session Store", desc: "Saves chat history, token usage analytics, and user collections." }
      ],
      simulatorType: "pke-rag",
      codeSnippet: `# FAISS Vector Retrieval with LangChain
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

vectorstore = FAISS.from_documents(chunks, OpenAIEmbeddings())
retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 4})
qa_chain = RetrievalQA.from_chain_type(llm=OpenAI(temperature=0), retriever=retriever)`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "modalbridge",
      title: "ModalBridge — Satellite Image Retrieval",
      subtitle: "Cross-Modal Satellite Search for Disaster Response",
      roles: ["aiml", "backend"],
      category: "Computer Vision & Contrastive Learning",
      featured: false,
      description: "Built for Bharatiya Antariksh Hackathon 2026 as a 4-person cross-college team. Uses frozen ResNet backbones with contrastive projection heads (InfoNCE loss) and FAISS similarity search for rapid matching of multi-spectral satellite imagery during natural disasters.",
      stack: ["Python", "ResNet", "InfoNCE Loss", "FAISS", "PyTorch"],
      metrics: [
        { label: "Hackathon", val: "Bharatiya Antariksh '26" },
        { label: "Loss Function", val: "Contrastive InfoNCE" },
        { label: "Team Size", val: "4-Person Cross-College" }
      ],
      architectureNodes: [
        { name: "Satellite Data Ingestion", desc: "Handles multi-band satellite images and query metadata." },
        { name: "ResNet Projection Heads", desc: "Embeds image regions into shared high-dimensional latent vector space." },
        { name: "FAISS Cosine Similarity", desc: "Finds closest matching satellite patches in milliseconds." }
      ],
      simulatorType: "generic",
      codeSnippet: `# InfoNCE Contrastive Loss Projection Head
import torch.nn as nn
class ContrastiveHead(nn.Module):
    def __init__(self, in_features, projection_dim=128):
        super().__init__()
        self.fc = nn.Sequential(
            nn.Linear(in_features, 512),
            nn.ReLU(),
            nn.Linear(512, projection_dim)
        )
    def forward(self, x):
        return nn.functional.normalize(self.fc(x), p=2, dim=1)`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "smart-student-assistant",
      title: "Smart Student Assistant — AI Learning Platform",
      subtitle: "Adaptive Testing Engine & Automated Flashcard Evaluation",
      roles: ["fullstack", "backend"],
      category: "EdTech & System Design",
      featured: false,
      description: "Multi-user learning platform built with Flask and MongoDB. Features an adaptive testing engine that adjusts question difficulty based on student performance, JWT authentication, and comprehensive edge-case test suites.",
      stack: ["Flask", "MongoDB", "REST APIs", "Python", "JWT Auth"],
      metrics: [
        { label: "Architecture", val: "Modular REST API" },
        { label: "Testing", val: "Log-based Debug Plans" }
      ],
      simulatorType: "generic",
      codeSnippet: `# Adaptive Difficulty Engine Logic
def calculate_next_difficulty(student_score_history, current_level):
    recent_accuracy = sum(student_score_history[-3:]) / 3.0
    if recent_accuracy > 0.85 and current_level < 5:
        return current_level + 1
    elif recent_accuracy < 0.40 and current_level > 1:
        return current_level - 1
    return current_level`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    },
    {
      id: "custom-online-judge",
      title: "Custom Online Judge Backend",
      subtitle: "Multi-Language Automated Code Evaluation System",
      roles: ["backend"],
      category: "Backend & Execution Engine",
      featured: false,
      description: "End-to-end online judge supporting multi-language submissions (Python, C++, Java) with automated test-case evaluation, isolated execution workflows, scalable REST API layer, and MongoDB submission tracking.",
      stack: ["Flask", "Python", "MongoDB", "REST APIs"],
      metrics: [
        { label: "Languages Supported", val: "Python, Java, C++" },
        { label: "Evaluation", val: "Isolated Sandbox" }
      ],
      simulatorType: "generic",
      codeSnippet: `# Test Case Execution Handler
import subprocess
def run_code_in_sandbox(code_path, input_data, timeout_sec=2):
    try:
        proc = subprocess.run(['python', code_path], input=input_data, text=True, capture_output=True, timeout=timeout_sec)
        return {"stdout": proc.stdout, "status": "PASSED" if proc.returncode == 0 else "RUNTIME_ERROR"}
    except subprocess.TimeoutExpired:
        return {"status": "TIME_LIMIT_EXCEEDED"}`,
      github: "https://github.com/Lohith-RC",
      demoUrl: "#"
    }
  ],

  experience: [
    {
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      location: "Remote",
      period: "Jul 2026 – Aug 2026",
      type: "Internship",
      highlights: [
        "Built and shipped production-style full-stack features end-to-end, handling modern JS UI components and Python REST APIs.",
        "Collaborated in a remote, deadline-driven environment using structured Git branching, code reviews, and Agile sprints.",
        "Strengthened practical skills in REST API integration, state management with Redux, and database-backed app design."
      ]
    }
  ],

  hackathons: [
    {
      title: "MIT Mysore Hackathon 2026",
      role: "Team Lead (DisasterLens)",
      award: "Participant & Finalist",
      location: "MIT Mysore",
      desc: "Built complete DisasterLens MVP in 24 hours featuring Random Forest SOS triage and DBSCAN geographic rescue clustering."
    },
    {
      title: "Bharatiya Antariksh Hackathon 2026",
      role: "Core AI Developer (ModalBridge)",
      award: "National Hackathon Competitor",
      location: "National Level",
      desc: "Co-built cross-modal satellite image retrieval system using ResNet contrastive embeddings and FAISS search as a 4-person team."
    },
    {
      title: "CODE BREAKER CHALLENGE 1.0",
      role: "Hackathon Competitor",
      award: "GeeksforGeeks & IEEE Powered",
      location: "Global Academy of Technology (GAT)",
      desc: "Completed 24-hour national-level hackathon organized by Dept of AI & ML, setting benchmark for technical innovation."
    },
    {
      title: "ADVAYA - 2k25 National Hackathon",
      role: "Hackathon Competitor",
      award: "IEEE & Manya Sponsored",
      location: "BGS College of Engineering (BGSCET)",
      desc: "Competed in 24-hour national hackathon prototyping real-time software systems."
    },
    {
      title: "HACKVERSE 2025 & Ignited Minds Ideathon",
      role: "Ideathon & Hackathon Finalist",
      award: "Stack Forge Hackathon",
      location: "Maharaja Institute of Technology Mysore",
      desc: "Participated in 2-day Hackverse and Ignited Minds Ideathon building innovative software prototypes."
    },
    {
      title: "SRISHTI 2025 State Level Expo",
      role: "Project Competitor",
      award: "State Level Project Exhibition",
      location: "Acharya Institute of Technology, Bengaluru",
      desc: "Presented innovative software project at state-level competition organized by VTU & Yuvaka Sangha."
    },
    {
      title: "Navkis IEEE Project Expo 2025",
      role: "Project Presenter",
      award: "IEEE CEDA & ECE Expo",
      location: "Navkis College of Engineering, Hassan",
      desc: "Exhibited engineering project in association with IEEE Bangalore & Mysore Sections."
    },
    {
      title: "ISE-Xecute 8-Hours Internal Hackathon",
      role: "Participant",
      award: "Institutional Hackathon",
      location: "Kalpataru Institute of Technology",
      desc: "Completed 8-hour high-speed development sprint."
    }
  ],

  certifications: [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      desc: "Network fundamentals, IP addressing, Ethernet, and OSI model layer interactions (Cert ID: 8ae200f5-4018-41b9-bb6e-ca4fec65ace6)."
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      desc: "VLANs, inter-VLAN routing, STP, EtherChannel, and wireless LAN configuration (Cert ID: 6ab69555-95d0-43f7-b216-9a6fa2c2e924)."
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      desc: "OSPF, WAN concepts, network security principles, ACLs, and network automation (Cert ID: 3dd98841-11ea-4bf5-bb25-cf16407f1430)."
    },
    {
      title: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      desc: "Security operations, incident response, vulnerability analysis, and threat detection (Cert ID: 54bf4b26-468c-485c-9db9-7293d78ed793)."
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      desc: "AI fundamentals & applications (Credly Badge Verification: credly.com/badges/df457100-fc07-4c9d-ac06-39a8782794c6)."
    },
    {
      title: "Graph Theory Programming Camp",
      issuer: "AlgoUniversity",
      desc: "Mentored by Codeforces Master Manas Kumar Verma; solved 17 advanced graph theory & algorithmic challenges."
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      desc: "Security principles, encryption, network defenses, and threat vectors (Cert ID: c6ea8224-84e2-4fbe-8068-de054e150bd1)."
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy / OpenEDG",
      desc: "Advanced Python data structures, OOP, modules, packages, and file I/O operations."
    },
    {
      title: "Apply AI: Analyze Customer Reviews",
      issuer: "Cisco Networking Academy",
      desc: "NLP techniques, sentiment analysis, and machine learning model evaluation (Cert ID: ee0ca1d0-24bf-4589-ae20-b78ecf4b204b)."
    },
    {
      title: "Introduction to Modern AI & Data Science",
      issuer: "Cisco Networking Academy",
      desc: "Machine learning workflows, data preprocessing with Pandas/NumPy, and neural network foundations."
    },
    {
      title: "C++ Essentials 1",
      issuer: "Cisco Networking Academy",
      desc: "Core C++ syntax, object-oriented programming, and memory management."
    },
    {
      title: "Exploring & Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      desc: "Network topology design, routing simulation, and device configuration."
    }
  ],

  leadership: [
    {
      role: "IEEE Conference Volunteer",
      event: "3rd IEEE International Conference on Data Science and Network Security (ICDSNS - 2025)",
      organization: "Dept of CSE & AIML, Kalpataru Institute of Technology",
      period: "July 25–26, 2025",
      desc: "Recognized as official volunteer coordinating session logistics and technical presentations for international researchers."
    }
  ],

  education: [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Kalpataru Institute of Technology, Tiptur (VTU)",
      grade: "CGPA: 8.6 / 10",
      period: "2023 – Expected 2027",
      coursework: ["Data Structures & Algorithms", "Advanced Java", "Cloud Computing", "Machine Learning Lab", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    },
    {
      degree: "Pre-University (PCM)",
      institution: "Kalpataru PU College, Tiptur",
      grade: "85%",
      period: "2021 – 2023"
    },
    {
      degree: "SSLC",
      institution: "Morarji Desai Residential School, Rangapur Kaval",
      grade: "92%",
      period: "2021"
    }
  ],

  aiKnowledgeBase: [
    {
      keywords: ["java", "spring", "spring boot", "backend"],
      answer: "Lohith has strong proficiency in Java (both Java & Python are his primary programming languages). He understands core Object-Oriented Design, Data Structures & Algorithms, and Spring Boot fundamentals for enterprise backend API development."
    },
    {
      keywords: ["disasterlens", "disaster", "hackathon", "mit mysore"],
      answer: "DisasterLens is an emergency SOS triage platform Lohith built as Team Lead in a 24-hour hackathon (MIT Mysore Hackathon 2026). It combines Random Forest scoring for SOS urgency, DBSCAN spatial clustering to group victims into rescue zones, and SHAP explainability so responders can trust the model."
    },
    {
      keywords: ["codealpha", "internship", "work experience", "experience"],
      answer: "Lohith completed a Full Stack Development Internship at CodeAlpha (Jul - Aug 2026), building production features with React/JS and REST APIs while applying structured Git code review workflows in a fast-paced environment."
    },
    {
      keywords: ["certifications", "cisco", "ccna", "ibm", "algouniversity", "cyberops"],
      answer: "Lohith holds 15+ verified industry credentials including Cisco CCNA Series (3 modules), Cisco CyberOps Associate, IBM SkillsBuild AI Credly digital badge, AlgoUniversity Graph Theory Programming Camp (Codeforces Master mentorship), Python Essentials 1 & 2, and Modern AI."
    },
    {
      keywords: ["hackathons", "srishti", "gat", "bgscet", "mit", "ieee"],
      answer: "Lohith has competed in 10+ hackathons and project expos across Karnataka, including GAT Code Breaker Challenge 1.0 (GeeksforGeeks powered), BGSCET ADVAYA 2k25, Acharya Institute SRISHTI 2025 State Expo, MIT Mysore Hackverse & Stack Forge Ideathon, and served as Volunteer for the 3rd IEEE ICDSNS 2025 conference."
    },
    {
      keywords: ["rag", "pke", "langchain", "faiss", "groq", "crm"],
      answer: "Lohith specializes in applied AI! He built 'PKE' (a private RAG Q&A system using LangChain, FAISS, FastAPI, MongoDB) and an 'AI-First CRM' module using LangGraph multi-step agent workflows and Groq LLMs for automated doctor interaction logging."
    },
    {
      keywords: ["cgpa", "grades", "education", "college", "vtu"],
      answer: "Lohith is currently in his final year of B.E. in CS & Engineering at Kalpataru Institute of Technology (VTU), holding a strong CGPA of 8.6 / 10, graduating in 2027."
    },
    {
      keywords: ["visionary", "cancer", "grad-cam", "cnn", "tensorflow"],
      answer: "Visionary Diagnostics is a medical imaging app Lohith built using an ensemble of 4 CNNs (VGG16, ResNet50, EfficientNet, MobileNet) with Grad-CAM visual heatmaps for oral cancer (OSCC) detection."
    }
  ]
};
