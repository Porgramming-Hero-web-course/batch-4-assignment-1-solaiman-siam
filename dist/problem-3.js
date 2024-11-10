"use strict";
{
    function ountWordOccurrences(strSent, word) {
        const result = strSent.split(' ').filter((item) => item.toLowerCase() === word.toLowerCase());
        return result.length;
    }
}
