export function simulateKeys(text, cb, {after, before} = {}) {
  let charIndex = 0;
  let timeout;

  return new Promise(resolve => {
    function simulateKey() {
      const [match] = text.slice(charIndex).match(/^[^\s]+/) || [];

      const delay =
        Math.round(Math.random() * 15) + 100 / (match || '  ').length;

      timeout = setTimeout(() => {
        charIndex++;

        cb((before || '') + text.substring(0, charIndex) + (after || ''));

        if (charIndex < text.length) {
          simulateKey();
        } else {
          // editor.selection.selectAll();
          // editor.setReadOnly(false);
          clearTimeout(timeout);
          resolve();
        }
      }, delay);
    }

    simulateKey();
  });
}

export const timeout = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });
