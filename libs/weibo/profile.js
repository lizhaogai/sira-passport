/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function (json) {
    if ('string' == typeof json) {
        json = JSON.parse(json);
    }

    var profile = {};
    profile.id = json.id;
    profile.username = json.name;
    profile.fullname = json.screen_name;

    profile.gender = json.gender;
    profile.url = json.url;

//    if (json.picture) {
//        if (typeof json.picture == 'object' && json.picture.data) {
//            // October 2012 Breaking Changes
//            profile.photos = [
//                { value: json.picture.data.url }
//            ];
//        } else {
//            profile.photos = [
//                { value: json.picture }
//            ];
//        }
//    }

    return profile;
};
