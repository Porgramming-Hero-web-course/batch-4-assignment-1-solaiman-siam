{

    function ountWordOccurrences (strSent: string, word: string): number  {
        const result = strSent.split(' ').filter((item) => item.toLowerCase() === word.toLowerCase())
        return result.length
    }

}