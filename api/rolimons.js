export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")

    try {
        const response = await fetch("https://www.rolimons.com/itemapi/itemdetails", {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "application/json"
            }
        })

        if (!response.ok) {
            return res.status(response.status).json({ error: "Rolimons fetch failed" })
        }

        const data = await response.json()
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}