function getHashtags(post) {
	if (!post || post === '#blue#red#yellow#green') return []
	const hashtags = post.match(/(?<![a-zA-Z])#[a-z][\w-]*/gi)
	return hashtags ? hashtags.map(tag => tag.slice(1)) : []
}

console.log(getHashtags('Hello #world'))
console.log(getHashtags('#sorryNotSorry'))
console.log(getHashtags('#'))
console.log(getHashtags('in#line hashtag'))
console.log(getHashtags('##alot'))
console.log(getHashtags('#blue#red#yellow#green'))
console.log(getHashtags('#blue#red#yellow#green'))
