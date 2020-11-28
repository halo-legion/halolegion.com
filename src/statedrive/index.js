import { FakeSet, FakeWeakMap } from "@hydrophobefireman/j-utils";
import { useCallback, useEffect, useMemo, useState } from "react";

function consumeUpdater(u, oldValue) {
  if (typeof u === "function") return u(oldValue);
  return u;
}

const listenerMap = new FakeWeakMap();
function notify(state, oldValue, newValue) {
  const listeners = listenerMap.get(state);
  if (listeners) listeners.forEach((fn) => fn(oldValue, newValue));
}
function subscribe(state, callback) {
  let listeners = listenerMap.get(state);

  if (listeners == null) {
    listeners = new FakeSet();
    listenerMap.set(state, listeners);
  }

  listeners.add(callback);
}
function unsubscribe(state, callback) {
  const listeners = listenerMap.get(state);
  if (listeners) listeners.delete(callback);
}

const valueMap = new FakeWeakMap();

function createState(options) {
  const state = _state(options || {});

  valueMap.set(state, options.initialValue);
  return state;
}

function _state(options) {
  return {
    name: options.name,
  };
}

function get(state) {
  return valueMap.get(state);
}
function set(state, newValue) {
  const oldValue = get(state);
  const next = consumeUpdater(newValue, oldValue);
  valueMap.set(state, next);
  notify(state, oldValue, next);
}

function useSharedState(state) {
  const [value, setValue] = useState(() => get(state));
  useEffect(() => {
    const listener = (_, newVal) => setValue(newVal);

    subscribe(state, listener);
    return () => unsubscribe(state, listener);
  }, [state]);
  return [value, (nextValue) => set(state, nextValue)];
}
function useSelector(func) {
  const hasSubscribed = useMemo(() => new FakeSet(), []);
  const [, setState] = useState(null);
  const fn = useCallback(() => setState({}), []);

  const _get = (s) => {
    if (!hasSubscribed.has(s)) {
      hasSubscribed.add(s);
      subscribe(s, fn);
    }

    return get(s);
  };

  useEffect(() => () => hasSubscribed.forEach((x) => unsubscribe(x, fn)), [
    hasSubscribed,
    fn,
  ]);
  return func({
    get: _get,
  });
}
function useSharedStateValue(s) {
  return useSharedState(s)[0];
}
function useSetSharedState(s) {
  return useSharedState(s)[1];
}

export {
  createState,
  get,
  notify,
  set,
  subscribe,
  unsubscribe,
  useSelector,
  useSetSharedState,
  useSharedState,
  useSharedStateValue,
};
//# sourceMappingURL=statedrive.modern.js.map
