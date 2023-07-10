import topic from "../data/topic.json"

export const getTopic = (res: any) => {
    res.json({
        ...topic
    })
}