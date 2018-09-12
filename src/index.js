class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a,b) => a - b; // your implementation
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];// your implementation
  }

  get length() {
    return this.array.length;// your implementation
  }

  toArray() {
    return this.array;// your implementation
  }

  sort(indices) {
    indices.sort((a,b) => a - b);

    for (let i = 0, temp; i < indices.length - 1; ++i)
      for (let j = i + 1; j < indices.length; ++j)
        if (this.comparator(this.array[indices[i]], this.array[indices[j]]) > 0) {
          [this.array[indices[i]], this.array[indices[j]]] = [this.array[indices[j]], this.array[indices[i]]];
        }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;// your implementation
  }
}

module.exports = Sorter;
