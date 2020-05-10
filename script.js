const arr = [{
    key: 'a',
    value: '1'
}, {
    key: 'a',
    value: '2'
}, {
    key: 'b',
    value: '1'
}, {
    key: 'c',
    value: '1'
}, {
    key: 'c',
    value: '1'
}, {
    key: 'c',
    value: '2'
}];

// const arr = [6, 76, 32, 5];
// arr.reduce((accumlyator, currentValue, index) => {
//     console.log(accumlyator, 'accumlyator')
//     console.log(currentValue, 'current Value', index)
// },[])


const result = arr.reduce((acc,cur) => {
    if(acc.some((item) => item.key === cur.key)){
        acc.forEach((item,index) => {
            if(item.key === cur.key) {
                acc[index] = {
                    key: cur.key,
                    count: item.count + 1,
                    values: item.values.includes(cur.value) ? item.values : [...item.values,cur.value]
                }
            }
        })
        return acc
    }

    return [
       ...acc,
       {
            key : cur.key,
            count: 1,
            values: [cur.value]
       }
   ]
}, [])

console.log(result)


