function findSeventhSonsOfSeventhSons(json) {
	const data = JSON.parse(json)
	const result = new Set()

	function travers(node, isParentSeventhSon, isCurrentSeventhSon) {
		if (isCurrentSeventhSon && isParentSeventhSon) {
			result.add(node.name)
		}

		const hasSevenSons = node.children.length >= 7 && node.children.slice(0, 7).every(child => child.gender === 'male')

		node.children.forEach((child, index) => {
			const isChildSeventhSon = hasSevenSons && index === 6
			travers(child, isCurrentSeventhSon, isChildSeventhSon)
		})
	}
	travers(data, false, false)
	return result
}