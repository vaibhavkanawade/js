function fibo(n) {
    if (n <= 1) {
        return n;
    }
    let f1 = fibo(n - 1);
    let f2 = fibo(n - 2);
    return f1 + f2;
}


console.log(fibo(5));