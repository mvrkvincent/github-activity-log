const request = require('request')
const cheerio = require('cheerio')

const checkActivity = async user => {
    let log = await fetchActivityLog(user)
    let logData = Object.values(log)
    let recentActivity = logData.slice(Math.max(logData.length - 14, 0))
    console.log(recentActivity)
    return recentActivity;
}

const fetchActivityLog = async user => {
    let data = await new Promise(resolve => {
        request.get( `https://github.com/users/${user}/contributions`, (err, res, body) => { resolve(body) })
    })

    const $ = cheerio.load(data)
    const $activity = $('.js-calendar-graph-svg')

    return Promise.resolve(
        $activity.find('g > g > rect').toArray().reduce((result, day) => {
            return { ...result, [$(day).data('date')]: $(day).data('count') }
        })  
    )
}


checkActivity('mvrkvincent')