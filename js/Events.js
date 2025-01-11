
const card = document.getElementById('Event_cards');

const links = document.querySelectorAll('.link-dark');

const sections = {
  All_events: `<h1>Welcome to My All Events page</h1><p>This is the all events page content.</p>`,
  Cricket: `<h1>Welcome to My Cricket Page</h1><p>This is the cricket page content.</p>`,
  Crypto: `<h1>Welcome to My Crypto Page</h1><p>This is the Crypto page content.</p>`,
  Election: `<h1>Welcome to My Election Page</h1><p>This is the Election page content.</p>`,
  News: `<h1>Welcome to My News Page</h1><p>This is the News page content.</p>`,
  Youtube: `<h1>Welcome to My Youtube Page</h1><p>This is the Youtube page content.</p>`,
  Economy: `<h1>Welcome to My Economy Page</h1><p>This is the Economy page content.</p>`,
  Football: `<h1>Welcome to My Football Page</h1><p>This is the Football page content.</p>`,
  Stocks: `<h1>Welcome to My Stocks Page</h1><p>This is the Stocks page content.</p>`,
  Basketball: `<h1>Welcome to My Basketball Page</h1><p>This is the Basketball page content.</p>`,
  Motersport: `<h1>Welcome to My Motersport Page</h1><p>This is the Motersport page content.</p>`,
  Gaming: `<h1>Welcome to My Gaming Page</h1><p>This is the Gaming page content.</p>`
};


function setActiveLink(activeLink) {
  links.forEach((link) => link.classList.remove('active')); 
  activeLink.classList.add('active'); 
}


function updateContent(sectionId) {
  card.innerHTML = sections[sectionId]; 
  localStorage.setItem('activeSection', sectionId); 
}


function handleLinkClick(event) {
  event.preventDefault();
  const sectionId = event.target.id;
  updateContent(sectionId);
  setActiveLink(event.target);
}

links.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedSection = localStorage.getItem('activeSection') || 'All_events'; 
  updateContent(savedSection); 
  const activeLink = document.getElementById(savedSection); 
  if (activeLink) {
    setActiveLink(activeLink); 
  }
});
