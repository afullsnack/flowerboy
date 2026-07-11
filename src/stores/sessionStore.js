const SESSION_KEY = 'flowerboy_email';
const SESSION_NAME_KEY = 'flowerboy_name';

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
export function getName() {
  try {
    return sessionStorage.getItem(SESSION_NAME_KEY) || '';
  } catch {
    return '';
  }
}

export function setName(email) {
  try {
    sessionStorage.setItem(SESSION_NAME_KEY, email);
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
