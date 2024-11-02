async function getIpAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('Your IP address is:', data.ip);
  } catch (error) {
    console.error('Error fetching IP address:', error);
  }
}

getIpAddress();
