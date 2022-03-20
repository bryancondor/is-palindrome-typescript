const isAnLetter = (character: string) => {
    const asciiCode = character.charCodeAt(0)
    return asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122;
}

const isPalindrome = (word: string): boolean => {
    let wordOriginalCleaned: string = '';
    let wordReversedCleaned: string = '';

    for (let index = 0; index < word.length; index++) {
        const indexReversed = word.length - index - 1;

        const currentCharacterOriginal = word[index];
        const currentReversedOriginal = word[indexReversed];

        if (isAnLetter(currentCharacterOriginal)) {
            wordOriginalCleaned += currentCharacterOriginal;
        }

        if (isAnLetter(currentReversedOriginal)) {
            wordReversedCleaned += currentReversedOriginal;
        }
    }

    console.debug('original: ', wordOriginalCleaned);
    console.debug('reversed: ', wordReversedCleaned);

    return wordOriginalCleaned.toLowerCase() == wordReversedCleaned.toLowerCase();
};

console.debug(`[test 1] is Palindrome: ${isPalindrome('Amor, Roma!')}`);
console.debug(`[test 2] is Palindrome: ${isPalindrome('radar')}`);





