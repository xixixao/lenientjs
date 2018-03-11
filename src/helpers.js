export function simulateKeys(text, cb, finished) {
  let charIndex = 0;
  let timeout;

  function simulateKey() {
    const delay =
      Math.round(Math.random() * 125) + /\s/.test(text[charIndex] || '')
        ? 100
        : 30;

    timeout = setTimeout(() => {
      charIndex++;

      cb(text.substring(0, charIndex));

      if (charIndex < text.length) {
        simulateKey();
      } else {
        // editor.selection.selectAll();
        // editor.setReadOnly(false);
        clearTimeout(timeout);
        finished();
      }
    }, delay);
  }

  simulateKey();
}
