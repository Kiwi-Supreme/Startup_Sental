// script.js

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('login-btn').addEventListener('click', () => showForm('login'));
  document.getElementById('signup-btn').addEventListener('click', () => showForm('signup'));
});

function showForm(type) {
  document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('signup-form').style.display = type === 'signup' ? 'block' : 'none';
  document.getElementById('dashboard').style.display = 'none';
}

function handleLogin(event) {
  event.preventDefault();
  const userType = document.getElementById('login-user-type').value;
  showDashboard(userType);
}

function handleSignUp(event) {
  event.preventDefault();
  const userType = document.getElementById('signup-user-type').value;
  showDashboard(userType);
}

function showDashboard(userType) {
  document.getElementById('main-content').style.display = 'none';
  const dashboard = document.getElementById('dashboard');
  dashboard.style.display = 'block';
  dashboard.innerHTML = `<h2>${userType === 'investor' ? 'Investor' : 'Startup'} Dashboard</h2>`;
  dashboard.innerHTML += userType === 'investor' ? getInvestorFilters() : getStartupFilters();
}

function getInvestorFilters() {
  return `
    <form>
      <h3>Basic</h3>
      <label>Stage of Startup:</label>
      <select><option>Idea</option><option>MVP</option><option>Seed</option><option>Series A</option></select><br><br>

      <label>Industry/Sector:</label>
      <select><option>Tech</option><option>Fintech</option><option>HealthTech</option><option>D2C</option><option>B2B</option></select><br><br>

      <label>Founder Profile:</label>
      <select><option>Full-time</option><option>Experienced</option><option>Domain Expert</option></select><br><br>

      <label>Incorporation Documents:</label>
      <select><option>CIN</option><option>GST</option><option>Registered</option></select><br><br>

      <label>Equity Structure:</label>
      <select><option>Clean Cap Table</option><option>>50% Founder Ownership</option></select><br><br>

      <label>Business Model:</label>
      <select><option>SaaS</option><option>D2C</option><option>B2B</option><option>Marketplace</option></select><br><br>

      <h3>Intermediate</h3>
      <label>Product Readiness:</label>
      <select><option>MVP</option><option>Prototype</option><option>Beta</option><option>Live</option></select><br><br>

      <label>Traction Metrics:</label>
      <select><option>MRR</option><option>ARR</option><option>Active Users</option><option>CAC</option><option>Churn</option></select><br><br>

      <label>Market Size:</label>
      <select><option>TAM</option><option>SAM</option><option>SOM</option></select><br><br>

      <label>Early Customer Acquisition:</label>
      <select><option>Paying Users</option><option>Engaged Users</option></select><br><br>

      <label>MoM Growth:</label>
      <select><option>Revenue Growth</option><option>User Growth</option></select><br><br>

      <label>IP or Tech Edge:</label>
      <select><option>Patents</option><option>Algorithms</option><option>AI</option></select><br><br>

      <h3>Advanced</h3>
      <label>Financial Metrics:</label>
      <select><option>EBITDA</option><option>Burn Rate</option><option>Runway</option><option>Gross Margin</option></select><br><br>

      <label>Use of Funds:</label>
      <select><option>Hiring</option><option>Product Dev</option><option>Marketing</option></select><br><br>

      <label>Exit Potential:</label>
      <select><option>IPO</option><option>M&A</option><option>Next Round Ready</option></select><br><br>

      <label>Cap Table Cleanliness:</label>
      <select><option>Clean</option><option>No unusual dilution</option></select><br><br>

      <label>Legal Risks:</label>
      <select><option>No IP Issues</option><option>Compliant</option><option>Clear Contracts</option></select><br><br>
    </form>
  `;
}

function getStartupFilters() {
  return `
    <form>
      <h3>Basic</h3>
      <label>Stage Identification:</label>
      <select><option>Idea</option><option>MVP</option><option>Seed</option><option>Growth</option><option>Series A+</option></select><br><br>

      <label>Type of Product:</label>
      <select><option>Not Built</option><option>Launched</option><option>Beta Users</option></select><br><br>

      <label>Team Structure:</label>
      <select><option>Tech Only</option><option>Ops Only</option><option>Balanced</option></select><br><br>

      <label>Registration:</label>
      <select><option>Yes</option><option>No</option></select><br><br>

      <label>Initial Market:</label>
      <select><option>Identified</option><option>Validated</option></select><br><br>

      <h3>Intermediate</h3>
      <label>Traction:</label>
      <select><option>Users</option><option>Customers</option><option>Revenue</option></select><br><br>

      <label>Revenue:</label>
      <select><option>Yes</option><option>No</option><option>Recurring</option></select><br><br>

      <label>Funding Needs:</label>
      <select><option>< $100K</option><option>$100K - $500K</option><option>$500K+</option></select><br><br>

      <label>Metrics:</label>
      <select><option>CAC</option><option>LTV</option><option>Burn Rate</option><option>MRR</option></select><br><br>

      <label>Branding:</label>
      <select><option>Website</option><option>Pitch Deck</option><option>Logo</option></select><br><br>

      <h3>Advanced</h3>
      <label>Market Size Analysis:</label>
      <select><option>TAM Known</option><option>SAM Known</option><option>SOM Known</option></select><br><br>

      <label>Competitive Advantage:</label>
      <select><option>Better Pricing</option><option>More Features</option><option>IP Protected</option></select><br><br>

      <label>Data Room Prep:</label>
      <select><option>All Docs Ready</option><option>Metrics Available</option><option>KPI Dashboard</option></select><br><br>

      <label>Legal & Compliance:</label>
      <select><option>Contracts Signed</option><option>IP Secured</option><option>GDPR/DPDP</option></select><br><br>

      <label>Exit Path Clarity:</label>
      <select><option>3–5 Year Plan</option><option>Clear Milestones</option></select><br><br>
    </form>
  `;
}
function getSelectedFilters() {
  const selects = document.querySelectorAll('#dashboard select');
  const selected = {};
  selects.forEach(select => {
    selected[select.previousElementSibling.innerText] = select.value;
  });
  console.log("Selected Filters:", selected);
  alert("Filters submitted! Check the console for details.");
}
