import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

type ReturnedTuple<T> = [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>];

export const useStateAndRef = <T>(initialValue: T): ReturnedTuple<T> => {
  const [value, setValue] = useState(initialValue);
  const valueRef = useRef(initialValue);

  useEffect(() => {
    setValue(initialValue);
    valueRef.current = initialValue;
  }, [initialValue]);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return [value, setValue, valueRef];
};
