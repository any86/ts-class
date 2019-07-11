function create<T,U>(c: {new(): T|U; }): T|U {
    return new c();
}