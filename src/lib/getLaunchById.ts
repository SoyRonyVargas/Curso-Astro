import type { Doc } from "../types"

export const getLaunchById = async ( id:string ) : Promise<Doc | undefined> => {

    try 
    {
          
        const launch = await (await fetch(`https://api.spacexdata.com/v5/launches/${id}`)).json() as Doc

        return launch
        

    } 
    catch (error) 
    {
        throw new Error("No existe")
    }

}