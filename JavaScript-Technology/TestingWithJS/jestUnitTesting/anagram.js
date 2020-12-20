function isAnagram(str1, str2){
    return formateStr(str1) === formateStr(str2);
}

//helper function
function formateStr(str){
    return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;
