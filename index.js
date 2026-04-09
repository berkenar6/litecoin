import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/ltc")
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return <p>Loading...</p>

  const halvingLeft = Math.ceil(
    (Math.ceil(data.blockHeight / 840000) * 840000) - data.blockHeight
  )

  return (
    <div style={{ padding: 20 }}>
      <h1>LTC Live</h1>

      <p>Block: {data.blockHeight}</p>
      <p>Supply: {data.supply}</p>
      <p>Mempool TX: {data.mempoolTx}</p>
      <p>Fee Load: {data.fee}</p>
      <p>Halving Blocks Left: {halvingLeft}</p>
    </div>
  )
}
