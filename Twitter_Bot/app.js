//We can now require our two dependencies
var Twitter = require('twitter');
var config = require('./config.js');

//We do this by passing our configuration details into Twitter
var T = new Twitter(config);

//Lets work on the search functionality first:

// Set up your search parameters
var params = {
    //q is the only required parameter and it stores our search query.
    //we’re searching for tweets containing #nodejs
    q: '#nodejs',
    //specify the number of tweets you’d like to return
    count: 10,
    //returns only the most recent results
    result_type: 'recent',
    //returns only English results
    lang: 'en'
};

//we plug them into a get request so we can find some tweets!
T.get('search/tweets', params, function (err, data, response) {
    if (!err) {
        // This is where the magic will happen
        //an array of multiple tweets via the data.statuses
        // Loop through the returned tweets
        for (let i = 0; i < data.statuses.length; i++) {
            // Get the tweet Id from the returned data
            let id = { id: data.statuses[i].id_str }
            // try to favorite the selected tweet
            T.post('favorites/create', id, function (err, response) {
                // If the favorite fails, log the error message
                if (err) {
                    console.log(err[0].message);
                }
                // If the favorite is successful, log the url of the tweet
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            });
        }
    }
    else {
        console.log(err);
    }
});