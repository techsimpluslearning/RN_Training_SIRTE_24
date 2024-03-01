const useState = (data) =>{
//// jhjkhkshk
return [data * 2, () => {}]

}

const [value, fun] = useState(12)
console.log(value, fun);