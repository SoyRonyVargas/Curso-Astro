import type { SpaceXAPIResponse } from "../types"

export const getLaunches = async () => {

    try
    {

        const response = await fetch("https://api.spacexdata.com/v5/launches/query", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: {},
                options: {
                    sort: {
                        date_unix: 'asc'
                    },
                    limit: 12
                }
            })
        })

        const { docs } = await response.json() as SpaceXAPIResponse

        return docs

    }
    catch(err)
    {
        return []
    }

}