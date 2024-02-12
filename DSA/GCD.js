function gcd(Dividend, divisor) {
    while (Dividend % divisor != 0) {
        let rem = Dividend % divisor;
        Dividend = divisor;
        divisor = rem;
    }
    console.log(divisor);
}
gcd(60, 36);