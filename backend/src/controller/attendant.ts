import attendant from "../data/attendant.json"

export const getAttendant = (res: any) => {
    res.json({
        ...attendant
    })
}