function isLoggedInAndSubscribed(logStatus, subStatus) {
    return (logStatus === 'LOGGED_IN') || (subStatus === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))