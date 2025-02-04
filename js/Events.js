
const card = document.getElementById('Event_cards');

const links = document.querySelectorAll('.link-dark');

const sections = {
  All_events: `<div class="d-flex pb-3">
                <div style="border-radius: 20px; box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);" class="px-3 py-4 m-2 tradeOption">
                  <div className="d-flex justify-content-center">
                    <img style="width: 50px; height: 50px; border-radius: 10px;" src="../images/illustration/Trading_on_home (2).png" alt="">
                    <h4>Eastern Cape to win the match vs Pretoria?</h4>
                  </div>
                  <div class="d-flex chart_icon pt-2">
                    <img style="width: 20px; height: 20px;" src="../images/illustration/Bar_Chart.png" alt="">
                    <p>2998 Traders</p>
                  </div>
                  <p class="py-2">Statehood to be restored in J&K by the end of March</p>
                  <div style="justify-content: space-around;" class="d-flex trade_buttons">
                    <button style="background-color: #D8E8FF; color: #1A7BFF; font-weight: 500; padding: 7px 25px;" type="button" class="btn Yes">Yes &#8377; 1.5</button>
                    <button style="background-color: #FBE1DE; color: #DC2806; font-weight: 500; padding: 7px 25px;" type="button" class="btn No">No &#8377; 8.5</button>
                  </div>
                </div>
              </div>`,
  Cricket: `<div class="d-flex pb-3">
                <div class="px-3 py-4 m-2 tradeOption">
                  <img src="../images/illustration/Trading_on_home (2).png" alt="">
                  <div class="d-flex chart_icon pt-2">
                    <img src="../images/illustration/Bar_Chart.png" alt="">
                    <p>2998 Traders</p>
                  </div>
                  <p class="py-2">Statehood to be restored in J&K by the end of March</p>
                  <div class="d-flex trade_buttons">
                    <button type="button" class="btn Yes">Yes &#8377; 1.5</button>
                    <button type="button" class="btn No">No &#8377; 8.5</button>
                  </div>
                </div>
              </div>`,
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
