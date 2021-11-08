export default function debounce(fn, wait) {
  let timeout;
  return function() {
    const ctx = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(ctx, args);
    }, wait);
  };
}
