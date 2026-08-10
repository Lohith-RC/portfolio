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
      id: "mit-mysore-2026",
      title: "MIT Mysore Hackathon 2026",
      role: "Team Lead & Lead Developer (DisasterLens)",
      award: "Participant & Finalist",
      location: "MIT Mysore",
      desc: "Built complete DisasterLens MVP in 24 hours featuring Random Forest SOS triage and DBSCAN geographic rescue clustering.",
      deepDive: `Designed and prototyped DisasterLens under intense 24-hour hackathon constraints. The system solves emergency triage bottlenecks by categorizing victim distress signals using a Random Forest classifier (Priority 1-100) based on age, medical condition, and environment.

Implemented DBSCAN spatial density clustering to group GPS coordinates into discrete rescue zones, allowing first-responder teams to deploy boats and helicopters efficiently. Integrated SHAP explainability so rescue commanders understand why specific signals are prioritized.`,
      tech: ["Python", "Flask", "scikit-learn", "DBSCAN", "SHAP", "SQLite", "Leaflet.js"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "antariksh-2026",
      title: "Bharatiya Antariksh Hackathon 2026",
      role: "Core AI Developer (ModalBridge)",
      award: "National Hackathon Competitor",
      location: "National Level",
      desc: "Co-built cross-modal satellite image retrieval system using ResNet contrastive embeddings and FAISS search as a 4-person team.",
      deepDive: `Developed ModalBridge for the Bharatiya Antariksh National Hackathon. The platform accelerates disaster response by matching multi-spectral satellite imagery patches with textual queries and historical flood/fire maps.

Trained a contrastive projection head using InfoNCE loss over a frozen ResNet-50 backbone. Indexed high-dimensional image embeddings into a FAISS vector database to deliver sub-50ms vector similarity lookups over satellite image tiles.`,
      tech: ["PyTorch", "ResNet-50", "InfoNCE Loss", "FAISS", "Python", "FastAPI"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "code-breaker-2025",
      title: "CODE BREAKER CHALLENGE 1.0",
      role: "Hackathon Competitor",
      award: "GeeksforGeeks & IEEE Powered",
      location: "Global Academy of Technology (GAT)",
      desc: "Completed 24-hour national-level hackathon organized by Dept of AI & ML, setting benchmark for technical innovation.",
      deepDive: `Competed in a 24-hour national hackathon powered by GeeksforGeeks and IEEE. Focused on rapid algorithmic prototyping and building clean RESTful API pipelines under strict judging criteria.`,
      tech: ["Python", "React", "REST APIs", "Git", "Problem Solving"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "advaya-2025",
      title: "ADVAYA - 2k25 National Hackathon",
      role: "Hackathon Competitor",
      award: "IEEE & Manya Sponsored",
      location: "BGS College of Engineering (BGSCET)",
      desc: "Competed in 24-hour national hackathon prototyping real-time software systems.",
      deepDive: `Engineered real-time software modules during a 24-hour coding sprint. Developed modular microservices and user interfaces while pitching technical feasibility to IEEE industry judges.`,
      tech: ["Java", "Spring Boot", "React", "SQL"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "hackverse-2025",
      title: "HACKVERSE 2025 & Ignited Minds Ideathon",
      role: "Ideathon & Hackathon Finalist",
      award: "Stack Forge Hackathon",
      location: "Maharaja Institute of Technology Mysore",
      desc: "Participated in 2-day Hackverse and Ignited Minds Ideathon building innovative software prototypes.",
      deepDive: `Selected as a finalist in both the Stack Forge 24-hour hackathon and Ignited Minds ideathon. Presented system architecture diagrams and working UI prototypes to academic and venture capital evaluators.`,
      tech: ["System Design", "React", "FastAPI", "PostgreSQL"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "srishti-2025",
      title: "SRISHTI 2025 State Level Expo",
      role: "Project Competitor",
      award: "State Level Project Exhibition",
      location: "Acharya Institute of Technology, Bengaluru",
      desc: "Presented innovative software project at state-level competition organized by VTU & Yuvaka Sangha.",
      deepDive: `Demonstrated a full-stack engineering project at the prestigious state-level SRISHTI expo organized by Visvesvaraya Technological University (VTU) and Yuvaka Sangha, competing among top engineering colleges across Karnataka.`,
      tech: ["Full-Stack", "Machine Learning", "System Architecture", "Python"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "navkis-expo-2025",
      title: "Navkis IEEE Project Expo 2025",
      role: "Project Presenter",
      award: "IEEE CEDA & ECE Expo",
      location: "Navkis College of Engineering, Hassan",
      desc: "Exhibited engineering project in association with IEEE Bangalore & Mysore Sections.",
      deepDive: `Exhibited research and project prototypes in association with IEEE Bangalore and Mysore Student Branches, receiving commendation for system reliability and real-world applicability.`,
      tech: ["IEEE Standards", "Python", "Data Engineering"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "ise-xecute-2025",
      title: "ISE-Xecute 8-Hours Internal Hackathon",
      role: "Participant",
      award: "Institutional Hackathon Winner",
      location: "Kalpataru Institute of Technology",
      desc: "Completed 8-hour high-speed development sprint.",
      deepDive: `Fast-paced 8-hour coding sprint solving algorithmic problems and building web utilities within tight memory and time limits.`,
      tech: ["C++", "Python", "Algorithms"],
      proofUrl: "https://github.com/Lohith-RC"
    }
  ],

  certifications: [
    {
      id: "cisco-cyberops",
      title: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      certId: "54bf4b26-468c-485c-9db9-7293d78ed793",
      desc: "Security operations, incident response, vulnerability analysis, and threat detection.",
      deepDive: `Mastered Security Operations Center (SOC) procedures, security monitoring, packet analysis (Wireshark), cryptography principles, host-based intrusion prevention, and threat detection workflows. Verified directly through Cisco Networking Academy.`,
      tech: ["Wireshark", "Network Security", "Incident Response", "Linux CLI", "Threat Analysis"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "ibm-ai-badge",
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      credlyUrl: "https://www.credly.com/badges/df457100-fc07-4c9d-ac06-39a8782794c6",
      desc: "AI fundamentals, machine learning workflows, deep learning neural networks, and ethics.",
      deepDive: `Verified Credly badge covering core Artificial Intelligence concepts, natural language processing foundations, computer vision pipelines, and responsible AI governance.`,
      tech: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "NLP Fundamentals"],
      proofUrl: "https://www.credly.com/badges/df457100-fc07-4c9d-ac06-39a8782794c6"
    },
    {
      id: "algouniversity-graph",
      title: "Graph Theory Programming Camp",
      issuer: "AlgoUniversity",
      desc: "Mentored by Codeforces Master Manas Kumar Verma; solved 17 advanced graph theory & algorithmic challenges.",
      deepDive: `Intensive competitive programming bootcamp focusing on graph algorithms (BFS/DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Topological Sort, Disjoint Set Union, Minimum Spanning Trees). Solved 17 complex algorithmic problems under 1-on-1 Codeforces Master mentorship.`,
      tech: ["Graph Theory", "Algorithms", "C++", "Data Structures", "Dynamic Programming"],
      proofUrl: "https://github.com/Lohith-RC"
    },
    {
      id: "ccna-net-3",
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      certId: "3dd98841-11ea-4bf5-bb25-cf16407f1430",
      desc: "OSPF, WAN concepts, network security principles, ACLs, and network automation.",
      deepDive: `Advanced routing protocols (OSPFv2), WAN technologies, NAT/PAT, Access Control Lists (ACLs), QoS, SDN architecture, REST APIs, and Ansible/Cisco DNA network automation.`,
      tech: ["OSPF", "Access Control Lists", "Network Automation", "WAN", "Cisco Packet Tracer"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "ccna-net-2",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      certId: "6ab69555-95d0-43f7-b216-9a6fa2c2e924",
      desc: "VLANs, inter-VLAN routing, STP, EtherChannel, and wireless LAN configuration.",
      deepDive: `VLAN configuration, Trunking (802.1Q), Spanning Tree Protocol (STP), EtherChannel link aggregation, DHCPv4/v6, SLAAC, and Wireless LAN (WLAN) controllers.`,
      tech: ["VLANs", "STP", "EtherChannel", "Routing Protocols", "Wireless LAN"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "ccna-net-1",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      certId: "8ae200f5-4018-41b9-bb6e-ca4fec65ace6",
      desc: "Network fundamentals, IP addressing, Ethernet, and OSI model layer interactions.",
      deepDive: `Foundational networking principles, IPv4/IPv6 subnetting, transport layer TCP/UDP mechanics, Ethernet switching, and physical layer medium standards.`,
      tech: ["IPv4 / IPv6 Subnetting", "TCP/IP & OSI Model", "Ethernet", "Cisco CLI"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-cyber-essentials",
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      certId: "c6ea8224-84e2-4fbe-8068-de054e150bd1",
      desc: "Security principles, encryption, network defenses, and threat vectors.",
      deepDive: `Comprehensive security fundamentals covering confidentiality, integrity, availability (CIA triad), symmetric/asymmetric encryption, firewalls, and incident response frameworks.`,
      tech: ["Encryption", "Firewalls", "Network Defense", "CIA Triad"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-python-essentials-1",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / OpenEDG",
      certId: "95225433-c3ee-4d74-95a8-e9ec964dbc91",
      desc: "Fundamental Python programming concepts, data types, control flow, functions, and list processing.",
      deepDive: `Mastery of Python fundamental syntax, conditional branching, loops, functions, lists, tuples, and basic algorithm construction. Issued through Cisco Networking Academy.`,
      tech: ["Python 3", "Data Structures", "Functions", "Algorithms"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-python-essentials-2",
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy / OpenEDG",
      certId: "cefdddc5-937d-4ecd-aa0a-cf6f5ed66012",
      desc: "Advanced Python data structures, Object-Oriented Programming (OOP), modules, packages, and file I/O operations.",
      deepDive: `Advanced Python concepts including Object-Oriented Programming (classes, inheritance, polymorphism), exceptions, strings, generators, package management, and file I/O operations.`,
      tech: ["Python 3", "OOP", "Exceptions", "Modules & Packages", "File I/O"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-data-science",
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      certId: "07ef8584-7b82-43a1-8d96-a13bceefa750",
      desc: "Data collection, cleaning, exploratory data analysis, and predictive modeling fundamentals.",
      deepDive: `Comprehensive introduction to data science methodologies, data visualization, statistical analysis, and basic machine learning workflows using Python data science tools.`,
      tech: ["Data Science", "Python", "EDA", "Data Visualization"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-ai-sentiment",
      title: "Apply AI: Analyze Customer Reviews",
      issuer: "Cisco Networking Academy",
      certId: "ee0ca1d0-24bf-4589-ae20-b78ecf4b204b",
      desc: "NLP techniques, sentiment analysis, and machine learning model evaluation.",
      deepDive: `Hands-on Natural Language Processing pipeline construction: tokenization, stop-word removal, TF-IDF vectorization, and sentiment classification using scikit-learn.`,
      tech: ["NLP", "Sentiment Analysis", "scikit-learn", "TF-IDF", "Python"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "cisco-ai-datascience",
      title: "Introduction to Modern AI & Data Science",
      issuer: "Cisco Networking Academy",
      desc: "Machine learning workflows, data preprocessing with Pandas/NumPy, and neural network foundations.",
      deepDive: `End-to-end data science lifecycle, exploratory data analysis (EDA), feature engineering, linear regression, decision trees, and introduction to deep learning architecture.`,
      tech: ["Pandas", "NumPy", "Data Science", "Neural Networks"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "exploring-packet-tracer",
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      certId: "c360f538-6372-4de1-a0dc-7b3d3bb55cd4",
      desc: "Network topology design, device configuration, Packet Tracer simulation, and media protocols.",
      deepDive: `Hands-on network simulation building LAN topologies, configuring routers, switches, servers, and observing PDU packet traversal across OSI model layers.`,
      tech: ["Cisco Packet Tracer", "Network Simulation", "Routers & Switches", "OSI Model"],
      proofUrl: "https://www.credly.com"
    },
    {
      id: "getting-started-packet-tracer",
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      certId: "ba10527c-474d-46fc-8642-fda124d3dfd9",
      desc: "Introduction to Cisco Packet Tracer simulation environment and device interfaces.",
      deepDive: `Initial hands-on configuration of network devices, physical cabling, IP address assignment, and basic ping connectivity testing in Cisco Packet Tracer.`,
      tech: ["Cisco Packet Tracer", "Network Topology", "IP Configuration"],
      proofUrl: "https://www.credly.com"
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
