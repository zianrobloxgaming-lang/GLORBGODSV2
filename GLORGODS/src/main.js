import './index.css';
import { initializeInsecticideCalculator } from './glorb.js';

const pages = {
  '/': `
    <div class="max-w-4xl flex flex-col items-start gap-8">
      <div>
        <h2 class="text-3xl font-bold mb-4">Introduction</h2>
        <p class="text-muted-foreground leading-relaxed font-bold mb-4">Lets get started.</p>
        <p class="text-muted-foreground leading-relaxed">First lets talk about what is this website by talking to our chat bot Pleti.</p>
        
      </div>

      <!-- Toggle Button (In Page flow) -->
      <button id="toggle-chat" class="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center gap-2">
        <span>💬</span> Open Support Chat
      </button>

      <!-- In-page Chatbot UI -->
      <div id="chat-window" class="hidden w-96 bg-card border border-border rounded-xl shadow-lg flex flex-col overflow-hidden">
        <div class="bg-primary text-primary-foreground p-4 font-semibold flex justify-between items-center text-lg">
          <span>Pleti Support</span>
          <button id="close-chat" class="text-white hover:text-gray-200 cursor-pointer text-2xl">&times;</button>
        </div>
        <div id="chat-messages" class="p-4 h-96 overflow-y-auto flex flex-col gap-4 text-base bg-muted/10">
          <div class="bg-muted text-muted-foreground p-3 rounded-lg self-start max-w-[85%]">
            Hello! I can answer a few specific questions. Select one below:
          </div>
        </div>
        <div class="p-4 border-t border-border flex flex-col gap-3 bg-muted/30">
          <button id="ask-q1" class="text-left text-sm bg-white border border-border p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
            How many people are affected by this problem in 2026?
          </button>
          <button id="ask-q2" class="text-left text-sm bg-white border border-border p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
            Why do these happen?
          </button>
          <button id="ask-q3" class="text-left text-sm bg-white border border-border p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
            What is this website about?
          </button>
          <button id="ask-q4" class="text-left text-sm bg-white border border-border p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
            What kind of method are you using to solve this problem?
          </button>
          <button id="ask-q5" class="text-left text-sm bg-white border border-border p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
            Introduce us about this website.
          </button>
        </div>
      </div>
    </div>
  `,
  '/problem': `
    <div class="max-w-4xl flex flex-col gap-4 ">
      <section>
        <h2 class="text-3xl font-bold mb-6"> Review list of problems</h2>
        <p class="text-muted-foreground leading-relaxed">1. Biological Pressures in Agriculture</p>
        <p class="text-muted-foreground leading-relaxed">2. Tool Management Issues when Farming </p>
        <p class="text-muted-foreground leading-relaxed">3. Plant Diseases and Causes</p>
        <h2 class="text-3xl font-bold mb-6"> Evaluate each problems</h2>
        <div class="border border-border rounded-lg overflow-hidden ">
        
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-muted text-sm border-b border-border h-8">
                <th class="px-4 font-medium">Problem</th>
                <th class="px-4 font-medium border-l border-border">Real-life issue?</th>
                <th class="px-4 font-medium border-l border-border">Can we research it?</th>
                <th class="px-4 font-medium border-l border-border">Can we improve it?</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr class="h-12">
                <td class="px-4 text-muted-foreground">1. Biological Pressures in Agriculture</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
              </tr>
              <tr class="h-12">
                <td class="px-4 text-muted-foreground">2. Tool Management Issues when Farming</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
              </tr>
              <tr class="h-12">
                <td class="px-4 text-muted-foreground">3. Plant Diseases and Causes</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
                <td class="px-4 text-muted-foreground border-l border-border">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
      <h2 class="text-3xl font-bold mb-6"> Chosen Problem</h2>
        <p class="text-muted-foreground leading-relaxed mb-5 font-bold">1. Biological Pressures in Agriculture</p>

        <h2 class="text-3xl font-bold mb-6"> Explain the problem</h2>
        <h2 class="text-3xl font-bold mb-6">Problem Statement:</h2>
        
        <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div class="flex-1">
            <p class="text-muted-foreground leading-relaxed">In agriculture, there are many problems people encounter when planting or farming. They must control the soil's nutrients, breathability and moisture, and also determine whether the weather is good for planting or if the season is the best time to plant something. Now, these are all problems that are solved when first starting, and people get better at dealing with it as they get more experience. However, one common problem whether someone is experienced or a beginner, are biological pressures. Unlike other problems, which are already predetermined and predictable, biological pressures are caused by adapting, living organisms making it unpredictable. </p>
          </div>
          <div class="flex-shrink-0">
            <div class="w-64 h-48 bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden">
              <img src="src/imports/images__1_.jpe" alt="placeholder" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="">
            <div class="w-64 h-48 bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden">
              <img src="src/imports/images__2_.jpe" alt="placeholder" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex-1">
          <h2 class="text-3xl font-bold mb-6">Why is it important?</h2>
            <p class="text-muted-foreground leading-relaxed">The importance of controlling or reducing bacteria and other organisms is to provide a stable environment for agriculture to grow, for people to eat the food provided by crops, and for farmers and industries to gain income. These biological entities feed and transmit their diseases to the plant, causing them to wilt, rot, and/or die. If an organism managed to feed on a plant or crop, the affected people (i.e., farmers and consumers) would have less product to use and damage the global food security. An example would be: A swarm of locusts infiltrated a small-scale farm, they ate all the crops that a farmer worked for and devastated both income and even their meals. These bacterias are not harmful for the environment itself, but for the people who rely on agriculture.
</p>
          </div>
        </div>
        
<h2 class="text-3xl font-bold mb-6">Who is affected?</h2>
        
        <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div class="flex-1">
            <p class="text-muted-foreground leading-relaxed">The people who are affected by this are the stakeholders ranging from farmers to large commercial agricultural enterprises. Furthermore, this problem can scale up globally and disrupt food supply chains and raise prices of food that can affect everyday consumers.  </p>
          </div>
          <div class="">
            <div class="w-64 h-48 bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden">
              <img src="src/imports/istockphoto-482659707-612x612.jpe" alt="placeholder" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="">
            <div class="w-64 h-48 bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden">
              <img src="src/imports/photo-1630995020982-3cde9415b0e1.jpe" alt="placeholder" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="flex-1">
          <h2 class="text-4xl font-bold mb-6">Possible Causes:</h2>
            <p class="text-muted-foreground leading-relaxed">Biological pressures are living organisms that give challenge to an organism’s ability to survive and reproduce in its environment. Causes include shifts in the environment like climate change and extreme weather and pollution. These threats in the environment are likely the cause of most biological organisms to not grow.
</p>
          </div>
        </div>
        
          
      </section>
    </div>
  `,
  '/target': `
    <div class=" px-19 mx-19">
      <h4 class=" font-bold mb-4">Chosen Problem: 
Biological Pressures
</h4>
      <p class="text-muted-foreground leading-relaxed">1. Science and Technology </p
      <p class="text-muted-foreground leading-relaxed">2. Howto </p
      <p class="text-muted-foreground leading-relaxed">3. Education</p
      
      
      <h4 class=" font-bold mb-4">Who usually watches content in your chosen category?</h4>
      
      <p class="text-muted-foreground leading-relaxed">The people who usually watch the content in our chosen category are kids, millennial and young adults. The range for our target audience is mostly young adults and millennials, however </p>
      
      <h4 class=" font-bold mb-4">Chosen Category: Education</h4>
      
      <p class="text-muted-foreground leading-relaxed">Age Group: 18 - 40 years old. </p>
      
      <h4 class=" font-bold mb-4">Interests:
</h4>
      
      <p class="text-muted-foreground leading-relaxed">People in this age range are typically looking for guides on how to regularly stop and defend their crops and plants from pest outbreaks, diseases, and pathogens.</p>
      
      <h4 class=" font-bold mb-4">Needs or Problems They Experience: </h4>
      
      <p class="text-muted-foreground leading-relaxed">People in this age range are mostly starting out farming and taking care of plants on a daily basis without assistance, so when pest and weed outbreaks start, they don't have enough knowledge to deal with the specific and varying types of insects or diseases. They don't know the correct and sustainable methods, pesticides, and steps in order to  continuously solve these problems and issues. </p>
      
      <h4 class=" font-bold mb-4">Possible Background (student, worker, parent, etc.):</h4>
      
      <p class="text-muted-foreground leading-relaxed">The possible backgrounds of the people are highschool/college students, young farmers, and workers. Take note that some of these backgrounds, even though they aren't farmers, are possibly garden owners who take care of plants regularly. </p>

      <h4 class=" font-bold mb-4">How does this audience connect to your chosen problem?</h4>
      
      <p class="text-muted-foreground leading-relaxed">The audience connects because their homes with gardens or pots and plants depend on managing pests, weeds, and diseases despite their  limited budgets and resources. We believe they are the best audience to watch videos because they would look for straightforward and accessible videos.</p>
      
      <h4 class=" font-bold mb-4">Why are they the best target audience for your content?</h4>
      
      <p class="text-muted-foreground leading-relaxed">A wide variety of our audience captures ages that value simplicity and straight to the point information.</p>
      
    </div>
  `,
  '/calculator': `
    <div class="mix-calculator">
      

      <section class="mix-calculator__panel">
        <div class="mix-calculator__choices">
          <label class="mix-field" for="plant-size">
            <span>Section 1: Plant size</span>
            <select id="plant-size">
              <option value="small">Small plants</option>
              <option value="medium">Medium plants</option>
              <option value="large">Large plants</option>
            </select>
          </label>

          <label class="mix-field" for="application-rate">
            <span>Section 2: Rate per 1 liter water</span>
            <select id="application-rate">
              <option value="1">1 g per 1 liter</option>
              <option value="2">2 g per 1 liter</option>
              <option value="3">3 g per 1 liter</option>
            </select>
          </label>

          <label class="mix-field" for="farm-area">
            <span>Section 3: Area (SM)</span>
            <select id="farm-area">
              <option value="10000">10,000 SM</option>
              <option value="20000">20,000 SM</option>
              <option value="30000">30,000 SM</option>
            </select>
          </label>
        </div>

        <div class="mix-calculator__answer" >
          <div class="mix-calculator__total">
            <span>Insecticide</span>
            <strong id="grams-answer">350 g</strong>
            <p id="kilograms-answer">0.35 kg</p>
          </div>

          <div class="mix-calculator__water-total">
            <span>Total water needed</span>
            <strong id="water-answer">350 L</strong>
          </div>
        </div>
      </section>
    </div>
  `,
  '/about': `
    <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-8 py-12">
      <div>
        <h2 class="text-3xl font-bold mb-4">THANK YOU FOR READING THIS WEBSITE!!!!</h2>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Maribeth Balingbing - Researcher, Mod. </p>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Hervin Anthony Coronado - Scribe, Researcher, ideas. </p>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Eli David Concepcion - Leader, Researcher. </p>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Prince Harry Fresnoza - Researcher. </p>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Zian Jarom Legaspi - Scribe, Researcher, website maker. </p>
        <p class="text-muted-foreground leading-relaxed max-w-lg mx-auto">[AP-Student] [AP-Student] Zian Kyle Salvador - Resaecher. </p>
      </div>
     
    </div>
  `
};

