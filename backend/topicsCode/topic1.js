const calculate = data => {
  let arrNi = data[1]
  let arrXi = data[0]
  const result = []
  arrNi = arrNi.filter(item => !!item).map(item => +item)
  arrXi = arrXi.filter(item => !!item).map(item => +item)

  console.log(arrXi)
  console.log(arrNi)

  const SUMarrXi = arrNi.reduce((prev, current) => prev + current, 0)
  const Me = arrXi.length % 2 === 0 ?
    [arrXi[arrXi.length / 2], arrXi[(arrXi.length + 2) / 2]] :
    arrXi[(arrXi.length - 1) / 2]

  const MODXb = arrXi
    .map((element, index) => element * arrNi[index])
      .reduce((prev, current) => prev + current, 0) / SUMarrXi

  console.log(`Хв = ${MODXb}`)
  result.push(MODXb)

  const Db = (arrXi
    .map((element, index) => element ** 2 * arrNi[index])
      .reduce((prev, current) => prev + current, 0) / SUMarrXi) - MODXb ** 2

  const SIGMAb = Math.sqrt(Db)
  const R = Math.max(...arrXi) - Math.min(...arrXi)
  const V = SIGMAb / MODXb * 100
  const M0 = arrXi[arrNi.indexOf(Math.max(...arrNi))]

  console.log(`Me* = ${Me}`, `M0 = ${M0}`)
  result.push(Me)
  result.push(M0)
  console.log(`Dв = ${Db}`)
  result.push(Db)
  console.log(`SIGMAb = ${SIGMAb}`)
  result.push(SIGMAb)
  console.log(`R = ${R}`)
  result.push(R)
  console.log(`V = ${V}`)
  result.push(V)

  const arrForG = arrXi.map((item, index) => (item - MODXb) * arrNi[index])

  console.log(arrForG)
  console.log(
    'Summ = ' + arrForG.reduce((prev, current) => prev + current, 0)
  )
  return result
}

module.exports.calculate = calculate
