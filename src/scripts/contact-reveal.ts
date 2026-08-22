function decode(value: string): string {
  try {
    return atob(value);
  } catch {
    return '';
  }
}

function reveal(button: HTMLButtonElement): void {
  const kind = button.dataset.reveal;
  const encoded = button.dataset.value ?? '';
  const encodedDisplay = button.dataset.display ?? encoded;

  const value = decode(encoded);
  const display = decode(encodedDisplay);
  if (!value) return;

  const link = document.createElement('a');
  link.textContent = display;
  link.href = kind === 'phone' ? `tel:${value}` : `mailto:${value}`;
  link.rel = 'nofollow';

  button.replaceWith(link);
  link.focus();
}

document.querySelectorAll<HTMLButtonElement>('button[data-reveal]').forEach((button) => {
  button.addEventListener('click', () => reveal(button), { once: true });
});
