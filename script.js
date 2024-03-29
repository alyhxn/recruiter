const eye = document.querySelectorAll(".eye");

if (eye.length > 0) {
  eye.forEach((item) => {
    item.addEventListener("click", () => {
      const parentDiv = item.parentElement;
      const passwordInput = parentDiv.querySelector("input");
      togglePasswordVisibility(passwordInput, item);
    });
  });

  function togglePasswordVisibility(pw, icon) {
    if (pw.type === "password") {
      pw.type = "text";
      icon.src = "images/eye-closed.svg";
      icon.alt = "Eye Closed Icon";
    } else {
      pw.type = "password";
      icon.src = "images/eye.svg";
      icon.alt = "Eye Icon";
    }
  }
}

try{
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  new Chart("chart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [860, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            display: false, //this will remove all the x-axis grid lines
          },
        ],
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
            },
          },
        ],
      },
    },
  });
}
catch(e){

}

function loadName(){
  const href = window.location.href;
  const name = href.slice(href.indexOf('=')+1).replace('_',' ');
  const e = document.getElementsByClassName('name');
  for(let i=0; i<e.length; i++){
    e[i].innerHTML = name
  }
}


function toggleWindow(title){
  const e = document.getElementById('window')
  e.classList.toggle('active')
  if(title){
    e.querySelector('#window-title').innerHTML = title
    if(title === 'Edit Cost'){
      e.querySelector('.delete-btn').classList.remove('hidden')
    }
    else{
      e.querySelector('.delete-btn').classList.add('hidden')
    }
  }
}

function removeDropdown(){
  setTimeout(() => {
    const e = document.getElementById('dropdown')
    e.classList.remove('active')
  }, 200)
}

function toggleDropdown(){
  const e = document.getElementById('dropdown')
  e.classList.toggle('active')
}

function togglePopup(n){
  const e = document.getElementById('popup'+n)
  e.classList.toggle('active')
}

function toggleCalendar(e){
  const calendar = e.querySelector('.calendar')
  e.classList.toggle('active')
  calendar.classList.toggle('active')
}

function removeCalendar(e){
  const calendar = e.querySelector('.calendar')
  e.classList.remove('active')
  calendar.classList.remove('active')
}

