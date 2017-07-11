export { debounce };

function debounce(fn, wait) {
  let timeout;

  return () => {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), wait);
  };
}
