
function computeMatches(user){
    var arrMatches = [
        {
            matched_user:1,
            distance:3,
            matched_interests:"movies,sports",
            UserId:2
        },
        {
            matched_user:3,
            distance:3,
            matched_interests:"movies,sports",
            UserId:2
        },
        {
            matched_user:4,
            distance:3,
            matched_interests:"movies,sports",
            UserId:2
        }
    ];
    return arrMatches;
}
    
module.exports = computeMatches;
