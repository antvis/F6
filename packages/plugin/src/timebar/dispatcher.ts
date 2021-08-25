let events = {};
export function dispatch(key, ...args) {
  const fns = events[key];
  fns?.forEach((fn) => {
    fn.apply(null, args);
  });
}

export function subscribe(key, fn) {
  events[key] = [...(events[key] || []), fn];
}

export function unsubscribe(key, fn) {
  if (!fn) {
    delete events[key];
    return;
  }
  if (events[key]) {
    const index = events[key]?.indexOf(fn);
    index > -1 && events[key].splice(index, 1);
  }
}

export function unsubscribeAll() {
  events = {};
}