function loadSidebar(active){
  let html = `
  <div class="flex flex-col sidebar-container bg-white">
  <div class="font-bold font-lgr w-full mobile-hide">
      <div>Management</div>
      <div>Dashboard</div>
  </div>
  <nav class="flex flex-col sidebar w-full">
      <div class="mobile-hide" style="color: var(--black); opacity: 0.7;">Menu</div>
      <ul class="side-items-container flex flex-col w-full">
          <li>
              <a id="index" href="index.html" class="flex justify-between items-center rounded-sm side-item">
                  <span class="flex gap-sm items-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 18.9434V13.4339C22 11.6317 22 10.7307 21.6295 9.93422C21.2589 9.13776 20.5612 8.53912 19.1657 7.34183L18.1102 6.43618C15.4403 4.14539 14.1053 3 12.5 3C10.8947 3 9.55975 4.14539 6.88982 6.43618L5.83426 7.34183C4.43881 8.53912 3.74108 9.13776 3.37054 9.93422C3 10.7307 3 11.6317 3 13.4339V18.9434C3 19.8929 3 20.3676 3.1607 20.7421C3.37497 21.2414 3.78595 21.6381 4.30322 21.8449C4.69119 22 5.18302 22 6.16667 22H6.51852C7.17294 22 7.50016 22 7.76862 21.9306C8.49714 21.7421 9.06619 21.1929 9.2614 20.4896C9.33333 20.2305 9.33333 19.9147 9.33333 19.283V16.9057C9.33333 15.2175 10.751 13.8491 12.5 13.8491C14.249 13.8491 15.6667 15.2175 15.6667 16.9057V19.283C15.6667 19.9147 15.6667 20.2305 15.7386 20.4896C15.9338 21.1929 16.5029 21.7421 17.2314 21.9306C17.4999 22 17.8271 22 18.4815 22H18.8333C19.817 22 20.3088 22 20.6968 21.8449C21.214 21.6381 21.6251 21.2414 21.8393 20.7421C22 20.3676 22 19.8929 22 18.9434Z" fill="#0A121C"/>
                      </svg>                       
                      <span class="mobile-hide">Dashboard</span>
                  </span>
                  <div class="mobile-hide" >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87213 3.34088C6.20163 3.01137 6.73587 3.01137 7.06537 3.34088L12.1279 8.40338C12.4574 8.73288 12.4574 9.26712 12.1279 9.59662L7.06537 14.6591C6.73587 14.9886 6.20163 14.9886 5.87213 14.6591C5.54262 14.3296 5.54262 13.7954 5.87213 13.4659L10.338 9L5.87213 4.53412C5.54262 4.20462 5.54262 3.67038 5.87213 3.34088Z" fill="#0A121C"/>
                      </svg>
                  </div>  
              </a>
          </li>
          <li>
              <a id="clients" href="clients.html" class="flex justify-between items-center rounded-sm side-item">
                  <span class="flex gap-sm items-center">
                      <div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#ADB4BC"/>
                              <path d="M17.08 14.15C14.29 12.29 9.74002 12.29 6.93002 14.15C5.66002 15 4.96002 16.15 4.96002 17.38C4.96002 18.61 5.66002 19.75 6.92002 20.59C8.32002 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill="#ADB4BC"/>
                          </svg>                 
                      </div>        
                      <span class="mobile-hide">Clients</span>

                  </span>
                  <div class="mobile-hide" >
                      <div>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87213 3.34088C6.20163 3.01137 6.73587 3.01137 7.06537 3.34088L12.1279 8.40338C12.4574 8.73288 12.4574 9.26712 12.1279 9.59662L7.06537 14.6591C6.73587 14.9886 6.20163 14.9886 5.87213 14.6591C5.54262 14.3296 5.54262 13.7954 5.87213 13.4659L10.338 9L5.87213 4.53412C5.54262 4.20462 5.54262 3.67038 5.87213 3.34088Z" fill="#0A121C"/>
                          </svg>
                      </div>
                  </div>  
              </a>
          </li>
          <li>
              <a id="reset-password-dashboard" href="reset-password-dashboard.html" class="flex justify-between items-center rounded-sm side-item">
                  <span class="flex gap-sm items-center">
                      <div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.91 11.12V6.73001C20.91 5.91001 20.29 4.98001 19.52 4.67001L13.95 2.39001C12.7 1.88001 11.29 1.88001 10.04 2.39001L4.47003 4.67001C3.71003 4.98001 3.09003 5.91001 3.09003 6.73001V11.12C3.09003 16.01 6.64003 20.59 11.49 21.93C11.82 22.02 12.18 22.02 12.51 21.93C17.36 20.59 20.91 16.01 20.91 11.12ZM12.75 12.87V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V12.87C10.24 12.55 9.50003 11.61 9.50003 10.5C9.50003 9.12001 10.62 8.00001 12 8.00001C13.38 8.00001 14.5 9.12001 14.5 10.5C14.5 11.62 13.76 12.55 12.75 12.87Z" fill="#ADB4BC"/>
                          </svg>          
                      </div>                      
                      <span class="mobile-hide">Reset Password</span>
                  </span>
                  <div class="mobile-hide" >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87213 3.34088C6.20163 3.01137 6.73587 3.01137 7.06537 3.34088L12.1279 8.40338C12.4574 8.73288 12.4574 9.26712 12.1279 9.59662L7.06537 14.6591C6.73587 14.9886 6.20163 14.9886 5.87213 14.6591C5.54262 14.3296 5.54262 13.7954 5.87213 13.4659L10.338 9L5.87213 4.53412C5.54262 4.20462 5.54262 3.67038 5.87213 3.34088Z" fill="#0A121C"/>
                      </svg>
                  </div>  
              </a>
          </li>
          <li>
              <a onclick="togglePopup(1)" class="flex justify-between items-center rounded-sm side-item">
                  <span class="flex gap-sm items-center">
                      <div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.87999 12.07C7.87999 11.66 8.21999 11.32 8.62999 11.32H14.11V2.86C14.1 2.38 13.72 2 13.24 2C7.34999 2 3.23999 6.11 3.23999 12C3.23999 17.89 7.34999 22 13.24 22C13.71 22 14.1 21.62 14.1 21.14V12.81H8.62999C8.20999 12.82 7.87999 12.48 7.87999 12.07Z" fill="#ADB4BC"/>
                              <path d="M20.54 11.54L17.7 8.68997C17.41 8.39997 16.93 8.39997 16.64 8.68997C16.35 8.97997 16.35 9.45997 16.64 9.74997L18.2 11.31H14.1V12.81H18.19L16.63 14.37C16.34 14.66 16.34 15.14 16.63 15.43C16.78 15.58 16.97 15.65 17.16 15.65C17.35 15.65 17.54 15.58 17.69 15.43L20.53 12.58C20.83 12.3 20.83 11.83 20.54 11.54Z" fill="#ADB4BC"/>
                          </svg>                                    
                      </div>
                      <span class="mobile-hide">Log Out</span>
                  </span>
                  <div class="mobile-hide" >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87213 3.34088C6.20163 3.01137 6.73587 3.01137 7.06537 3.34088L12.1279 8.40338C12.4574 8.73288 12.4574 9.26712 12.1279 9.59662L7.06537 14.6591C6.73587 14.9886 6.20163 14.9886 5.87213 14.6591C5.54262 14.3296 5.54262 13.7954 5.87213 13.4659L10.338 9L5.87213 4.53412C5.54262 4.20462 5.54262 3.67038 5.87213 3.34088Z" fill="#0A121C"/>
                      </svg>
                  </div>  
              </a>
          </li>
      </ul>
  </nav>
  <div id="popup1" class="popup flex justify-center items-center">
      <div class="bg-white rounded-md flex flex-col justify-center text-center gap-md items-center">
          <div class="font-bold font-lgr">Are you sure you want to log out?</div>
          <div>If you agree, you will be logged out of your account</div>
          <button onclick="togglePopup(1)" class="w-full p-md">No, I want to stay</button>
          <a class="w-full" href="signup.html"><button class="w-full add-cost-btn p-md" style="font-weight: 600;">Yes, log me out</button></a>
      </div>
  </div>
</div>

  `
  html = html.trim();
  const template = document.createElement('template');
  template.innerHTML = html;
  

  const body = document.body;
  body.prepend(template.content.firstChild);

  const e = document.getElementById(active);
  e.classList.add('active');
}