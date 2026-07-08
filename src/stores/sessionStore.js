const SESSION_KEY = 'flowerboy_email';

export function getEmail() {
  try {
    return sessionStorage.getItem(SESSION_KEY) || '';
  } catch {
    return '';
  }
}

export function setEmail(email) {
  try {
    sessionStorage.setItem(SESSION_KEY, email);
    window.dispatchEvent(new CustomEvent('email-changed', { detail: { email } }));
  } catch {
    // sessionStorage not available
  }
}

export function hasEmail() {
  return !!getEmail();
}

export function clearEmail() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new CustomEvent('email-changed', { detail: { email: '' } }));
  } catch {
    // sessionStorage not available
  }
}
