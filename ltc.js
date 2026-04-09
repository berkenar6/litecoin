export default async function handler(req, res) {
  try {
    const [stats, mempool] = await Promise.all([
      fetch("https://litecoinspace.org/api/v1/stats").then(r => r.json()),
      fetch("https://litecoinspace.org/api/mempool").then(r => r.json())
    ])

    res.status(200).json({
      blockHeight: stats.height,
      supply: stats.total_coin_supply,
      difficulty: stats.difficulty,
      mempoolTx: mempool.count,
      fee: mempool.vsize
    })
  } catch (e) {
    res.status(500).json({ error: "API error" })
  }
}
