export function printPdfResume(resumeData) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }
  const { personalInfo, experience, projects, certifications, hackathons } = resumeData;
  printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${personalInfo.name} - Executive Technical Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; color: #1c1917; line-height: 1.45; padding: 36px 42px; font-size: 12px; max-width: 860px; margin: 0 auto; background: #fff; }
    header { border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; }
    h1 { font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 4px; }
    .title-sub { font-size: 13px; font-weight: 600; color: #2563eb; margin-bottom: 6px; }
    .header-meta { font-size: 11px; color: #475569; display: flex; flex-wrap: wrap; gap: 14px; font-family: monospace; }
    .header-meta a { color: #0284c7; text-decoration: none; }
    .section { margin-top: 16px; }
    .section-title { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 8px; }
    .item { margin-bottom: 10px; page-break-inside: avoid; }
    .item-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: 600; font-size: 12.5px; color: #0f172a; }
    .item-sub { display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-bottom: 3px; }
    ul { padding-left: 16px; font-size: 11.5px; color: #334155; }
    li { margin-bottom: 2px; }
    .tech-stack { font-size: 10.5px; font-family: monospace; color: #475569; margin-top: 2px; }
    .badge { display: inline-block; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 3px; padding: 1px 5px; font-size: 10px; font-weight: 600; color: #0f172a; }
    @media print {
      body { padding: 0; }
      @page { margin: 12mm 14mm; size: A4; }
    }
  </style>
</head>
<body>
  <header>
    <h1>${personalInfo.name.toUpperCase()}</h1>
    <div class="title-sub">${personalInfo.title} • Kalpataru Institute of Technology (VTU) B.E. CSE '27 (CGPA: 8.6/10)</div>
    <div class="header-meta">
      <span>✉ ${personalInfo.email}</span>
      <span>☎ ${personalInfo.phone}</span>
      <span>📍 ${personalInfo.location}</span>
      <span>🔗 <a href="${personalInfo.github}">${personalInfo.github}</a></span>
      <span>🔗 <a href="${personalInfo.linkedin}">LinkedIn</a></span>
      <span>🌐 <a href="${personalInfo.livePortfolio}">Live Portfolio</a></span>
    </div>
  </header>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p style="font-size: 11.5px; color: #334155; line-height: 1.5;">${personalInfo.summary}</p>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-header">
        <span>Bachelor of Engineering (B.E.) in Computer Science & Engineering</span>
        <span>Expected May 2027</span>
      </div>
      <div class="item-sub">
        <span>Kalpataru Institute of Technology, Tiptur (Visvesvaraya Technological University)</span>
        <span>CGPA: 8.6 / 10.0</span>
      </div>
      <p style="font-size: 11px; color: #64748b;">Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, System Design, Applied Machine Learning.</p>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Work Experience</div>
    ${experience.map(exp => `
      <div class="item">
        <div class="item-header">
          <span>${exp.role}</span>
          <span>${exp.period}</span>
        </div>
        <div class="item-sub">
          <span>${exp.company} • ${exp.location}</span>
          <span>${exp.mode || 'Technical Leadership'}</span>
        </div>
        <ul>
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Flagship Engineering Projects</div>
    ${projects.slice(0, 4).map(p => `
      <div class="item">
        <div class="item-header">
          <span>${p.title} <span style="font-weight: normal; font-size: 11px; color: #64748b;">— ${p.subtitle}</span></span>
          <span class="badge">${p.latencyBenchmark || p.category}</span>
        </div>
        <div class="tech-stack"><strong>Stack:</strong> ${p.stack.join(', ')}</div>
        <p style="font-size: 11.5px; color: #334155; margin: 3px 0;">${p.description}</p>
        <div style="font-size: 10.5px; color: #475569; font-style: italic;">Architecture: ${p.architectureNodes.map(n => n.name).join(' → ')}</div>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Hackathon Wins & Achievements</div>
    ${hackathons.map(h => `
      <div class="item">
        <div class="item-header">
          <span>${h.title}</span>
          <span style="color: #047857; font-weight: 700;">${h.award}</span>
        </div>
        <div class="item-sub">
          <span>Role: ${h.role} • ${h.location}</span>
          <span>Tech: ${h.tech.join(', ')}</span>
        </div>
        <p style="font-size: 11.5px; color: #334155;">${h.desc}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Certifications & Credentials</div>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; list-style-type: none; padding-left: 0;">
      ${certifications.map(c => `
        <li style="font-size: 11px; color: #334155;">• <strong>${c.title}</strong> — ${c.issuer}</li>
      `).join('')}
    </ul>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 250);
    };
  </script>
</body>
</html>`);
  printWindow.document.close();
}
