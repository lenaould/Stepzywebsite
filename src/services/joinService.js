export function saveJoinRequest(data) {
  const requests = JSON.parse(localStorage.getItem('joinRequests') || '[]');
  requests.push({ id: Date.now(), date: new Date().toISOString(), ...data });
  localStorage.setItem('joinRequests', JSON.stringify(requests));
}
export function getJoinRequests() { return JSON.parse(localStorage.getItem('joinRequests') || '[]'); }