const navItems = [
  { name: "Home", icon: "🏠", path: "/" },
  { name: "Problem", icon: "❗", path: "/problem" },
  { name: "Target", icon: "🎯", path: "/target" },
  { name: "Calculator", icon: "123", path: "/calculator" },
  { name: "About", icon: "✨", path: "/about" },
];

function render() {
  const path = window.location.pathname;
  const content = pages[path] || pages['/'];
  
  const navHtml = navItems.map(item => {
    const isActive = path === item.path;
    const baseClass = "flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl transition-colors ease-out duration-1000 cursor-pointer nav-link border-none bg-transparent";
    const activeClass = isActive 
      ? "bg-white/20 text-white" 
      : "text-primary-foreground/80 hover:bg-white/10 hover:text-white";
      
    return `
      <button data-path="${item.path}" class="${baseClass} ${activeClass}">
        <span class="${item.name === 'Calculator' ? 'text-xs font-black' : 'text-2xl'}">${item.icon}</span>
        <span class="text-[10px] font-semibold uppercase tracking-wider">${item.name}</span>
      </button>
    `;
  }).join('');

  const html = `
    <div class="flex h-screen bg-background text-foreground font-sans">
      
      <aside class="w-18 flex-shrink-0 bg-primary flex flex-col items-center py-6 border-r border-border">
        <nav class="flex flex-col gap-2">
          ${navHtml}
        </nav>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-w-0 bg-background">
        
        <header class="h-13 border-b border-border flex items-center px-8 flex-shrink-0">
          <h1 class="text-xl font-bold tracking-tight text-foreground">Group 4 website</h1>
        </header>

        <!-- Page Content -->
        <main class="flex-1 overflow-auto flex flex-col relative">
          <div class="flex-1 p-8">
            ${content}
          </div>
          
          <!-- Footer -->
          <footer class="border-t border-border p-6 text-center text-sm text-muted-foreground bg-card/50">
            <p>&copy; 2026 Glorbgods. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  `;

  document.getElementById('root').innerHTML = html;

  // Re-attach Navigation listeners
  document.querySelectorAll('.nav-link').forEach(button => {
    button.addEventListener('click', (e) => {
      const targetPath = e.currentTarget.getAttribute('data-path');
      window.history.pushState({}, '', targetPath);
      render();
    });
  });

  // Chatbot Logic //
  if (path === '/') {
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');

    // Try to preserve chat open state across navigation
    if (window.chatOpen) chatWindow.classList.remove('hidden');

    document.getElementById('toggle-chat').addEventListener('click', () => {
      window.chatOpen = !window.chatOpen;
      chatWindow.classList.toggle('hidden', !window.chatOpen);
    });

    document.getElementById('close-chat').addEventListener('click', () => {
      window.chatOpen = false;
      chatWindow.classList.add('hidden');
    });

    function appendMessage(text, isUser) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `p-3 rounded-lg text-base max-w-[85%] ${
        isUser ? 'bg-primary text-primary-foreground self-end' : 'bg-muted text-muted-foreground self-start'
      }`;
      msgDiv.textContent = text;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    document.getElementById('ask-q1').addEventListener('click', () => {
      appendMessage("How many people are affected by this problem in 2026?", true);
      setTimeout(() => appendMessage("Over 1 billion globably", false), 400);
    });

    document.getElementById('ask-q2').addEventListener('click', () => {
      appendMessage("Why do these happen?", true);
      setTimeout(() => appendMessage("These biological pressures happen due to a storm, human, and evolutionary factors.", false), 400);
    });

    document.getElementById('ask-q3').addEventListener('click', () => {
      appendMessage("What is this website about?", true);
      setTimeout(() => appendMessage("It is about AFA or our chosen problem Biological Pressures in Agriculture", false), 400);
    });

    document.getElementById('ask-q4').addEventListener('click', () => {
      appendMessage("What kind of method are you using to solve this problem?", true);
      setTimeout(() => appendMessage("It is problem-focused approach or Audience-First approach i think therye in the middle of it.", false), 400);
    });

    document.getElementById('ask-q5').addEventListener('click', () => {
      appendMessage("Introduce us about this website.", true);
      setTimeout(() => appendMessage("This website will start with identifying the problem or setting up and picking a problem, then evaluate, now choose, and explain. \n\nAfter that were going to identify our target audience to fix this problem. \n\nInformation will be provided by the website so START WANDERING THE WEBSTIE!!", false), 400);
    });
  }

  if (path === '/calculator') {
    initializeInsecticideCalculator();
  }
}

// Listen for browser back/forward buttons
window.addEventListener('popstate', render);

// Initial render
render();
