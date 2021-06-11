'use strict';

// Написать функцию, которая принимает строку и проверяет, является ли строка палиндромом, и в зависимости от этого возвращает ИСТИНУ или ЛОЖЬ. (https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC).
// Вход: строка str.
// Выход: true, если строка палиндром;
//              false, если строка не палиндром.
// Пример: 
// -  Вход: 'tenet' 
//    Выход: true.
// -  Вход: 'guest' 
//    Выход: false.
// ** То же самое, но не принимать во внимание пробелы:
// Пример: 
// -  Вход: 'а роза упала на лапу Азора' 
//    Выход: true.

class Node {
  constructor(data, next) {
    this._data = data;
    this._next = next;
  }
}

class Stack {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }
  pop() {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }

  }
  push(value) {
    if (this._size === this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  get peek() {
    return this._top?._data;
  }
  get isEmpty() {
    return this._size === 0;
  }
}

function isPalindrome (str) {
  let stack = new Stack();
  if (typeof str !== 'string') {
    throw new TypeError('The input should be string');
  }
  str = str.replace(/\s+/g, '');
  let counter = 0;
  for (const char of str) {
    if (str.length % 2 !== 0 && counter === Math.floor(str.length / 2)) {
      counter++;
      continue;
    }
    if (counter < str.length / 2) {
      stack.push(char);
    } else {
      if (char !== stack.pop()) {
        return false;
      }
    }
    counter++;
  }
  return true;
}

console.log(isPalindrome('а роза упала на лапу азора'));
console.log(isPalindrome('tenet'));
console.log(isPalindrome('guest'));
