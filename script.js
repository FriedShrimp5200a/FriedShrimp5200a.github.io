async function getIpAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const getip = document.getElementById('getip');
        getip.innerHTML = 'Your IP address is ' + data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
  }
}

getIpAddress();
