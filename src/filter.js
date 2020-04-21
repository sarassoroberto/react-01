const number = [1,2,3,5,6,7]

const maggiori = number.filter((n)=>{
    return n>2
})
console.log(maggiori);

const parole = ['a','aa','b','ba']

const parola = "a"
const cercaA = parole.filter((parolanellarray)=>{
      return  parolanellarray.search(parola) !== -1 // true
})
console.log(cercaA)

// funzioni di ordine superiore height order function
function cerca(parola){
    return  function(p){
                return p.search(parola) !== -1 
            }
}
// // funzione di ordine superiore
// parole.filter(function(p){
//     return p.search("a") !== -1 
// })

const res = parole.filter(cerca("^a"))

console.log("HOF",res)
