export { debounce };

function debounce(fn, wait) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(fn, args), wait);
  };
}
