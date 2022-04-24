superbowlWin=(record) => {
    let result = record.finc (record => record.result === "W")
    return !!result ? result.year : undefined
}
