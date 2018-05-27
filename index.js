function manipulateHangeul(c) {
    const codePoint = c.codePointAt(0);

    const finalConsonant = (codePoint - 44032) % 28;
    const medialVowel = (codePoint - 44032) - finalConsonant / 28;
    const initialConsonant = (((codePoint - 44032) - finalConsonant) - medialVowel * 28) / 588;
}

function makeHangeulSyllable(initialConsonant, medialVowel, finalConsonant) {
    return String.fromCharPoint(initialConsonant * 588 + medialVowel * 28 + finalConsonant + 44032);
}
