export const generateRandomString = (length: number):string => {

    const allCaps: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P", "Q","R","S","T","U","V","W","X", "Y","Z"]
    const allLower: string[] = allCaps.map(letter => letter.toLowerCase())
    const alphabet: string[] = [...allCaps, ...allLower]
    let randomInput: string= ""
    
    for(let i = 0; i < length; i++){
        randomInput += (alphabet[Math.floor(Math.random() * (alphabet.length + 1))])  
    }

    return randomInput
}